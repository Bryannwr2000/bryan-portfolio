import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const zoomIn = {
  whileHover: {
    scale: [1, 1.1],
    transition: { duration: 0.5 },
  },
};

const zoomOut = {
  whileHover: {
    scale: [1, 0.9],
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skillsMechatronics, setSkillsMechatronics] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'skillsMechatronics']";
    const skillsQuery = "*[_type == 'skills']";

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(query).then((data) => {
      setSkillsMechatronics(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        {" "}
        My Repository of <span>Tools</span> and <span>Skills</span>
      </h2>
      <div className="app__skills-container">
        <div className="app__skills-container-box app__flex">
          <motion.div className="app__skills-list">
            <h4 className="app__skills-title">Mechatronics</h4>
            {skillsMechatronics.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <motion.div
                  variants={skill.skillLevel === "basic" ? zoomOut : zoomIn}
                  whileHover={
                    skill.skillLevel === "basic"
                      ? zoomOut.whileHover
                      : zoomIn.whileHover
                  }
                  className={`app__flex app__skills-level-${skill.skillLevel}`}
                >
                  <img
                    src={urlFor(skill.icon)}
                    alt={skill.name}
                    className={`app__skills-level-${skill.skillLevel}`}
                  />
                </motion.div>

                <p className="p-text app__skills-text"> {skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="app__skills-vertical"></div>
        <div className="app__skills-container-box">
          <motion.div className="app__skills-list">
            <h4 className="app__skills-title"> Web Development </h4>
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex app__skills-web"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>

                <p className="p-text app__skills-text"> {skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
