import React from "react";
import User from "./User";
import { useEffect, useState } from "react";
import "../styles/getUser.css";

function GetUser() {
  const [getUser, setGetUsers] = useState([]);

  const axios = require("axios");
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        const users = response.data;
        console.log(`GET: Here's the list of todos`, users);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="wrapper">
      <div className="main">
        {getUser.map((user) => {
          return <User />;
        })}
      </div>
    </div>
  );
}

export default GetUser;
