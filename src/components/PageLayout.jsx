import React from "react";

function PageLayout({ title, subtitle, buttonText, image, className }) {
  return (
    <section className={`page-layout ${className || ""}`}>
      <div className="page-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="primary-btn">{buttonText}</button>
      </div>
      <div className="page-image">
        <img src={image} alt="Page visual" />
      </div>
    </section>
  );
}

export default PageLayout;
