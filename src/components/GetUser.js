import React from "react";
import User from "./User";
import { useEffect, useState } from "react";
import "../styles/getUser.css";

function GetUser() {
  const axios = require("axios");

  const [getUser, setGetUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users?_sort=last_name&_order=asc'"
        );
        const users = response.data;
        setGetUsers(users);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [getUser]);

  return (
    <div className="getUserWrapper">
      {getUser.length !== 0 ? (
        getUser.map((user) => {
          return (
            <div className="getUserMain">
              <User
                key={user.id}
                id={user.id}
                first={user.first_name}
                last={user.last_name}
                name={`${user.first_name} ${user.last_name}`}
                email={user.email}
              />
            </div>
          );
        })
      ) : (
        <h3>No users available. Please add a user.</h3>
      )}
    </div>
  );
}

export default GetUser;
