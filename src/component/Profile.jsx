import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

function Profile() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();




  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/a6080486fa9b4702a546ee0c3130ef24/users")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
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
      {posts.map((post) => (
        <p key={post._id}>name {post.firstname}</p>
        ))
        }
      </div>
      <button onClick={logOut}>Log out</button>
    </>
  );
}

export default Profile;
