import React from "react";
import axios from "axios";

const TestData = () => {
  const getActivities = () => {
    axios
      .get("http://localhost:8080/api/activities")
      .then((res) => console.log("Activities:", res.data))
      .catch((err) => console.error("Error fetching activities:", err));
  };

  return (
    <div>
      <button onClick={getActivities}>Test Data</button>
    </div>
  );
};

export default TestData;
