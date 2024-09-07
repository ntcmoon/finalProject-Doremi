import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("user")));
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    window.history.replaceState({}, "");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div>
        <h2>User Profile</h2>
        <p>user: {posts?.username}</p>
        <p>name: {posts?.firstname}</p>
      </div>
      <button onClick={logOut}>Log out</button>
    </>
  );
}

export default Profile;
