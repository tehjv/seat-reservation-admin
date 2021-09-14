import React from "react";
import Dashboard from "./dashboard";
import Calendar from "./calendar";
import Parking from "./parking";
import Reservations from "./reservations";
import Settings from "./settings";
import Workstations from "./workstations";

const Content = ({ activeNavItem }) => {
  return (
    <div className="grid-cols-1 h-full">
      {activeNavItem === "Dashboard" && <Dashboard />}
      {activeNavItem === "Calendar" && <Calendar />}
      {activeNavItem === "Reservations" && <Reservations />}
      {activeNavItem === "Parking" && <Parking />}
      {activeNavItem === "Workstations" && <Workstations />}
      {activeNavItem === "Settings" && <Settings />}
    </div>
  );
};

export default Content;
