import "./App.css";
import React, { useState } from "react";
import SideNav from "./features/sidenav";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const updateActiveNavItem = (item) => setActiveNavItem(item);
  return (
    <div className="font-mono grid grid-cols-6">
      <div className="bg-indigo-800 h-screen">
        <SideNav updateActiveNavItem={updateActiveNavItem}></SideNav>
      </div>
      <div className="col-span-5 h-screen"></div>
    </div>
  );
}

export default App;
