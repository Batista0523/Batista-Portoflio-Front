import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
function About() {
  const abouts = [
    {
      title: "Front End",
      descriptions: "i am Front-end developer",
      imgUrl: images.about01,
    },
    {
      title: "Back End",
      descriptions: "i am Back-end developer",
      imgUrl: images.about02,
    },
    {
      title: "Full Stack ",
      descriptions: "i am Full Stack developer",
      imgUrl: images.about03,
    },
    {
      title: "UX/UI ",
      descriptions: "i am UX/UI",
      imgUrl: images.about04,
    },
  ];

  return (
    <div>
      <h2 className="head-text">
        I know that <span>Good Developer</span> means<br /><span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.descriptions}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
