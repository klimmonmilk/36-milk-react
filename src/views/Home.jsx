import { useState } from "react";
import ViewToggleButton from "../components/ViewToggleButton";
import AdminHome from "./Admin";
import UserHome from "./User";

export default function Home () {

  const [view, setView] = useState("");
  
  return (
    <div>
      <h1 className="text-5xl font-bold flex justify-center pt-60">
        Generation Thailand
      </h1>
      <h1 className="text-5xl font-bold flex justify-center mt-4">
        React - Assessment
      </h1>
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
  )
}