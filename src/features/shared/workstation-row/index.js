import React from "react";
import Workstation from "../workstation";
import PropTypes from "prop-types";

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

  return (
    <div className="grid-cols-6 flex justify-evenly w-full">
      {data.map((datum, i) => (
        <Workstation key={i} props={{ ...datum }} />
      ))}
    </div>
  );
};

WorkstationRow.propTypes = {
  workstations: PropTypes.array,
};

export default WorkstationRow;
