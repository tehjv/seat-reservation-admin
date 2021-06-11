import React from "react";
import WorkstationRow from "../workstation-row";

const Bay = ({ props }) => {
  return (
    <div>
      <div>{props.bayLabel}</div>
      <div>
        {props.bayRows.map((row) => (
          <WorkstationRow props={{ workstations: row }} />
        ))}
      </div>
    </div>
  );
};

export default Bay;
