import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/Bryannwr2000"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <a
          href="https://www.linkedin.com/in/bryannwr2000/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
