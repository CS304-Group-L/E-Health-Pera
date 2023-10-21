import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HealthForm from "./Pages/Healthform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {path: "/Login",
  element: <Login/>,
  },

  {path: "/Healthform",
  element: <HealthForm/>,
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
