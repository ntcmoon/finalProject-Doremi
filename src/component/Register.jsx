import { Field, Formik, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

const RegisterSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  username: Yup.string()
    .min(1, "Mininum 1 characters")
    .max(15, "Maximum 15 characters")
    .matches(USER_REGEX, "Invalid username format")
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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = ( values) => {
    // e.preventDefault();
    // axios
    //   .post("https://crudcrud.com/api/d397f58c7b124c3c8d16ea1d604f9b43", values)
    //   .then((response) => {
    //     console.log(response);
    //     // setSubmitting(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // setSubmitting(false);
    //   });
    console.log(values)
  };

  const onLinkClick = () => {
    console.log("Link clicked!");
  };

  return (
    <>
      <div className="bg-yellow-300 w-full h-screen flex justify-center text-pink-400">
        <div className="form bg-white mt-[100px] w-[500px] h-[500px] p-[20px] drop-shadow-xl rounded">
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
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => { console.log(errors)
              return (
                <Form className="text-xl mx-6 mt-12">
                  <div className="my-6">
                    <label className="flex justify-between">
                      Firstname{" "}
                      <Field
                        id="firstname"
                        name="firstname"
                        type="text"
                        className="drop-shadow"
                        placeholder="Enter name"
                      />
                    </label>
                    <ErrorMessage
                      component="div"
                      name="firstname"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="my-6">
                    <label className="flex justify-between">
                      Lastname{" "}
                      <Field
                        id="lastName"
                        name="lastname"
                        type="text"
                        className="drop-shadow"
                        placeholder="Enter lastname"
                      />
                    </label>
                    <ErrorMessage
                      component="div"
                      name="lastname"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="my-6">
                    <label className="flex justify-between">
                      Username:
                      <Field
                        id="username"
                        name="username"
                        className="drop-shadow"
                        placeholder="Enter username"
                      />
                      <ErrorMessage
                        component="div"
                        name="username"
                        className="invalid-feedback"
                      />
                    </label>
                  </div>
                  <div className="my-6">
                    <label className="flex justify-between">
                      Password{" "}
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="drop-shadow"
                        placeholder="Password"
                      />
                    </label>
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="my-6">
                    <label className="flex justify-between">
                      Confirmed Password{" "}
                      <Field
                        id="confirmpassWord"
                        name="confirmpassWord"
                        className="drop-shadow"
                        placeholder="Enter Confirm Password"
                        type="password"
                      />
                    </label>
                    <ErrorMessage
                      component="div"
                      name="confirmpassword"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mt-10 flex justify-center ">
                    <Link
                      type="login"
                      className="btn btn-primary shadow-xl py-2 px-8 bg-pink-300 hover:bg-pink-400 text-white mx-8 rounded"
                      to="/Login"
                      onClick={onLinkClick}
                    >
                      Login
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary shadow-xl py-2 px-8 bg-pink-300 hover:bg-pink-400 text-white mx-8 rounded"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
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
    </>
  );
}

export default Register;
