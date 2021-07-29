import React from "react";
import Bay from "../bay";
import PropTypes from "prop-types";

const Sector = ({ props }) => {
  console.log("sector props", props);
  return (
    <div className="w-full">
      <div className="text-lg rounded-2xl font-bold bg-gray-300 w-max py-2 px-4 mb-4">
        {props.sectorLabel}
      </div>
      {props.sectorBays.map((bay, i) => (
        <div key={i}>
          <Bay props={{ bayLabel: bay.bayLabel, bayRows: bay.bayRows, selectionUpdater: props.selectionUpdater, currentSelection: props.currentSelection }} />
        </div>
      ))}
    </div>
  );
};

Sector.propTypes = {
  sectorLabel: PropTypes.string,
  sectorBays: PropTypes.array,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array
}

export default Sector;
