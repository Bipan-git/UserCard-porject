import React, { useState } from "react";
import UserList from "./assets/component/UserList";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const users = [
    {
      name: "Bipan",
      email: "bipangurung1124@pcmgmt.edu.np",
      image:
        "https://ui-avatars.com/api/?name=Bipan&background=0D8ABC&color=fff&size=150",
    },
    {
      name: "ALex",
      email: "Alex1124@pcmgmt.edu.np",
      image:
        "https://ui-avatars.com/api/?name=Alex&background=0D8ABC&color=fff&size=150",
    },
  ];
  return (
    <div className="container">
      <h1>users Board</h1>
      <UserList users={users} />
      <h1 > <center>{count}</center></h1>
      <div className="btn">
        <button className="btn-1" onClick={() => setCount(count + 1)}>
          Increase number
        </button>
        <button className="btn-2" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
