import React from "react";

function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Create a free account</h2>

        <button className="login-option email">Continue with Email</button>
        <button className="login-option fb">Continue with Facebook</button>
        <button className="login-option apple">Continue with Apple</button>
        <button className="login-option google">Continue with Google</button>

        <p className="login-text">
          By tapping Continue or logging into an existing Calm account, you agree to our
          <a href="#"> Terms </a> and acknowledge that you have read our
          <a href="#"> Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}

export default SignupModal;
