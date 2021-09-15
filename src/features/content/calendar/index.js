import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import { noStatusSectordata, noStatusSectordata2, withStatusSectordata, withStatusSectordata2 } from "../../../test-data/test-data";
import { makeStyles } from "@material-ui/core/styles";

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
  input: {
    border: `1px solid ${theme.palette.secondary.light} !important`,
    color: `${theme.palette.text.secondary} !important`,
    padding: ".88rem 1.6rem !important",
    '&:hover, &:active, &:focus, &:focus-visible': {
      border: `1px solid ${theme.palette.secondary.main} !important`,
      color: `${theme.palette.text.primary} !important`,
      outline: 'none !important'
    }
  },
  select: {
    border: `1px solid ${theme.palette.secondary.light} !important`,
    color: `${theme.palette.text.select} !important`,
    padding: ".88rem 1.6rem !important",
    '&:hover, &:active, &:focus, &:focus-visible': {
      border: `1px solid ${theme.palette.secondary.main} !important`,
      color: `${theme.palette.text.primary} !important`,
      outline: 'none !important'
    }
  }
}));

const Calendar = ({ data }) => {
  const themeClasses = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [floorPlan, setFloorPlan] = useState([noStatusSectordata, noStatusSectordata2]);
  const floors = ["Floor 15", "Floor 16"];
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

  return (
    <div id="calendar" className="p-8 h-full flex flex-col">
      <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto rounded">
        {floorPlan.map((sector, i) => (
          <Sector key={i} props={{ ...sector }} />
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
      <div
        id="calendarControls"
        className="flex justify-between flex-grow-2 items-end"
      >
        <div id="leftControls">
          <select className={"rounded border-2 px-2 py-3 " + themeClasses.select}>
            {floors.map((floor, i) => (
              <option key={i}>{floor}</option>
            ))}
          </select>
        </div>
        <div id="rightControls">
          <DatePicker
            className={"rounded border-2 " + themeClasses.input}
            placeholderText="Pick a date"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              console.log("changing floor plan");
              console.log("new", withStatusSectordata);
              // floorPlanData = withStatusSectordata;
              setFloorPlan([withStatusSectordata, withStatusSectordata2]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
