import React from "react";
import "./homepage.styles.scss";
import CoursesPreview from "../../components/courses-preview/courses-preview.component";

const HomePage = () => (
  <div className="homepage page-container">
    <div className="banner">
      <div className="profile-picture"></div>
    </div>
    <CoursesPreview />
  </div>
);

export default HomePage;
