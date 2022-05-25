import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/user.css";
import editIcon from "../edit-icon.png";
import checkIcon from "../icons-checked.png";

function User({ id, name, email, first, last }) {
  const axios = require("axios");

  const [updateEmail, setUpdateEmail] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [timer] = useState();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}/`)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    alert("Delete User Successful");
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:3000/users/${id}/`, {
        first_name: first,
        last_name: last,
        email: updateEmail,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setEditOpen(!editOpen);
    alert("Updated Email Successfully");
  };

  return (
    <div className="userWrapper">
      <div className="actionsWrapper">
        {editOpen ? (
          <img
            className="checked"
            onClick={() => handleUpdate(id)}
            src={checkIcon}
            alt="Submit Updated Email"
          />
        ) : (
          <img
            className="edit"
            onClick={() => setEditOpen(!editOpen)}
            src={editIcon}
            alt="Edit Email"
          />
        )}
        <div className="delete" onClick={() => handleDelete(id)}>
          X
        </div>
      </div>
      <div className="padding">{name}</div>
      <div className="editWrapper">
        {editOpen ? (
          <>
            <input
              placeholder={email}
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <div className="padding email">{email}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default User;
