// src/pages/Dashboard.js
import React from "react";
import ActivityFeed from "../components/ActivityFeed";
import SideBar from "../components/SideBar";
import ProfileCard from "../components/ProfileCard";
import ProgressHomepg from "../components/ProgressHomepg";
import TestAdd from "../components/TestAdd";
import TestForm from "../components/TestForm";

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper"> {/* Flex wrapper */}
        <div className="flex-empty"></div> {/* Adds space to the side */}
          <div className="home-main"> {/* main content of HomePage */}
            <TestAdd />
            <TestForm />
            <ProgressHomepg />
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
