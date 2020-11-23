import React from "react";
import "./courses-preview.styles.scss";
import beginnersIcon from "../../assets/course-icons/beginners.jpg";
import advancedIcon from "../../assets/course-icons/advanced.jpg";
import lecturesIcon from "../../assets/course-icons/lectures.jpg";
import workshopsIcon from "../../assets/course-icons/workshops.jpg";

const CoursesPreview = () => (
  <div className="courses-preview page-container">
    <div className="course">
      <div className="course-description">
        <span className="course-headline"> קורס לימוד למתחילים</span>
        <br />
        <span className="course-headline">ללמוד עם הילד הפנימי שלך </span>
        <br />
        <span className="course-text">
          לימוד שפת הסימנים בדרך ייחודית שלא נראתה קודם!
        </span>
        <br />
        <span className="course-details">
          קורס וירטואלי | כ-30 סרטונים לאימון יומי
        </span>
      </div>
      <button className="details-button">לפרטים</button>
      <div className="course-icon">
        <img src={beginnersIcon} alt="" />
      </div>
    </div>

    <div className="course">
      <div className="course-description">
        <span className="course-headline"> קורס לימוד למתקדמים</span>
        <br />
        <span className="course-headline">ללמוד עם הילד הפנימי שלך </span>
        <br />
        <span className="course-text">
          לימוד שפת הסימנים בדרך ייחודית שלא נראתה קודם!
        </span>
        <br />
        <span className="course-details">
          קורס וירטואלי | כ-4 חודשים | בליווי אישי
        </span>
      </div>
      <button className="details-button">לפרטים</button>
      <div className="course-icon">
        <img src={advancedIcon} alt="" />
      </div>
    </div>

    <div className="course">
      <div className="course-description">
        <span className="course-headline"> סדנאות </span>
        <br />
        <span className="course-text">
          סדנאות חווייתיות ומהנות להכרות עם שפת הסימנים תוך הכרת הסיפור האישי
          שלי.
        </span>
        <br />
        <span className="course-details">
          לקבוצות עד 20 איש | לקהלים שומעים ובעלי מוגבלויות
        </span>
      </div>

      <button className="details-button">לפרטים</button>
      <div className="course-icon">
        <img src={workshopsIcon} alt="" />
      </div>
    </div>

    <div className="course">
      <div className="course-description">
        <span className="course-headline"> הרצאות לקהל הרחב </span>
        <br />
        <span className="course-text">
          הרצאות מרתקות ומעשירות בנושאי הנגשת המרחב לבעלי מוגבלויות מנקודת מבט
          אישית.
        </span>
        <br />
        <span className="course-details">
          לחברות וארגונים | לקהלים שומעים ובעלי מוגבלויות
        </span>
      </div>

      <button className="details-button">לפרטים</button>
      <div className="course-icon">
        <img src={lecturesIcon} alt="" />
      </div>
    </div>
  </div>
);

export default CoursesPreview;
