import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: `${theme.palette.primary.dark}`,
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    padding: "2rem 0"
  },
  headings: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "flex-start",
    "justify-content": "center",
    padding: "0",
    "margin-left": "-4px"
  },
  button: {
    background: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
    "font-weight": 300,
    padding: "1rem 1.5rem",
    "&:hover": {
      background: `${theme.palette.secondary.main}`,
      color: `${theme.palette.secondary.contrastText}`
    },
    userSelect: 'none'
  },
  buttonPadded: {
    background: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
    "font-weight": 300,
    padding: "1rem 3rem",
    "&:hover": {
      background: `${theme.palette.secondary.main}`,
      color: `${theme.palette.secondary.contrastText}`
    },
    userSelect: 'none'
  },
  active: {
    background: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
    "font-weight": 600,
    padding: "1rem 1.5rem",
    userSelect: 'none'
  },
  activePadded: {
    background: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`,
    "font-weight": 600,
    padding: "1rem 3rem",
    userSelect: 'none'
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
      label: "Reservations",
      children: [
        {
          link: "Calendar",
          label: "Individual",
        },
        {
          link: "Reservations",
          label: "Team",
        },
      ]
    },
    {
      link: "Workstations",
      label: "Workstations",
    },
    {
      link: "Parking",
      label: "Parkings",
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
      <header className={"py-8 " + themeClasses.header}>
        <div className={themeClasses.headings}>
          <h1 className="text-3xl font-bold px-2">Administration</h1>
        </div>
      </header>
      <div className="nav-group cursor-pointer">
        {navItems.map((navItem, i) => {
          if (navItem.link) {
            return (
              <SideNavItem
                key={i}
                activeNavItem={navState.activeNavItem}
                updateActiveNavItem={navState.updateActiveNavItem}
                link={navItem.link}
                label={navItem.label}
                pad={false}
              />
            );
          } else {
            return (
              <SideNavItemWithChildren
                key={i}
                label={navItem.label}
                children={navItem.children}
                activeNavItem={navState.activeNavItem}
                updateActiveNavItem={navState.updateActiveNavItem}
                parentKey={i}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

const SideNavItem = ({ activeNavItem, updateActiveNavItem, link, label, pad }) => {
  const themeClasses = useStyles();

  return (
    <div
      className={
        "text-2xl py-4 px-2 " +
        (activeNavItem === link ?
          (pad ? themeClasses.activePadded : themeClasses.active) :
          (pad ? themeClasses.buttonPadded : themeClasses.button)
        )
      }
      onClick={() => updateActiveNavItem(link)}
    >
      {label}
    </div>
  );
};

const SideNavItemWithChildren = ({ label, children, parentKey, activeNavItem, updateActiveNavItem }) => {
  const themeClasses = useStyles();
  const childrenLinks = children.map(child => child.link);
  const [showChildren, setshowChildren] = useState(false);
  const [isChildSelected, setIsChildSelected] = useState(false);
  const updateShowChildren = () => {
    if (!isChildSelected) {
      setshowChildren(!showChildren);
    }
  };
  const updateIsChildSelected = (activeNavItem) => {
    setIsChildSelected(childrenLinks.includes(activeNavItem));
  };

  useEffect(() => {
    updateIsChildSelected(activeNavItem);
  });

  // updateIsChildSelected(activeNavItem);

  return (
    <div>
      <div
        onClick={() => updateShowChildren()}
        className={"text-2xl py-4 px-2 " + (themeClasses.button)}
      >
        {label + (showChildren ? '▴' : '▾')}
      </div>
      {showChildren && <div>
        {children.map((navItem, j) => (
          <SideNavItem
            key={parentKey.toString() + j}
            activeNavItem={activeNavItem}
            updateActiveNavItem={updateActiveNavItem}
            link={navItem.link}
            label={navItem.label}
            pad={true}
          />
        ))}
      </div>}
    </div>
  );
};

export default SideNav;
