import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

function Profile() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/1a733604522147088533cfb9016f1917")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const logOut = () => {
    const actionObject = {
      type: "LOGOUT",
      payload: null,
    };
    navigate('/login');
  };

  return (
    <>
      <div>
        <h2>User Profile</h2>
        {post.map((item, i) => {
          return (
            <div key={i}>
              <p>First Name: {item?.firstname}</p>
              <p>Last Name: {item?.lastname}</p>
            </div>
          );
        })}
      </div>
      <button onClick={logOut}>Log out</button>
    </>
  );
}

export default Profile;
