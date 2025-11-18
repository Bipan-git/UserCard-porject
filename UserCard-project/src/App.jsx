import React from "react";
import UserList from "./assets/component/UserList";
import "./App.css";

export default function App() {
  const users = [
    {
      name: "Bipan",
      email: "bipangurung1124@pcmgmt.edu.np",
      Image:
        "https://ui-avatars.com/api/?name=Bipan&background=0D8ABC&color=fff&size=150",
    },
    {
      name: "ALex",
      email: "Alex1124@pcmgmt.edu.np",
      Image:
        "https://ui-avatars.com/api/?name=Bipan&background=0D8ABC&color=fff&size=150",
    },
  ];
  return (
    <div className="container">
      <h1>users Board</h1>
      <UserList users={users} />
    </div>
  );
}
