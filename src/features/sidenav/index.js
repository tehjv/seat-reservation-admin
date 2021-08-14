import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    background: `${theme.palette.primary.dark}`,
    color: `${theme.palette.primary.contrastText}`
  },
  button: {
    background: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
    "font-weight": 300,
    padding: "1rem 1.5rem",
    "&:hover": {
      background: `${theme.palette.secondary.main}`,
      color: `${theme.palette.secondary.contrastText}`
    }
  },
  active: {
    background: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
    "font-weight": 600,
    padding: "1rem 1.5rem",
  }
}));

const SideNav = ({ navState }) => {
  const themeClasses = useStyles();
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
    <div className="grid-cols-1">
      <div className={"py-8 " + themeClasses.heading}>
        <h1 className="text-3xl font-bold px-2">Admin Webapp</h1>
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
  const themeClasses = useStyles();

  return (
    <div
      className={
        "text-2xl py-4 px-2 " +
        (activeNavItem === link ? themeClasses.active : themeClasses.button)
      }
      onClick={() => updateActiveNavItem(link)}
    >
      {label}
    </div>
  );
};

export default SideNav;
