import React from "react";
import "./homepage.styles.scss";
import CoursesPreview from "../../components/courses-preview/courses-preview.component";

const HomePage = () => (
  <div className="homepage page-container">
    <div className="banner">
      <div className="profile-picture"></div>
    </div>
    <div className="welcome-text">
      למי שחושבים ששפת הסימנים היא יפה, מופלאה, חשובה וקסומה!
      <br />
      למי שחשוב לפתח את המוח ואת יכולת הביטוי!
      <br />
      למי שרוצה עולם נגיש יותר, לדבר עם השכן או האחיינית בשפת הסימנים...
      <br />
      למי שאוהבים ללמוד בכיף!
      <br />
      לקטנים, לגדולים ובמיוחד בשבילך !
    </div>
    <CoursesPreview />
  </div>
);

export default HomePage;
