import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { DriveEta, Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeSelector from "../../shared/employee-selector";

const useStyles = makeStyles((theme) => ({
  available: {
    background: `${theme.palette.reservation.available}`
  },
  reserved: {
    background: `${theme.palette.reservation.reserved}`
  },
  disabled: {
    background: `${theme.palette.reservation.disabled}`
  },
  car: {
    color: `${theme.palette.reservation.text.light}`
  },
  button: {
    background: `${theme.palette.primary.main} !important`,
    border: `1px solid ${theme.palette.primary.light} !important`,
    color: `${theme.palette.primary.contrastText} !important`,
    padding: ".88rem 1.6rem !important",
    '&:hover, &:active, &:focus, &:focus-visible': {
      background: `${theme.palette.primary.dark} !important`,
      border: `1px solid ${theme.palette.primary.main} !important`,
      color: `${theme.palette.primary.contrastText} !important`,
      outline: 'none !important'
    },
    "&[disabled], &[disabled].reserve": {
      background: `${theme.palette.background.default} !important`,
      border: `1px solid ${theme.palette.background.light} !important`,
      color: `${theme.palette.background.dark} !important`,
      '&:hover, &:active, &:focus, &:focus-visible': {
        background: `${theme.palette.background.default} !important`,
        border: `1px solid ${theme.palette.background.light} !important`,
        color: `${theme.palette.background.dark} !important`,
        outline: 'none !important'
      },
    },
    "&.reserve": {
      background: `${theme.palette.secondary.main} !important`,
      border: `1px solid ${theme.palette.secondary.light} !important`,
      color: `${theme.palette.secondary.contrastText} !important`,
      "margin-left": "4px",
      '&:hover, &:active, &:focus, &:focus-visible': {
        background: `${theme.palette.secondary.dark} !important`,
        border: `1px solid ${theme.palette.secondary.main} !important`,
        color: `${theme.palette.secondary.contrastText} !important`,
        outline: 'none !important'
      }
    },
    "&.cancel": {
      background: `${theme.palette.error.main} !important`,
      border: `1px solid ${theme.palette.error.light} !important`,
      color: `${theme.palette.error.contrastText} !important`,
      "margin-right": "4px",
      '&:hover, &:active, &:focus, &:focus-visible': {
        background: `${theme.palette.error.dark} !important`,
        border: `1px solid ${theme.palette.error.main} !important`,
        color: `${theme.palette.error.contrastText} !important`,
        outline: 'none !important'
      }
    }
  },
  icon: {
    height: "4rem",
    width: "auto",
    margin: "2rem 0"
  }
}));

const ParkSlot = ({ parkingData, openModal, parkingHandler }) => {
  const themeClasses = useStyles();
  const ParkingStatus = {
    Available: 0,
    Reserved: 1,
  };
  const colors = [
    themeClasses.available,
    themeClasses.reserved,
  ];

  Modal.setAppElement('#mainApp');

  return (
    <div>
      <div
        onClick={() => parkingHandler(parkingData)}
        className={
          "border-4 flex justify-center items-center cursor-pointer " +
          colors[ParkingStatus[parkingData.status]] + " " + themeClasses.car
        }
      >
        <DriveEta className={themeClasses.icon} />
      </div>
    </div>
  );
};

const Parking = ({ data }) => {
  const themeClasses = useStyles();
  const parkingDataMock = [
    { status: "Reserved", capacity: "Big Cars", reservedBy: "John", id: "1" },
    { status: "Reserved", capacity: "Big Cars", reservedBy: "Dan", id: "2" },
    { status: "Available", capacity: "Big Cars", reservedBy: "", id: "3" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jan", id: "4" },
    { status: "Available", capacity: "Small Cars", reservedBy: "", id: "5" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jon", id: "6" },
  ];
  const [parkingData, setParkingData] = useState(parkingDataMock);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeParkingData, setActiveParkingData] = useState({
    id: "",
    capacity: "",
    reservedBy: ""
  });
  const statusLegends = [
    {
      color: themeClasses.available,
      status: "Available",
    },
    {
      color: themeClasses.reserved,
      status: "Reserved",
    },
  ];
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
      height: '400px'
    },
  };

  const updateSelectedEmployee = (employee) => setSelectedEmployee(employee);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function parkingHandler(row) {
    setActiveParkingData(row);
    openModal();
  }

  function reserve() {
    let tempData = [...parkingData];
    const toUpdate = tempData.find(datum => datum.id === activeParkingData.id);
    const index = tempData.indexOf(toUpdate);
    toUpdate.reservedBy = selectedEmployee;
    toUpdate.status = "Reserved";

    setParkingData([
      ...parkingData.slice(0, index),
      toUpdate,
      ...parkingData.slice(index + 1)
    ])
    closeModal();
  }

  function remove() {
    let tempData = [...parkingData];
    const toUpdate = tempData.find(datum => datum.id === activeParkingData.id);
    const index = tempData.indexOf(toUpdate);
    toUpdate.reservedBy = "";
    toUpdate.status = "Available";

    setParkingData([
      ...parkingData.slice(0, index),
      toUpdate,
      ...parkingData.slice(index + 1)
    ])
    closeModal();
  }

  return (
    <div id="parking" className="p-8">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Parking Modal"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="self-end">
            <Close className="cursor-pointer" onClick={closeModal} />
          </div>
          <div style={{ flexBasis: "100%" }}>
            <h1 className="text-xl self-center my-8">{"Parking Slot " + activeParkingData.id}</h1>
            <div><label>{"Capacity: " + activeParkingData.capacity}</label></div>
            <div><label>{"Reserved by: " + (activeParkingData.reservedBy ? activeParkingData.reservedBy : "N/A")}</label></div>
          </div>

          <div className="flex w-full mt-8 justify-between">
            {activeParkingData.reservedBy && <button className={"rounded cancel " + themeClasses.button} onClick={remove}>Remove</button>}
            <EmployeeSelector props={{ updater: updateSelectedEmployee }}></EmployeeSelector>
            <button disabled={!selectedEmployee} className={"rounded reserve " + themeClasses.button} onClick={() => { reserve() }}>Reserve</button>
          </div>
        </div>
      </Modal>
      <div id="parking-buttons" className="grid gap-2 grid-cols-3 grid-rows-2">
        {parkingData.map((park, i) => (
          <ParkSlot key={i} parkingData={park} openModal={openModal} parkingHandler={parkingHandler} />
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
