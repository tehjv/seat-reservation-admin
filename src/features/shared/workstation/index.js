import React from "react";
import PropTypes from "prop-types";

const Workstation = ({ props }) => {
  const logos = [
    "windows.png",
    "apple.png",
    "new_dock.png",
    "old_dock.png",
    "wall.png",
    "empty.png",
  ];
  const colors = [
    "border-indigo-700 bg-indigo-500",
    "border-red-700 bg-red-500",
    "border-gray-700 bg-gray-500",
    "border-gray-300 bg-gray-100",
  ];
  return (
    <>
      {!props.isFiller ? (
        <div
          className={
            "flex relative border-2 h-16 w-24 cursor-pointer " +
            colors[props.status]
          }
        >
          <input className="absolute top-1 right-1" type="checkbox"></input>
          <img
            className="m-auto h-1/2"
            alt="workstation logo"
            src={"/logos/" + logos[props.type]}
          ></img>
        </div>
      ) : (
        <div className="border-2 h-16 w-24"></div>
      )}
    </>
  );
};

Workstation.propTypes = {
  isFiller: PropTypes.bool,
  status: PropTypes.number,
  type: PropTypes.number,
};

export default Workstation;
