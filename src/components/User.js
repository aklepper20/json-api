import React from "react";
import "../styles/user.css";

function User({ id, name, email }) {
  return (
    <div className="userWrapper">
      <div className="padding">{id}</div>
      <div className="padding">{name}</div>
      <div className="padding">{email}</div>
    </div>
  );
}

export default User;
