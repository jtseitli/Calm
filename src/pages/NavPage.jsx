import React from "react";
import PageLayout from "../components/PageLayout";

function NavPage({ title, subtitle, buttonText, image, className }) {
  return (
    <div>
      <PageLayout
        title={title}
        subtitle={subtitle}
        buttonText={buttonText} 
        image={image}
        className={className} 
      />
    </div>
  );
}

export default NavPage;
