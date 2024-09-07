import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import Root from "./component/Root";
import Charname from "./component/Charname";
import Matching from "./component/Matching";
import Profile from "./component/Profile";
import Login from "./component/login";
import Register from "./component/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/charname",
          element: <Charname />,
        },
        {
          path: "/matching",
          element: <Matching />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
