import React from "react";

export default function UserCard({ name, age, showDetails }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>

      {showDetails && <p>Age: {age}</p>}
    </div>
  );
}
