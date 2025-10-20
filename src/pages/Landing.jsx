import React from "react";
import Hero from "../components/Hero";

function Landing({ onLoginClick, onSignupClick }) {
  return <Hero onLoginClick={onLoginClick} onSignupClick={onSignupClick} />;
}
export default Landing;

