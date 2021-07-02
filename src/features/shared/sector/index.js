import React from "react";
import Bay from "../bay";

const Sector = ({ props }) => {
  console.log("sector props", props);
  return (
    <div className="w-full">
      <div className="text-lg rounded-2xl font-bold bg-gray-300 w-max py-2 px-4 mb-4">
        {props.sectorLabel}
      </div>
      {props.sectorBays.map((bay, i) => (
        <div key={i}>
          <Bay props={{ bayLabel: bay.bayLabel, bayRows: bay.bayRows }} />
        </div>
      ))}
    </div>
  );
};

export default Sector;
