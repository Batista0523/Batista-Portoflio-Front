import React from "react";
import { motion } from "framer-motion";
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
const Header = () => {
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
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-tex">Elisaul Batista</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Full Stack Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 2 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          images.reactPgn,
          images.postgresqlPgn,
          images.muIcons,
          images.vite,
        ].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
      
    </div>
  );
};

export default Header;
