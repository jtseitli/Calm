import React from "react";

function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2 style={{ paddingBottom: "16px" }}>Login to your account</h2>

        <button className="login-option email">Sign in with Email</button>
        <button className="login-option fb">Sign in with Facebook</button>
        <button className="login-option apple">Sign in with Apple</button>
        <button className="login-option google">Sign in with Google</button>

        <p className="login-text">
          By tapping Continue or logging into an existing Calm account, you agree to our
          <a href="#"> Terms </a> and acknowledge that you have read our
          <a href="#"> Privacy Policy</a>.
        </p>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
