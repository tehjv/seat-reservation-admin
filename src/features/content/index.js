import React from "react";
import Dashboard from "./dashboard";
import Calendar from "./calendar";

const Content = ({ activeNavItem }) => {
  return (
    <div className="grid-cols-1">
      {activeNavItem === "Dashboard" && <Dashboard />}
      {activeNavItem === "Calendar" && <Calendar />}
      {activeNavItem === "Workstations" && (
        <div className="bg-green-900">Workstations</div>
      )}
    </div>
  );
};

export default Content;
