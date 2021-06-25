import React from "react";
import WorkstationRow from "../workstation-row";

const Bay = ({ props }) => {
  return (
    <div className="flex w-full pb-4">
      <div className="flex items-center w-8 p-4 justify-center rounded-l-lg vertical-text bg-gray-200">
        {props.bayLabel}
      </div>
      <div className="flex flex-col w-full justify-center px-4 items-center bg-gray-300">
        {props.bayRows.map((row, i) => (
          <WorkstationRow key={i} props={{ workstations: row }} />
        ))}
      </div>
    </div>
  );
};

export default Bay;
