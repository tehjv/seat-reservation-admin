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
        <Workstation key={i} props={{ ...datum, selectionUpdater: props.selectionUpdater, currentSelection: props.currentSelection }} />
      ))}
    </div>
  );
};

WorkstationRow.propTypes = {
  workstations: PropTypes.array,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array
};

export default WorkstationRow;
