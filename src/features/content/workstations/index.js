import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FloorPlanSector from "../../shared/floorplan";
import { useStyles, customStyles } from "./styles";
import Modal from "react-modal";
import useFloorPlanContext from "../../../context/useFloorPlanContext";
import { useWorkstation } from "./useWorkstation";

const Workstations = ({ props }) => {
  const themeClasses = useStyles();
  const { allFloorPlan, setAllFloorPlan } = useFloorPlanContext();
  const [floorPlan, setFloorPlan] = useState(Object.values(allFloorPlan)[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    workstation,
    resetWorkStation,
    monitorsBind,
    portsBind,
    typeBind,
    bayBind,
    rowBind,
  } = useWorkstation();
  const updateSelectedSeats = (seat, add) => {
    let temp = [...selectedSeats];
    if (add) {
      temp.push(seat);
    } else {
      temp = temp.filter((x) => x.seatId !== seat.seatId);
    }

    setSelectedSeats(temp);
  };
  const floors = Object.keys(allFloorPlan);
  const statusLegends = [
    {
      color: themeClasses.available,
      status: "Available",
    },
    {
      color: themeClasses.reserved,
      status: "Reserved",
    },
    {
      color: themeClasses.disabled,
      status: "Not Allowed",
    },
  ];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    resetWorkStation();
    setIsOpen(false);
  }

  function floorChangeHandler(e) {
    const val = e.target.value;
    selectedSeats.forEach((seat) => {
      const seatDiv = document.querySelector(`#workstation${seat.seatId}`);
      const input = seatDiv.querySelector("input");
      input.checked = false;
    });
    setSelectedSeats([]);
    setFloorPlan(allFloorPlan[val]);
  }

  function deleteWorkstation() {
    console.log("deleting:", selectedSeats);
    // TODO: Call API to DELETE new WorkStation
    // TODO: use "setAllFloorPlan" to update state
  }

  function addWorkstation() {
    console.log("Submitting workstation", workstation);
    // TODO: Call API to POST new WorkStation
    // TODO: use "setAllFloorPlan" to update state with new Workstation
  }

  return (
    <div id="calendar" className="p-8 h-full flex flex-col">
      {/* Add New Seat Modal. Shows up when clicking "Add" button. */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add New Seat Modal"
      >
        <h1 className="text-4xl font-bold mb-8">Add New Seat</h1>
        <div className="mt-8 flex flex-row flex-wrap w-full my-2">
          <div className="flex items-center w-full">
            <label>Number of Monitor:</label>
          </div>
          <div className="flex items-center w-full mb-4">
            <input
              className={"rounded border-2 " + themeClasses.select}
              type="number"
              placeholder="Enter number"
              {...monitorsBind}
            />
          </div>
          <div className="flex items-center w-full">
            <label>Type:</label>
          </div>
          <div className="flex items-center w-full mb-4">
            <select
              className={"rounded border-2 " + themeClasses.select}
              {...typeBind}
            >
              <option disabled value={""}>
                Select a value
              </option>
              <option>Windows</option>
              <option>Apple</option>
            </select>
          </div>
          <div className="flex items-center w-full">
            <label>Ports:</label>
          </div>
          <div className="flex items-center w-full mb-4">
            <input
              className={"rounded border-2 " + themeClasses.select}
              type="text"
              placeholder="Enter value"
              {...portsBind}
            />
          </div>
          <div className="flex items-center w-full">
            <label>Bay:</label>
          </div>
          <div className="flex items-center w-full mb-4">
            <input
              className={"rounded border-2 " + themeClasses.select}
              type="text"
              placeholder="Enter value"
              {...bayBind}
            />
          </div>
          <div className="flex items-center w-full">
            <label>Row:</label>
          </div>
          <div className="flex items-center w-full mb-4">
            <input
              className={"rounded border-2 " + themeClasses.select}
              type="text"
              placeholder="Enter value"
              {...rowBind}
            />
          </div>
          <div className="flex w-full mt-8 justify-between flex-grow-2 items-end">
            <button
              className={"rounded cancel " + themeClasses.button}
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className={"rounded reserve " + themeClasses.button}
              onClick={addWorkstation}
            >
              Add
            </button>
          </div>
        </div>
      </Modal>

      {/* Add New Seat Modal end. Workstation view start */}

      <div
        id="workstationsControls"
        className="flex justify-start flex-grow-2 items-start"
      >
        <div id="leftControls" className="mr-2">
          <select
            className={"rounded border-2 px-2 py-3 " + themeClasses.select}
            onChange={(e) => floorChangeHandler(e)}
          >
            {floors.map((floor, i) => (
              <option key={i}>{floor}</option>
            ))}
          </select>
        </div>
        <div id="rightControls">
          <button
            className={"rounded add mr-2 " + themeClasses.button}
            onClick={openModal}
          >
            Add
          </button>
          <button
            disabled={selectedSeats.length > 0 ? null : true}
            className={"rounded cancel delete " + themeClasses.button}
            onClick={deleteWorkstation}
          >
            Delete
          </button>
        </div>
      </div>
      <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto rounded">
        {floorPlan.map((sector, i) => (
          <FloorPlanSector
            key={i}
            props={{
              ...sector,
              currentSelection: selectedSeats,
              selectionUpdater: updateSelectedSeats,
            }}
          />
        ))}
      </div>
      <div id="calendarLegendDetails" className="flex mt-2">
        {statusLegends.map((legend, i) => (
          <div key={i} className="flex items-center mr-4">
            <div className={"h-4 w-4 mr-1 rounded " + legend.color}></div>
            {legend.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workstations;
