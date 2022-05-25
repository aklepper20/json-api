import React from "react";
import "../styles/user.css";

function User({ name, email }) {
  return (
    <div className="userWrapper">
      <div className="padding">{name}</div>
      <div className="padding email">{email}</div>
    </div>
  );
}

export default User;
