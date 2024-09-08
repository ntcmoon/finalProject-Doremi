import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const users = await axios .get("https://crudcrud.com/api/77dcd5d993724a3eba5ccb4bbfadd374/users")
    const targetUser = users.data.find(user => user.username === values.username)
    if (!targetUser || targetUser.password !== values.password) {
      alert("Invalid username 0r password");
      return;
    } else {
      alert(`Welcome ${targetUser.username}`)
      localStorage.setItem("user",JSON.stringify(targetUser));
      navigate("/matching")
    }
    }

  return (
    <>
      <div className="bg-pink-400 w-full h-screen flex justify-center text-yellow-400 ">
        <div className="bg-white mt-[100px] w-[400px] h-[350px] p-[20px] drop-shadow-xl rounded">
          <h2 className="mt-5 text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <label className="text-xl flex justify-between my-10 mx-2">
              Username :
              <input
                type="text"
                required
                name="username"
                value={values.username}
                onChange={handleChange}
                className="drop-shadow"
              />
            </label>

            <label className="text-xl flex justify-between my-6 mx-2">
              Password :
              <input
                type="password"
                required
                name="password"
                value={values.password}
                onChange={handleChange}
                className="drop-shadow"
              />
            </label>
            <div className="flex justify-center ">
              <Link
                type="register"
                className="btn btn-primary text-xl shadow-xl py-2 px-8 mt-8  bg-pink-300 hover:bg-pink-400 text-white mx-8 rounded"
                to="/Register"

              >
                Register
              </Link>
              <input
                type="submit"
                className="text-xl mx-6  shadow-xl py-2 px-8 mt-8   bg-yellow-300 hover:bg-yellow-400 text-white rounded"

              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default Login;
