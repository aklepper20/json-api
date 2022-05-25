import React from "react";
import { useState } from "react";
import "../styles/user.css";
import editIcon from "../edit-icon.png";
import checkIcon from "../icons-checked.png";

function User({ id, name, email }) {
  const axios = require("axios");

  const [updateEmail, setUpdateEmail] = useState("");
  const [editOpen, setEditOpen] = useState(false);

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

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:3000/users/${id}/`, {
        email: "freddyb34@yahoo.com",
      })
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
      <div className="editWrapper">
        {/* <div className="padding email" onClick={() => handleUpdate(id)}>
          {email}
        </div> */}
        {editOpen ? (
          <>
            <input placeholder={email} />
            <img
              className="checked"
              onClick={() => setEditOpen(!editOpen)}
              src={checkIcon}
              alt="Submit Updated Email"
            />
          </>
        ) : (
          <>
            <div className="padding email" onClick={() => handleUpdate(id)}>
              {email}
            </div>
            <img
              className="edit"
              onClick={() => setEditOpen(!editOpen)}
              src={editIcon}
              alt="Edit Email"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default User;
