import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { DriveEta } from "@material-ui/icons";
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

const ParkSlot = ({ props }) => {
  const themeClasses = useStyles();
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
      height: '400px'
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
    themeClasses.available,
    themeClasses.reserved,
  ];

  Modal.setAppElement('#mainApp');

  return (
    <div>
      <div
        onClick={openModal}
        className={
          "border-4 flex justify-center items-center cursor-pointer " +
          colors[ParkingStatus[props.status]] + " " + themeClasses.car
        }
      >
        <DriveEta className={themeClasses.icon} />

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl self-center my-8">{"Parking Slot " + props.id}</h1>
            <label>{"Capacity: " + props.capacity}</label>
            <label>{"Reserved by: " + (props.reservedBy ? props.reservedBy : "N/A")}</label>
          </div>

          <div className="flex w-full mt-8 justify-between">
            <button className={"rounded cancel " + themeClasses.button} onClick={closeModal}>Cancel</button>
            <EmployeeSelector></EmployeeSelector>
            <button disabled={props.reservedBy} className={"rounded reserve " + themeClasses.button} onClick={reserve}>Reserve</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const Parking = ({ data }) => {
  const themeClasses = useStyles();
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
      color: themeClasses.available,
      status: "Available",
    },
    {
      color: themeClasses.reserved,
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
