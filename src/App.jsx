import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css";
import Root from "./component/Root";
import Charname from "./component/Charname";
import Matching from "./component/Matching";
import Random from "./component/Random";
import Profile from "./component/Profile";
import Login from "./component/login";
import Register from "./component/register";





function App() {
  const router = createBrowserRouter([
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
          path: "/random",
          element: <Random />,
        },
        {
          path: "/profile",
          element: <Profile />,
        }
      ],
    },
    {
      path: "/login",
      element:<Login />
    },
    {
      path: "/register",
      element:<Register />
    }
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>

    
  )



  return (
    <>
      
    </>
  );
}

export default App;
