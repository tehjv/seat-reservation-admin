import React from "react";
import Dashboard from "./dashboard";
import Calendar from "./calendar";
import Parking
 from "./parking";
const Content = ({ activeNavItem }) => {
  return (
    <div className="grid-cols-1 h-full">
      {activeNavItem === "Dashboard" && <Dashboard />}
      {activeNavItem === "Calendar" && <Calendar />}
      {activeNavItem === "Workstations" && (
        <div className="bg-green-900">Workstations</div>
      )}
      {activeNavItem === "Parking" && <Parking />}
    </div>
  );
};

export default Content;
