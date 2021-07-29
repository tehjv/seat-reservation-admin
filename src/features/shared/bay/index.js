import React from "react";
import WorkstationRow from "../workstation-row";
import PropTypes from "prop-types";

const Bay = ({ props }) => {
  return (
    <div className="flex w-full pb-4">
      <div className="flex items-center w-8 p-4 justify-center rounded-l-lg vertical-text bg-gray-200">
        {props.bayLabel}
      </div>
      <div className="flex flex-col w-full justify-center px-4 items-center bg-gray-300">
        {props.bayRows.map((row, i) => (
          <WorkstationRow key={i} props={{ workstations: row, selectionUpdater: props.selectionUpdater, currentSelection: props.currentSelection }} />
        ))}
      </div>
    </div>
  );
};

Bay.propTypes = {
  bayLabel: PropTypes.string,
  bayRows: PropTypes.array,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array
}

export default Bay;
