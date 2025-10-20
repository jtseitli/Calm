import React from "react";
import { useNavigate } from "react-router-dom";
import lake from "../assets/lake.jpeg";

function Hero({ onLoginClick, onSignupClick }) {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${lake})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Calm your mind. Change your life.</h1>
        <p>The #1 app for sleep, meditation and relaxation</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={onSignupClick}>
            Try Calm for Free
          </button>
          <button className="secondary-btn" onClick={onLoginClick}>
            Already have an account
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
