import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const ParkSlot = ({ props }) => {
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

  const ParkingStatus = {
    Available: 0,
    Reserved: 1,
  };
  const colors = [
    "border-indigo-700 bg-indigo-500",
    "border-red-700 bg-red-500",
  ];

  Modal.setAppElement('#mainApp');

  return (
    <div>
      <div
        onClick={openModal}
        className={
          "border-4 flex justify-center items-center cursor-pointer " +
          colors[ParkingStatus[props.status]]
        }
      >
        <img
          className="m-auto h-1/2"
          alt="parking logo"
          src={"/logos/parking.png"}
        ></img>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="text-xl self-center my-8">{"Parking Slot " + props.id}</h1>
        <label>{"Capacity: " + props.capacity}</label>
        <label>{"Reserved by: " + (props.reservedBy ? props.reservedBy : "N/A")}</label>
        <div className="flex w-full mt-8 justify-between">
          <button className="self-center py-1 px-2 text-white bg-red-700 rounded" onClick={closeModal}>Cancel</button>
          {!props.reservedBy && <button className="self-center py-1 px-2 text-white bg-indigo-700 rounded" onClick={reserve}>Reserve</button>}
        </div>
      </Modal>
    </div>
  );
};

const Parking = ({ data }) => {
  const parkingData = [
    { status: "Reserved", capacity: "Big Cars", reservedBy: "John", id: "1" },
    { status: "Reserved", capacity: "Big Cars", reservedBy: "Dan", id: "2" },
    { status: "Available", capacity: "Big Cars", reservedBy: "", id: "3" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jan", id: "4" },
    { status: "Available", capacity: "Small Cars", reservedBy: "", id: "5" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jon", id: "6" },
  ];
  const statusLegends = [
    {
      color: "border-indigo-700 bg-indigo-500",
      status: "Available",
    },
    {
      color: "border-red-700 bg-red-500",
      status: "Reserved",
    },
  ];

  return (
    <div id="parking" className="p-8">
      <div id="parking-buttons" className="grid gap-2 grid-cols-3 grid-rows-2">
        {parkingData.map((park, i) => (
          <ParkSlot key={i} props={park} />
        ))}
      </div>
      <div id="calendarLegendDetails" className="flex">
        {statusLegends.map((legend, i) => (
          <div key={i} className="flex items-center mr-4">
            <div className={"h-4 w-4 mr-1 " + legend.color}></div>
            {legend.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parking;
