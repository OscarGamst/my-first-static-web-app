
// src/pages/Activity.jsx
import React from "react";
import "../styles/index.css";
import ProgressBar from "../components/ProgressBar";
import Goals from "../components/Goals";
import ActivityList from "../components/ActivityList";

const Activity = () => {
  return (
    <div className="activity-page-wrapper">
      <div className="activity-page-main">
      <ProgressBar/>
      <ActivityList/>
      </div> 
      
      <div className="activity-page-siebar">
      <Goals/>
      </div> 
      <div className="activity-page-empty"></div> 
    </div>
  );
};

export default Activity;
