import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { workStationsSectorData } from "./test-data";

const Workstations = ({ data }) => {
    const [floorPlan] = useState(workStationsSectorData);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editEnabled, toggleEdit] = useState(false);
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
            'min-width': '400px',
            'min-height': '400px'
        },
    };
    const updateSelectedSeats = (seats) => {
        setSelectedTeam('');
        setSelectedSeats(seats);
    };
    const floors = ["Floor 15", "Floor 16"];
    const teams = ["CIE", "CA"];
    const statusLegends = [
        {
            color: "border-indigo-700 bg-indigo-500",
            status: "Available",
        },
        {
            color: "border-red-700 bg-red-500",
            status: "Reserved",
        },
        {
            color: "border-gray-700 bg-gray-500",
            status: "Not Allowed",
        },
    ];

    function reserve() {
        console.log('reserving', selectedSeats);
        console.log('to ', selectedTeam);
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function editRotation() {
        toggleEdit(true);
    }

    function disableEdit() {
        toggleEdit(false);
    }

    return (
        <div id="calendar" className="p-8 h-full flex flex-col">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => { disableEdit(); closeModal() }}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h1 className="text-xl self-center my-8">Edit Seat Rotation</h1>
                <div className="mt-8 w-full">
                    <div className="flex justify-between w-full">
                        <label>Current Rotation</label>
                        <select disabled={!editEnabled ? true : null} className="rounded border-2 ">
                            <option>Odd</option>
                            <option>Even</option>
                        </select>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Implementation Date</label>
                        <DatePicker
                            disabled={!editEnabled}
                            className="rounded border-2"
                            placeholderText="Pick a date"
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                            }}
                        />
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Rotation Basis</label>
                        <select disabled={!editEnabled ? true : null} className="rounded border-2 ">
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Daily</option>
                        </select>
                    </div>
                </div>
                <div className="flex w-full mt-8 justify-between flex-grow-2 items-end">
                    <button className="py-1 px-2 text-white bg-red-700 rounded" onClick={() => { disableEdit(); closeModal() }}>Cancel</button>
                    <button className="py-1 px-2 text-white bg-indigo-700 rounded" onClick={editRotation}>Edit</button>
                </div>
            </Modal>
            <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto">
                <Sector props={{ ...floorPlan, selectionUpdater: updateSelectedSeats, currentSelection: selectedSeats }} />
            </div>
            <div id="calendarLegendDetails" className="flex">
                {statusLegends.map((legend, i) => (
                    <div key={i} className="flex items-center mr-4">
                        <div className={"h-4 w-4 mr-1 " + legend.color}></div>
                        {legend.status}
                    </div>
                ))}
            </div>
            <div
                id="workstationsControls"
                className="flex justify-between flex-grow-2 items-end"
            >
                <div id="leftControls">
                    <button className="self-center mr-1 py-1 px-2 text-white bg-indigo-700 rounded disabled:opacity-50" onClick={openModal}>Edit Seat Rotation</button>
                    <select className="rounded border-2">
                        {floors.map((floor, i) => (
                            <option key={i}>{floor}</option>
                        ))}
                    </select>
                    {selectedSeats.length > 0 && <select onChange={setSelectedTeam} value={selectedTeam} className="rounded border-2 ">
                        <option value="" disabled>Select team</option>
                        {teams.map((team, i) => (
                            <option key={i}>{team}</option>
                        ))}
                    </select>}
                </div>
                <div id="rightControls">
                    <button disabled={(selectedSeats.length === 0 || !selectedTeam) ? true : null} className="self-center py-1 px-2 text-white bg-indigo-700 rounded disabled:opacity-50" onClick={reserve}>Reserve</button>
                </div>
            </div>
        </div>
    );
};

export default Workstations;
