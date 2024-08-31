import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const onLinkClick = () => {
    console.log('Link clicked!');
  };
  return (
    < >
      <div className="bg-pink-400 w-full h-screen flex justify-center text-yellow-400 ">
        <div className="bg-white mt-[100px] w-[400px] h-[350px] p-[20px] drop-shadow-xl rounded">
          <h2 className="mt-5 text-3xl font-bold text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit} >
            <label className="text-xl flex justify-between my-10 mx-2">
              Username :
              <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                className="drop-shadow"
              />
            </label>
            
            <label className="text-xl flex justify-between my-6 mx-2">
              Password :
              <input
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                className="drop-shadow"
              />
            </label>
            <div className="flex justify-center ">
            <Link
                  type="register"
                  className="btn btn-primary text-xl shadow-xl py-2 px-8 mt-8  bg-pink-300 hover:bg-pink-400 text-white mx-8 rounded" to='/Register' onClick={onLinkClick}
                >
                  Register
              </Link>
            <input type="submit" className="text-xl mx-6  shadow-xl py-2 px-8 mt-8   bg-yellow-300 hover:bg-yellow-400 text-white rounded" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
