import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";


function About() {
  const abouts = [
    {
      title: "Front End Developer",
      description:
        "Specializing in creating engaging and responsive user interfaces.",
      imgUrl: images.front,
    },
    {
      title: "Back End Developer",
      description: "Focused on server-side logic and database interactions.",
      imgUrl: images.back,
    },
    {
      title: "Full Stack Developer",
      description: "Experienced in both Front-end and Back-end development.",
      imgUrl: images.full,
    },
    {
      title: "Database (SQL)",
      description: "Proficient in designing and managing SQL databases.",
      imgUrl: images.database,
    },
  ];

  return (
    <div>
      <h2 className="head-text">
        I know that <span>Good Developer</span> means
        <br />
        <span>Good Business</span>
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
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2, type: "tween" }}
          className="card border-0 shadow about-card"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
        </motion.div>
      </div>
    </div>
  );
}

export default About;
