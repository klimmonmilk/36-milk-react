import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Owner from "./views/Owner";
import ViewToggleButton from "./components/ViewToggleButton";
import Formm from "./components/Userform";
import AdminHome from "./views/Admin";
import UserHome from "./views/User";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout />,
  errorElement: 
    (
    <div className="min-h-screen flex justify-center items-center bg-zinc-200">
      <h1 className="text-4xl">404 Page Not Found</h1>
    </div>
    ),
  children: [
    {path: "/", element: <Home />,},
    {path: "owner", element: <Owner />,},
  ],
  },
]);

export default function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>


  );
}
