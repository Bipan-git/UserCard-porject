import React, { useState } from "react";
import UserCard from "./assets/component/UserCard";
import "./App.css";

export default function App() {
  const [name, setName] = useState("Bipan");
  const [age] = useState(20);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleChangeName = () => {
    setName("Mr.Devloper");
  };

  return (
    <div className="app-container">
      <h1>User DashBoard</h1>
      <UserCard name={name} age={age} showDetails={showDetails} />
      <button onClick={toggleDetails}>
        {showDetails ? "hide Details" : "show Details"}{" "}
      </button>

      <button onClick={handleChangeName}>change Name </button>
    </div>
  );
}
