import React, { useState, useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import getYouTubeID from "get-youtube-id";
import { PortableText } from "@portabletext/react";

import { AiFillTags } from "react-icons/ai";
import "./Projects.scss";

const Project = () => {
  const { projectId } = useParams();
  const [[project], setProject] = useState("");

  useEffect(() => {
    const query = `*[_type=='project' && projectId == '${projectId}']`;
    client.fetch(query).then((data) => setProject(data));
  }, [projectId]);

  if (!project) return <Loader />;

  const { body, tags, title } = project;

  const components = {
    types: {
      projectImage: ({ value }) => (
        <img src={urlFor(value.asset)} alt={value.altText} />
      ),
      youtube: ({ value }) => {
        const videoId = getYouTubeID(value.url);
        const url = `https://www.youtube.com/embed/${videoId}`;
        if (!videoId) return <div>Missing Video ID</div>;
        return (
          <div className="app__Project-video">
            <iframe
              width="800"
              height="450"
              src={url}
              title="YouTube video player"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        );
      },
      pdf: ({ value }) => (
        <div className="app__Project-pdf">
          <iframe
            title="PDF Document"
            src={value.pdf}
            width="800"
            height="600"
            allow="autoplay"
            style={{ border: "none" }}
          ></iframe>
        </div>
      ),
    },
  };

  return (
    <>
      <ProjectHeader />
      <div className="app__Project-wrapper">
        <div className="app__Project-container">
          <h2 className="content-heading">{title}</h2>
          <div className="app__Project-tags">
            <AiFillTags />
            {tags.map((tag, index) => (
              <motion.div
                whileHover={{ scale: [1, 1.1] }}
                transition={{ duration: 0.5 }}
                className="app__Project-tag"
                key={index}
              >
                {tag}
              </motion.div>
            ))}
          </div>
          <section className="app__Project-contents">
            <PortableText value={body} components={components} />
          </section>
        </div>
      </div>
      <ProjectFooter />
    </>
  );
};
export default Project;
