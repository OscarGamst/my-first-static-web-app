// src/pages/Dashboard.jsx
import React from "react";
import ActivityFeed from "../components/ActivityFeed";
import SideBar from "../components/SideBar";
import ProfileCard from "../components/ProfileCard";
import ProgressHomepg from "../components/ProgressHomepg";
import TestForm from "../components/TestForm";
import TestData from "../components/TestData"

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper"> {/* Flex wrapper */}
        <div className="flex-empty"></div> {/* Adds space to the side */}
          <div className="home-main"> {/* main content of HomePage */}
            <ProgressHomepg />
            <TestData />
            <TestForm />
            <ActivityFeed />
          </div>        
          <div className="home-sidebar"> {/* Side content */}
            <ProfileCard />
          </div>
          <div className="flex-empty"></div> {/* Adds space to the side */}
      </div>
    </div>
  );
};

export default Home;
