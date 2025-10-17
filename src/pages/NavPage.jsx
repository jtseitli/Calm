import React from "react";
import PageLayout from "../components/PageLayout";

function NavPage({ title, subtitle, buttonText, image }) {
  return (
    <div>
      <PageLayout
        title={title}
        subtitle={subtitle}
        buttonText={buttonText}
        image={image}
      />
    </div>
  );
}

export default NavPage;
