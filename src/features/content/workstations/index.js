import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import { workStationsSectorData } from "./test-data";

const Workstations = ({ data }) => {
    const [floorPlan, setFloorPlan] = useState(workStationsSectorData);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
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

    return (
        <div id="calendar" className="p-8 h-full flex flex-col">
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
