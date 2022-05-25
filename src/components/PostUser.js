import React from "react";
import { useState } from "react";
import "../styles/postUser.css";

function PostUser() {
  const axios = require("axios");

  const [userFirst, setUserFirst] = useState("");
  const [userLast, setUserLast] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/users", {
        first_name: userFirst,
        last_name: userLast,
        email: userEmail,
      })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setUserFirst("");
    setUserLast("");
    setUserEmail("");
  };

  return (
    <div className="postUserWrapper">
      <div>Add New User</div>
      <input
        placeholder="Enter First Name"
        value={userFirst}
        onChange={(e) => setUserFirst(e.target.value)}
      />
      <input
        placeholder="Enter Last Name"
        value={userLast}
        onChange={(e) => setUserLast(e.target.value)}
      />
      <input
        placeholder="Enter Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PostUser;
