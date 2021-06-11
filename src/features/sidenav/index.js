import React from "react";

const SideNav = ({ navState }) => {
  const navItems = [
    {
      link: "Dashboard",
      label: "Dashboard",
    },
    {
      link: "Calendar",
      label: "Calendar",
    },
    {
      link: "Workstations",
      label: "Workstations",
    },
    {
      link: "Parking",
      label: "Parking",
    },
    {
      link: "Settings",
      label: "Settings",
    },
    {
      link: "Help",
      label: "Help",
    },
  ];

  return (
    <div className="grid-cols-1 text-white">
      <div className="bg-indigo-900 py-8">
        <div className="text-3xl font-bold px-2">Admin Webapp</div>
      </div>
      <hr></hr>
      <div className="nav-group cursor-pointer">
        {navItems.map((navItem, i) => (
          <SideNavItem
            key={i}
            activeNavItem={navState.activeNavItem}
            updateActiveNavItem={navState.updateActiveNavItem}
            link={navItem.link}
            label={navItem.label}
          />
        ))}
      </div>
    </div>
  );
};

const SideNavItem = ({ activeNavItem, updateActiveNavItem, link, label }) => {
  return (
    <div
      className={
        "text-2xl py-4 px-2 hover:shadow-md hover:bg-indigo-900" +
        (activeNavItem === link ? " bg-indigo-900" : "")
      }
      onClick={() => updateActiveNavItem(link)}
    >
      {label}
    </div>
  );
};

export default SideNav;
