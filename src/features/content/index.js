import React from "react";

const Content = ({ activeNavItem }) => {
  console.log(activeNavItem);
  return (
    <div className="grid-cols-1 text-center">
      {activeNavItem === "Dashboard" && (
        <div className="bg-red-900">Dashboard</div>
      )}
      {activeNavItem === "Calendar" && (
        <div className="bg-blue-900">Calendar</div>
      )}
      {activeNavItem === "Workstations" && (
        <div className="bg-green-900">Workstations</div>
      )}
    </div>
  );
};

export default Content;
