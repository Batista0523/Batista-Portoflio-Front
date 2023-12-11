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
          <img
            src={images.work1}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              marginRight: "20px",
            }}
          />
          <div className="card-body" style={{ cursor: "pointer" }}>
            <motion.h4 className="card-text about-des">
              I am a dedicated full-stack developer, driven by an unyielding
              pursuit of excellence. I am eager to invest more than 70 hours per
              week, and I am open to extending my commitment throughout all
              seven days should the project demand it. In the face of
              challenges, my passion ignites, propelling me to deliver
              outstanding results with efficiency and precision. Proficient in
              both English and Spanish, and holding a US passport, I am prepared
              to embark on any necessary journey to contribute wholeheartedly to
              the success of our endeavors.
            </motion.h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
