import React from "react";
import Hero from "../components/Hero";

function Landing({ onLoginClick }) {
  return (
    <div>
      <Hero onLoginClick={onLoginClick} />
    </div>
  );
}

export default Landing;
