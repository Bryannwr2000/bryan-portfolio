import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { HiDocumentText } from "react-icons/hi2";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
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

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            variants={zoom}
            whileHover={zoom.whileHover}
            className="badge-cmp app__flex"
          >
            <motion.span variants={shake} whileHover={shake.whileHover}>
              👋
            </motion.span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Hello, I am </p>
              <h1 className="head-text">Bryan</h1>
            </div>
          </motion.div>
          <motion.div
            className="tag-cmp app__flex"
            variants={zoom}
            whileHover={zoom.whileHover}
          >
            <p className="p-text" style={{ color: "#36454F" }}>
              Mechatronics Engineer ⚙️
            </p>
            <p className="p-text" style={{ color: "#36454F" }}>
              Web Developer 🌐
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.Bear} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <Tooltip id="resume-tooltip" />
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        <motion.div
          variants={zoom1}
          whileHover={zoom1.whileHover}
          className="circle-cmp app__flex"
        >
          <a
            href="https://www.linkedin.com/in/bryannwr2000/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="circle-cmp-icon" />
          </a>
        </motion.div>

        {/* Resume */}
        <motion.div
          variants={zoom1}
          whileHover={zoom1.whileHover}
          className="circle-cmp app__flex"
          data-tooltip-id="resume-tooltip"
          data-tooltip-content="View My Resume 📄"
        >
          <a
            href="https://drive.google.com/file/d/1bOKCaL-yZmagimwG4hqZVaHkkC3j0lTv/view"
            target="_blank"
            rel="noreferrer"
          >
            <HiDocumentText className="circle-cmp-icon" />
          </a>
        </motion.div>

        <motion.div
          variants={zoom1}
          whileHover={zoom1.whileHover}
          className="circle-cmp app__flex"
        >
          <a
            href="https://github.com/Bryannwr2000"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="circle-cmp-icon" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
