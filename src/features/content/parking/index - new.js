import React, { useState, useMemo } from "react";
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { DriveEta } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import EmployeeSelector from "../../shared/employee-selector";
import DataTable from "react-data-table-component";

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

const Parking = ({ data }) => {
  const themeClasses = useStyles();
  const parkingDataMock = [
    { status: "Reserved", capacity: "Big Cars", reservedBy: "John", id: "1" },
    { status: "Reserved", capacity: "Big Cars", reservedBy: "Dan", id: "2" },
    { status: "Available", capacity: "Big Cars", reservedBy: "None", id: "3" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jan", id: "4" },
    { status: "Available", capacity: "Small Cars", reservedBy: "None", id: "5" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jon", id: "6" },
  ];
  const [parkingData, setParkingData] = useState(parkingDataMock);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeParkingData, setActiveParkingData] = useState({
    id: "",
    capacity: "",
    reservedBy: ""
  });
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
  const columns = [
    {

      cell: (row) => <button onClick={() => { parkingHandler(row) }}>Edit</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Capacity',
      selector: row => row.capacity,
      sortable: true,
    },
    {
      name: 'Reserved By',
      selector: row => row.reservedBy,
      sortable: true,
    }
  ];

  Modal.setAppElement('#mainApp');

  function parkingHandler(row) {
    console.log(row);
    setActiveParkingData(row);
    openModal();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    updateSelectedEmployee(null);
  }

  function reserve() {
    let tempData = [...parkingData];
    const toUpdate = tempData.find(datum => datum.id === activeParkingData.id);
    const index = tempData.indexOf(toUpdate);
    toUpdate.reservedBy = selectedEmployee;

    setParkingData([
      ...parkingData.slice(0, index),
      toUpdate,
      ...parkingData.slice(index + 1)
    ])
    closeModal();
  }

  const updateSelectedEmployee = (employee) => setSelectedEmployee(employee);

  return (
    <div id="parking" className="p-8">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Parking Modal"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-xl self-center my-8">{"Parking Slot " + activeParkingData.id}</h1>
            <div><label>{"Capacity: " + activeParkingData.capacity}</label></div>
            <div><label>{"Reserved by: " + (activeParkingData.reservedBy ? activeParkingData.reservedBy : "N/A")}</label></div>
          </div>

          <div className="flex w-full mt-8 justify-between">
            <button className={"rounded cancel " + themeClasses.button} onClick={closeModal}>Cancel</button>
            <EmployeeSelector props={{ updater: updateSelectedEmployee }}></EmployeeSelector>
            <button disabled={!selectedEmployee} className={"rounded reserve " + themeClasses.button} onClick={() => { reserve() }}>Reserve</button>
          </div>
        </div>
      </Modal>
      <div id="parking-buttons" className="grid gap-2 grid-cols-3 grid-rows-2">
        <DataTable
          title="Park Slots"
          data={parkingData}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default Parking;
