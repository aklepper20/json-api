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
          "http://localhost:3000/users?_sort=first_name&_order=asc'"
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
    <>
      <h3>Get All Users from Api Endpoint</h3>
      <div className="getUserWrapper">
        {getUser.map((user) => {
          return (
            <div className="getUserMain">
              <User
                key={user.id}
                id={user.id}
                name={`${user.first_name} ${user.last_name}`}
                email={user.email}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetUser;
