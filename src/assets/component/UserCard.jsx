import React from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.image} alt="profile" />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
