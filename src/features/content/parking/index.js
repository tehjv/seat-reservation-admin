import React, { useState, useMemo, useEffect } from "react";
// import ReactDOM from 'react-dom';
import Modal from "react-modal";
import { DriveEta } from "@material-ui/icons";
import useStyles from "./styles";
import EmployeeSelector from "../../shared/employee-selector";
import DataTable from "react-data-table-component";
import axios from "axios";
import URLs from "../../../constants/URLs";
import StaticData from "../../../constants/StaticData";

const Parking = ({ data }) => {
  const themeClasses = useStyles();
  const parkingDataMock = [
    { status: "Reserved", capacity: "Big Cars", reservedBy: "John", id: "1" },
    { status: "Reserved", capacity: "Big Cars", reservedBy: "Dan", id: "2" },
    { status: "Available", capacity: "Big Cars", reservedBy: "None", id: "3" },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jan", id: "4" },
    {
      status: "Available",
      capacity: "Small Cars",
      reservedBy: "None",
      id: "5",
    },
    { status: "Reserved", capacity: "Small Cars", reservedBy: "Jon", id: "6" },
  ];
  const [parkingData, setParkingData] = useState(parkingDataMock);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeParkingData, setActiveParkingData] = useState({
    id: "",
    capacity: "",
    reservedBy: "",
  });

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const response = await axios({
          url: `${URLs.BASEURL}api/organisations/${StaticData.ORGANISATIONID}/buildings/${StaticData.BUILDINGID}/parkings`,
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin":
              // "http://cambridgeresourcemanagementhttpapihost.eba-atekph6k.us-east-1.elasticbeanstalk.com",
              "*",
            "Access-Control-Allow-Methods": "GET",
          },
        });
        console.log(response.data);
      } catch (e) {
        console.log("Error calling API");
        console.error(e);
      }
    };
    fetchParkingData();
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      height: "400px",
    },
  };
  const columns = [
    {
      cell: (row) => (
        <button
          onClick={() => {
            parkingHandler(row);
          }}
        >
          Edit
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },
    {
      name: "Reserved By",
      selector: (row) => row.reservedBy,
      sortable: true,
    },
  ];

  Modal.setAppElement("#mainApp");

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
    const toUpdate = tempData.find(
      (datum) => datum.id === activeParkingData.id
    );
    const index = tempData.indexOf(toUpdate);
    toUpdate.reservedBy = selectedEmployee;

    setParkingData([
      ...parkingData.slice(0, index),
      toUpdate,
      ...parkingData.slice(index + 1),
    ]);
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
            <h1 className="text-xl self-center my-8">
              {"Parking Slot " + activeParkingData.id}
            </h1>
            <div>
              <label>{"Capacity: " + activeParkingData.capacity}</label>
            </div>
            <div>
              <label>
                {"Reserved by: " +
                  (activeParkingData.reservedBy
                    ? activeParkingData.reservedBy
                    : "N/A")}
              </label>
            </div>
          </div>

          <div className="flex w-full mt-8 justify-between">
            <button
              className={"rounded cancel " + themeClasses.button}
              onClick={closeModal}
            >
              Cancel
            </button>
            <EmployeeSelector
              props={{ updater: updateSelectedEmployee }}
            ></EmployeeSelector>
            <button
              disabled={!selectedEmployee}
              className={"rounded reserve " + themeClasses.button}
              onClick={() => {
                reserve();
              }}
            >
              Reserve
            </button>
          </div>
        </div>
      </Modal>
      <div id="parking-buttons" className="">
        <DataTable title="Park Slots" data={parkingData} columns={columns} />
      </div>
    </div>
  );
};

export default Parking;
