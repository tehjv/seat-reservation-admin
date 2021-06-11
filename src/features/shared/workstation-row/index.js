import React from "react";
import Workstation from "../workstation";

const WorkstationRow = ({ props }) => {
  let data;

  if (!props) {
    data = [
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
    ];
  } else {
    data = props.workstations;
  }

  console.log(data);

  return (
    <div className="grid-cols-6 flex justify-between">
      {data.map((datum) => (
        <Workstation props={{ ...datum }} />
      ))}
    </div>
  );
};

export default WorkstationRow;
