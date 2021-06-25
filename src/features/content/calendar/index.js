import React, { useState } from "react";
import DatePicker from "react-datepicker";
import WorkstationStatus from "../../../constants/WorkstationStatus";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import { noStatusSectordata, withStatusSectordata } from "./test-data";

const Calendar = ({ data }) => {
  console.log(WorkstationStatus);
  let floorPlanData = withStatusSectordata;
  const [startDate, setStartDate] = useState(null);
  const floors = ["Floor 15", "Floor 16"];
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

  return (
    <div id="calendar" className="p-8 h-full flex flex-col">
      <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto">
        <Sector props={{ ...floorPlanData }} />
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
        id="calendarControls"
        className="flex justify-between flex-grow-2 items-end"
      >
        <div id="leftControls">
          <select className="rounded border-2">
            {floors.map((floor, i) => (
              <option key={i}>{floor}</option>
            ))}
          </select>
        </div>
        <div id="rightControls">
          <DatePicker
            className="rounded border-2"
            placeholderText="Pick a date"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              console.log("changing floor plan");
              floorPlanData = withStatusSectordata;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
