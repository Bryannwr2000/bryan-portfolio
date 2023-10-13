import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Mechatronics</span> Enthusiasist with a<span> Software</span> Soul
      </h2>
      <h4 className="h4-text">
        Fusing AI, Hardware, and Software: Pioneering Next-Generation Innovation
        🚀
      </h4>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
