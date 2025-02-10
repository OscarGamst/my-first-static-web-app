import React, { useState, useEffect } from "react";
import axios from "axios";
import ActivityItem from "./ActivityItem";
import "../styles/index.css";
import "../styles/responsive.css";

const ActivityFeed = () => { 
  const [activities, setActivities] = useState([]); // Stores fetched activities in []
  const [showFriends, setShowFriends] = useState(false);
  const [loggedInUser] = useState("Username"); // Placeholder until we have login
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch activities from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/activities") 
      .then((res) => {
        setActivities(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching activities:", err);
        setError("Failed to load activities.");
        setLoading(false);
      });
  }, []);

  const toggleFilter = () => {
    setShowFriends(!showFriends);
  };

  const filteredActivities = activities.filter((activity) => 
    showFriends ? activity.username !== loggedInUser : activity.username === loggedInUser
  );

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <button onClick={toggleFilter}> 
        {showFriends ? "Friends Activities" : "My Activities"} 
      </button>
      {filteredActivities.length > 0 ? (
        filteredActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))
      ) : (
        <p>No activities found.</p>
      )}
    </div>
  );
};

export default ActivityFeed;






