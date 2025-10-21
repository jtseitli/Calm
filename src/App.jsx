import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import NavBar from "./components/NavBar";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import Landing from "./pages/Landing";
import NavPage from "./pages/NavPage";
import sleepImg from "./assets/sleep.jpeg";
import stressImg from "./assets/stress.jpeg";
import mindfulnessImg from "./assets/midfulness.jpeg";

function App() {
  const [showLogin, setShowLogin] = useState(false);  
  const [showSignup, setShowSignup] = useState(false); 
  const location = useLocation();


  const pageBackgrounds = {
    "/": "#fff",
    "/sleep": "#E2E2E7",
    "/stress": "#E2E5EA",
    "/mindfulness": "#E3E7E4",
  };

  const currentBackground = pageBackgrounds[location.pathname] || "#fff";

  return (
    <div className="app" style={{ backgroundColor: currentBackground }}>
      <NavBar 
        onLoginClick={() => setShowLogin(true)} 
        onSignupClick={() => setShowSignup(true)} 
      />

      <Routes>
        <Route
          path="/"
          element={
            <Landing
              onLoginClick={() => setShowLogin(true)}  
              onSignupClick={() => setShowSignup(true)}
            />
          }
        />
        <Route
          path="/sleep"
          element={
            <NavPage
              title="Sleep Stories, sleep meditations, music and soundscapes for your dreamiest sleep yet"
              subtitle="Join millions of sound sleepers worldwide. Fall asleep easily and naturally with our Sleep Stories, sleep meditations, exclusive sleep music and sleep sounds. With hundreds of titles to choose from, you'll be drifting off to dreamland in no time. Just press play and drift away."
              buttonText="Sleep better for free"
              image={sleepImg}
              className="sleep-page"
              onButtonClick={() => setShowSignup(true)}
            />
          }
        />
        <Route
          path="/stress"
          element={
            <NavPage
              title="Anxiety and stress relief whenever you need it"
              subtitle="Learn how to calm anxiety and find the tools for in-the-moment stress relief. Our clinical experts and meditation teachers are here with a wide range of stress relief programs, meditations for anxiety, and guided content to help you soothe anxiety and feel better."
              buttonText="Relieve your stress for free"
              image={stressImg}
              className="stress-page"
              onButtonClick={() => setShowSignup(true)}
            />
          }
        />
        <Route
          path="/mindfulness"
          element={
            <NavPage
              title="Mindfulness, meditation and guided programs to build healthy habits that will last a lifetime"
              subtitle="You're in the right place. Calm puts the tools to achieve mindfulness in your back pocket with guided meditations, soothing music, and daily guided programs designed to fit into your lifestyle in practical ways."
              buttonText="Live mindfully for free"
              image={mindfulnessImg}
              className="mindfulness-page"
              onButtonClick={() => setShowSignup(true)}
            />
          }
        />
      </Routes>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
    </div>
  );
}

export default App;
