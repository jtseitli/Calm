import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; 
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

  return (
    <div className="app">
      <NavBar onLoginClick={() => setShowLogin(true)} />

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
            />
          }
        />
        <Route
          path="/stress"
          element={
            <NavPage
              title="Reduce stress and find your calm"
              subtitle="Discover guided meditations and breathing exercises designed to help you stay balanced, even in stressful moments."
              buttonText="Relax now"
              image={stressImg}
              className="stress-page" 
            />
          }
        />
        <Route
          path="/mindfulness"
          element={
            <NavPage
              title="Be more mindful every day"
              subtitle="Learn to focus, stay present, and find joy in everyday life with guided mindfulness sessions."
              buttonText="Practice mindfulness"
              image={mindfulnessImg}
              className="mindfulness-page" 
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
