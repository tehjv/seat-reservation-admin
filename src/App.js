import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import React, { useState } from "react";
import SideNav from "./features/sidenav";
import Content from "./features/content";
import Login from "./features/login";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    background: `${theme.palette.primary.light}`,
  }
}));

function App() {
  const themeClasses = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const updateActiveNavItem = (item) => setActiveNavItem(item);
  
  return (
    <div id="mainApp" >
      <div className={"h-screen w-screen " + (isLoggedIn ? "hidden" : "")}>
        <Login props={{ setIsLoggedIn }}></Login>
      </div>
      <div className={"grid-cols-6 " + (isLoggedIn ? "grid" : "hidden")}>
        <div className={"h-screen shadow-md " + themeClasses.sidebar}>
          <SideNav navState={{ updateActiveNavItem, activeNavItem }} />
        </div>
        <div className="col-span-5 h-screen overflow-auto">
          <Content activeNavItem={activeNavItem}></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
