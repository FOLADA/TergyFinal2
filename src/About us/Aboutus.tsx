import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <>
      <br />
      <div className="about-container">
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title">ჩვენს შესახებ</h1>
          <motion.p 
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            ჩვენ ვქმნით ინოვაციურ ციფრულ გადაწყვეტილებებს, რომლებიც შთააგონებენ და ცვლიან რეალობას.
          </motion.p>
        </motion.div>

        <div className="about-content">
          {[
            { title: "მისია", text: "ჩვენი მიზანია შევქმნათ ტექნოლოგიები, რომლებიც ადამიანებს უადვილებენ ცხოვრებას." },
            { title: "ხედვა", text: "ჩვენ წარმოვადგენთ მომავალს, სადაც ინოვაცია და ტრადიცია ერთიანდება." },
            { title: "ფასეულობები", text: "ინოვაცია, ვალიდურობა, ხარისხი და მომხმარებელზე ორიენტირება." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3}}
              whileHover={{ scale: 1.07, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="team-section">
          <h2 className="hero-title">ჩვენი გუნდი</h2>
          <div className="team-members">
            <motion.div 
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{duration: 0.1 }}
              whileHover={{ scale: 1.15 }}
            >
              <img src="SabaFoladashvili.png" alt="Team Member" />
              <h3>საბა ფოლადაშვილი</h3>
              <p>ყველაფერი</p>
            </motion.div>
          </div>
        </div>

      <a href="https://www.linkedin.com/in/crusadersf/" target="_blank" rel="noreferrer">
      <motion.button 
          className="about-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          დაგვიკავშირდით
        </motion.button>
      </a>
      </div>
    </>
  );
};

export default AboutUs;