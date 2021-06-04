import React from "react";

const SideNav = ({ updateActiveNavItem }) => {
  console.log(updateActiveNavItem);
  return (
    <div className="grid-cols-1 text-center">
      <div onClick={updateActiveNavItem("Dashboard")}>Dashboard</div>
      <div onClick={updateActiveNavItem("Calendar")}>Calendar</div>
      <div onClick={updateActiveNavItem("Workstations")}>Workstations</div>
      <div onClick={updateActiveNavItem("Parking")}>Parking</div>
      <div onClick={updateActiveNavItem("Settings")}>Settings</div>
      <div onClick={updateActiveNavItem("Help")}>Help</div>
    </div>
  );
};

export default SideNav;
