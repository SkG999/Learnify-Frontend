import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing high-quality online courses to help
          individuals learn and grow in their desired fields. Our experienced
          instructors ensure that each course is tailored for effective learning
          and practical application.
        </p>
        <div className="team">
          <div className="member">
            <div className="avatar">JS</div>
            <h4>John Smith</h4>
            <p>Founder & Instructor</p>
          </div>
          <div className="member">
            <div className="avatar">AL</div>
            <h4>Alice Lee</h4>
            <p>Course Designer</p>
          </div>
          <div className="member">
            <div className="avatar">MK</div>
            <h4>Mike Kim</h4>
            <p>Developer & Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
