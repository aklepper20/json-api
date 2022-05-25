import React from "react";
import "../styles/user.css";

function User({ id, name, email }) {
  const axios = require("axios");

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}/`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="userWrapper">
      <div className="delete" onClick={() => handleDelete(id)}>
        X
      </div>
      <div className="padding">{name}</div>
      <div className="padding email">{email}</div>
    </div>
  );
}

export default User;
