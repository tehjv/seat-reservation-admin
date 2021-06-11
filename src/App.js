import "./App.css";
import React, { useState } from "react";
import SideNav from "./features/sidenav";
import Content from "./features/content";

function App() {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const updateActiveNavItem = (item) => setActiveNavItem(item);
  return (
    <div className="font-mono grid grid-cols-6">
      <div className="bg-indigo-800 h-screen shadow-md">
        <SideNav navState={{ updateActiveNavItem, activeNavItem }} />
      </div>
      <div className="col-span-5 h-screen overflow-auto">
        <Content activeNavItem={activeNavItem}></Content>
      </div>
    </div>
  );
}

export default App;
