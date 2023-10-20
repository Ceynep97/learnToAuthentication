import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginUser = (formData) => {
    axios({
      method: "post",
      url: "http://localhost:8080/login",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => console.log(response.data));
  };

  useEffect(() => {
    loginUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = loginUser({
      username,
      password,
    });
    setToken(token);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
