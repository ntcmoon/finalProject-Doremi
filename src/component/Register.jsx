import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

const RegisterSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  username: Yup.string()
    .min(4, "Mininum 4 characters")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      PWD_REGEX,
      "Minimum eight characters, at least one letter, one number and one special character:"
    ),
  confirmpassword: Yup.string()
    .required("Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function Register() {

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-yellow-300 w-full h-screen flex justify-center text-pink-400">
        <div>
          <div className="form bg-white mt-[100px] w-[500px]  p-[20px] drop-shadow-xl rounded">
            <h2 className="mt-5 text-3xl font-bold text-center">
              Register New User
            </h2>
            <Formik
              validationSchema={RegisterSchema}
              initialValues={{
                firstname: "",
                lastname: "",
                username: "",
                password: "",
                confirmpassword: "",
              }}
              onSubmit={async(value, actions) => {
                const users = await axios.get(
                  "https://crudcrud.com/api/77dcd5d993724a3eba5ccb4bbfadd374/users"
                )
                if (
                  users.data.filter((user) => user.username === value.username)
                  .length >= 1
                ) {
                  alert(
                  "This username already taken."
                  )
                  actions.resetForm();
                  return;
                }
                axios
                  .post(
                    "https://crudcrud.com/api/77dcd5d993724a3eba5ccb4bbfadd374/users",
                    {
                      firstname: value.firstname,
                      lastname:value.lastname,
                      username: value.username,
                      password: value.password,
                    }
                  )
                  .then((res) => {
                    alert("register successfully!")
                    navigate("/login")
                  })
                  .catch((error) => {
                    alert("Please try again. Something went wrong")
                    actions("/login");
                  });
              }}
            >
              {({ isSubmitting, handleChange, values }) => {
                return (
                  <Form className="text-xl mx-6 mt-12">
                    <div className="my-6">
                      <label className="flex justify-between">
                        Firstname*
                        <Field
                          id="firstname"
                          name="firstname"
                          type="text"
                          className="drop-shadow px-2 py-1"
                          placeholder="Enter name"
                          onChange={handleChange}
                          value={values.firstname}
                        />
                      </label>
                      <ErrorMessage
                        component="div"
                        name="firstname"
                        className="invalid-feedback text-red-500"
                      />
                    </div>
                    <div className="my-6">
                      <label className="flex justify-between">
                        Lastname*
                        <Field
                          id="lastName"
                          name="lastname"
                          type="text"
                          className="drop-shadow px-2 py-1"
                          placeholder="Enter lastname"
                          onChange={handleChange}
                          value={values.lastname}
                        />
                      </label>
                      <ErrorMessage
                        component="div"
                        name="lastname"
                        className="invalid-feedback text-red-500"
                      />
                    </div>
                    <div className="my-6">
                      <label className="flex justify-between">
                        Username*
                        <Field
                          id="username"
                          name="username"
                          className="drop-shadow px-2 py-1"
                          placeholder="Enter username"
                          onChange={handleChange}
                          value={values.username}
                        />
                      </label>
                      <ErrorMessage
                        component="div"
                        name="username"
                        className="invalid-feedback text-red-500"
                      />
                    </div>
                    <div className="my-6">
                      <label className="flex justify-between">
                        Password*
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="drop-shadow px-2 py-1"
                          placeholder="Enter password"
                          onChange={handleChange}
                          value={values.password}
                        />
                      </label>
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="invalid-feedback text-red-500"
                      />
                    </div>
                    <div className="my-6">
                      <label className="flex justify-between">
                        Confirmed Password*
                        <Field
                          id="confirmpassword"
                          name="confirmpassword"
                          className="drop-shadow px-2 py-1"
                          placeholder="Enter Confirm Password"
                          type="password"
                          onChange={handleChange}
                          value={values.confirmpassword}
                        />
                      </label>
                      <ErrorMessage
                        component="div"
                        name="confirmpassword"
                        className="invalid-feedback text-red-500"
                      />
                    </div>
                    <div className="mt-10 flex justify-center ">
                      <Link
                        type="login"
                        className="btn btn-primary shadow-xl py-2 px-8 bg-pink-300 hover:bg-pink-400 text-white mx-8 rounded"
                        to="/Login"
                      >
                        Login
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary shadow-xl py-2 px-8 bg-pink-300 hover:bg-pink-400 text-white mx-8 rounded"
                        disabled={isSubmitting}
                        
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
