import React from "react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

function Profile() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();




  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("user")))
  }, []);

  const logOut = () => {
    localStorage.removeItem("user")
    window.history.replaceState({}, "");
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="text-center mt-40">
        <h2  className="text-4xl font-bold text-yellow-400 ">User Profile</h2>
        <p className="mt-10 text-2xl font-light text-gray-800 ">user {posts?.username}</p>
        <img className="h-[150px] w-[150px]  mx-auto mb-4 mt-10 rounded-full shadow-xl " src="./Harukaze Doremi.jpg"></img>
        <p className="mt-10 text-3xl font-light">{posts?.firstname}  {posts?.lastname}</p>
      
      <button onClick={logOut} className="mt-8 text-2xl font-bold  shadow-xl py-2 px-8   bg-yellow-300">Log out</button>
      </div>
    </>
  );
}

export default Profile;