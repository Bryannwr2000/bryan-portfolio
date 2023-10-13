import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { client, urlFor } from "../../client";
import Loader from "../../components/Loader/Loader";

import "./Profile.scss";

const moveVariants = {
  whileInView: {
    y: [-100, 0],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const shake = {
  whileHover: {
    rotate: [0, 15, 0, -15, 0],
    transition: { duration: 0.5, repeat: 1 },
  },
};

const zoom = {
  whileHover: {
    scale: [1, 1.1, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const zoom1 = {
  whileHover: {
    scale: [1, 1.1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Profile = () => {
  const [[profile], setProfile] = useState("");

  useEffect(() => {
    const query = "*[_type == 'profile']";
    client.fetch(query).then((data) => {
      setProfile(data);
    });
  }, []);

  if (!profile) return <Loader />;

  return (
    <div id="home" className="app__profile app__flex">
      <motion.div
        variants={moveVariants}
        whileInView={moveVariants.whileInView}
        className="app__profile--container"
      >
        <div className="app__profile-content">
          <motion.div
            variants={zoom}
            whileHover={zoom.whileHover}
            className="badge-cmp app__flex"
          >
            <div style={{ marginBottom: "0.5rem" }}>
              <motion.div
                className="app__profile--text"
                variants={shake}
                whileHover={shake.whileHover}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.div>
              <p
                style={{ display: "inline-block", marginLeft: "0.2rem" }}
                className="app__profile--text"
              >
                Hello, I am
              </p>
              <h1 className="app__profile--head-text">Bryan</h1>
            </div>
          </motion.div>
          <h1 className="app__profile--bold-text">
            <span>Mechatronics </span>Engineer
          </h1>
          <h1 className="app__profile--bold-text">
            <span>Full Stack </span>Developer
          </h1>
        </div>
        <div className="app__profile-btn-container">
          <a href={profile.resume} target="_blank" rel="noreferrer">
            <button className="app__profile-btn1">View Resume</button>
          </a>
          <a href="#contact">
            <button className="app__profile-btn2">Contact Info</button>
          </a>
        </div>
        <div className="app__profile-socials">
          <a
            href="https://www.linkedin.com/in/bryannwr2000/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={zoom1} whileHover={zoom1.whileHover}>
              <FaLinkedinIn />
            </motion.div>
          </a>
          <a
            href="https://github.com/Bryannwr2000"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={zoom1} whileHover={zoom1.whileHover}>
              <FaGithub />
            </motion.div>
          </a>
        </div>
      </motion.div>
      <div className="app__profile-img-container app__flex">
        <motion.div
          className="app__profile-img"
          style={{ backgroundColor: profile.color }}
        >
          <motion.img
            src={urlFor(profile.img)}
            alt="profile"
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Profile, "home");
