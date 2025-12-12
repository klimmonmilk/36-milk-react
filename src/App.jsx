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

  const [view, setView] = useState("");


  return (
    <div>
      <RouterProvider router={router}/>
      <div className="flex gap-36 mb-12 justify-center mt-18">


        <ViewToggleButton className="pr-100"
        onClick={() => {
          setView("userhome");
        }}>
          User Home View
        </ViewToggleButton>

        <ViewToggleButton 
        onClick={() => {
          setView("adminhome");
        }}>
          Admin Home View
        </ViewToggleButton>

      </div>
        {view === "adminhome" && <AdminHome />}
        {view === "userhome" && <UserHome />}


    </div>


  );
}
