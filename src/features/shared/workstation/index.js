import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from 'react-modal';
import WorkstationStatus from '../../../constants/WorkstationStatus';
import EmployeeSelector from "../employee-selector";

const Workstation = ({ props }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      'flexDirection': 'column',
      'alignItems': 'baseline',
      height: '500px'
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function reserve() {
    console.log('reserving')
  }

  function handleSelect(e) {
    const value = e.target.checked;
    let newSelection;
    if (value) {
      newSelection = [...props.currentSelection];
      newSelection.push(props.seatId);
    } else {
      newSelection = props.currentSelection.filter(item => item !== props.seatId);
    }
    props.selectionUpdater(newSelection);
  }

  function dontPropagate(e) {
    e.stopPropagation();
  }

  Modal.setAppElement('#mainApp');


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
        <div>
          <div
            onClick={() => { (props.status === WorkstationStatus.AVAILABLE || props.status === WorkstationStatus.RESERVED) && openModal() }}
            className={
              "flex flex-col relative border-2 h-16 w-24 cursor-pointer " +
              colors[props.status]
            }
          >
            {props.selectionUpdater && <input onChange={handleSelect} onClick={dontPropagate} className="absolute top-1 right-1" type="checkbox"></input>}
            <img
              className="m-auto h-1/2 select-none"
              alt="workstation logo"
              src={"/logos/" + logos[props.type]}
            ></img>
            {props.showTeamReservation && <label className="self-center">{props.reservedByTeam}</label>}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h1 className="text-xl self-center my-8">{"Seat " + props.seatId}</h1>
            <label>{"Number of Monitor: " + props.monitors}</label>
            <label>{"Docking Station: " + props.docking}</label>
            <label>{"Network Ports: " + props.ports}</label>
            <label>{"Reserved by: " + (props.reservedBy ? props.reservedBy : "N/A")}</label>
            <div className="flex w-full mt-8 justify-between flex-grow-2 items-end">
              <button className="py-1 px-2 text-white bg-red-700 rounded" onClick={closeModal}>Cancel</button>
              <EmployeeSelector></EmployeeSelector>
              {!props.reservedBy && <button className="py-1 px-2 text-white bg-indigo-700 rounded" onClick={reserve}>Reserve</button>}
            </div>
          </Modal>
        </div>
      ) : (
        <div className="border-2 h-16 w-24"></div>
      )
      }
    </>
  );
};

Workstation.propTypes = {
  isFiller: PropTypes.bool,
  status: PropTypes.number,
  type: PropTypes.number,
  monitors: PropTypes.number,
  docking: PropTypes.string,
  ports: PropTypes.string,
  reservedBy: PropTypes.string,
  seatId: PropTypes.string,
  reservedByTeam: PropTypes.string,
  showTeamReservation: PropTypes.bool,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array
};

export default Workstation;
