import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { Tooltip } from "react-tooltip";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdOutlineWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experience.scss";

const Experience = () => {
  const [certifications, setCertifications] = useState([]);
  const [timelineElements, setTimelineElements] = useState([]);

  useEffect(() => {
    const query = "*[_type =='certifications']";
    const timelineQuery = "*[_type =='timelineElements']";

    client.fetch(query).then((data) => {
      setCertifications(data);
    });

    client.fetch(timelineQuery).then((data) => {
      data.sort((a, b) => b.id - a.id); //sorting in descending order
      setTimelineElements(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">My Experience</h2>
      <div className="app__experience-container">
        <div className="app__certificate-container">
          <p className="bold-text">Certifications</p>
          <div className="app__certificate-items">
            {certifications.map((cert) => (
              <div
                className="app__certificate-item app__flex"
                key={cert.name}
                data-tooltip-id={cert.name}
                data-tooltip-content={cert.name}
              >
                <a href={cert.url} target="_blank" rel="noreferrer">
                  <img src={urlFor(cert.icon)} alt={cert.name} />
                </a>
                <Tooltip
                  id={cert.name}
                  effect="solid"
                  arrowColor="#fff"
                  className="app__experience-tooltip"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="app__experience-vertical"></div>
        <div className="app__timeline-container">
          <VerticalTimeline animate>
            {timelineElements.map((element) => (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={
                  element.icon === "work"
                    ? { background: "#7880d9" } //#06D6A0
                    : { background: "#f9c74f" }
                }
                icon={
                  element.icon === "work" ? <MdOutlineWork /> : <IoMdSchool />
                }
              >
                <h3 className="app__timeline-title">{element.title}</h3>
                <h5 className="app__timeline-subtitle">{element.location}</h5>
                <details>
                  <summary>Details</summary>
                  <p id="description">{element.description}</p>
                </details>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__primarybg"
);
