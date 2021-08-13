import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import React, { useState } from "react";
import SideNav from "./features/sidenav";
import Content from "./features/content";
import Login from "./features/login";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const updateActiveNavItem = (item) => setActiveNavItem(item);
  
  return (
    <div id="mainApp" >
      <div className={"h-screen w-screen " + (isLoggedIn ? "hidden" : "")}>
        <Login props={{ setIsLoggedIn }}></Login>
      </div>
      <div className={"font-mono grid-cols-6 " + (isLoggedIn ? "grid" : "hidden")}>
        <div className="bg-indigo-800 h-screen shadow-md">
          <SideNav navState={{ updateActiveNavItem, activeNavItem }} />
        </div>
        <div className=" col-span-5 h-screen overflow-auto">
          <Content activeNavItem={activeNavItem}></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
