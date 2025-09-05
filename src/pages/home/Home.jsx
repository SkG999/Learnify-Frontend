/*import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showWelcome && (
        <div className="welcome-screen">
          <h1 className="welcome-text">Welcome to Learnify</h1>

          {/* 5 Bubbles */}
          <div className="bubble bubble-center"></div>
          <div className="bubble bubble-left1"></div>
          <div className="bubble bubble-left2"></div>
          <div className="bubble bubble-right1"></div>
          <div className="bubble bubble-right2"></div>
        </div>
      )}

      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Get Started
          </button>
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
