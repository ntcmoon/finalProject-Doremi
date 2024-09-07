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
import Register from "./component/register";
import Error from "./component/Error";

function App() {
  const isAuthenticated = () => !!localStorage.getItem("user");

  // PrivateRoute: Redirect to login if not authenticated
  const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Login />;
  };

  // PublicRoute: Redirect to dashboard if authenticated
  const PublicRoute = () => {
    return isAuthenticated() ? <Root /> : <Outlet />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />, // Public route for non-authenticated users
      errorElement: <Error />,
      children: [
        {
          path: "/login",
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
      element: <PublicRoute />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Root />,
        },
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
