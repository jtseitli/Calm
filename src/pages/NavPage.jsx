import React from "react";
import PageLayout from "../components/PageLayout";

function NavPage({ title, subtitle, buttonText, image, className, onButtonClick}) {
  return (
    <div>
      <PageLayout
        title={title}
        subtitle={subtitle}
        buttonText={buttonText} 
        image={image}
        className={className} 
        onButtonClick={onButtonClick} 
      />
    </div>
  );
}

export default NavPage;
