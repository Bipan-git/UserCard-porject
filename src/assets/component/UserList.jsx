import React from "react";
import UserCard from "./UserCard";

export default function App({ users }) {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
