import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Root from "./component/Root";
import Charname from "./component/Charname";
import Matching from "./component/Matching";
import Profile from "./component/Profile";
import Login from "./component/login";
import Register from "./component/register.jsx";
import Error from "./component/Error";

const isAuthenticated = () => !!localStorage.getItem("user");

// PrivateRoute: Redirect to login if not authenticated
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={"/login"} />;
};

// PublicRoute: Redirect to dashboard if authenticated
const PublicRoute = () => {
  return isAuthenticated() ? <Navigate to="/" /> : <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />, // Public route for non-authenticated users
    //   errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <Error />,
    children: [
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;