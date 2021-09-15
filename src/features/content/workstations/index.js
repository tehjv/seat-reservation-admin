import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import { noStatusSectordata, noStatusSectordata2 } from "../../../test-data/test-data";
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
        "&[disabled], &[disabled].delete, &[disabled].reserve": {
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
        "&.reserve, &.edit": {
            background: `${theme.palette.secondary.main} !important`,
            border: `1px solid ${theme.palette.secondary.light} !important`,
            color: `${theme.palette.secondary.contrastText} !important`,
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
            '&:hover, &:active, &:focus, &:focus-visible': {
                background: `${theme.palette.error.dark} !important`,
                border: `1px solid ${theme.palette.error.main} !important`,
                color: `${theme.palette.error.contrastText} !important`,
                outline: 'none !important'
            }
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

const Workstations = ({ data }) => {
    const themeClasses = useStyles();
    const [floorPlan, setFloorPlan] = useState([noStatusSectordata, noStatusSectordata2]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const updateSelectedSeats = (seats) => {
        setSelectedSeats(seats);
    };
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

    function deleteWorkstation() {

    }

    function addWorkstation() {

    }

    return (
        <div id="calendar" className="p-8 h-full flex flex-col">
            <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto rounded">
                {floorPlan.map((sector, i) => (
                    <Sector key={i} props={{ ...sector, selectionUpdater: updateSelectedSeats, currentSelection: selectedSeats }} />
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
                    <button className={"rounded add mr-2 " + themeClasses.button} onClick={addWorkstation}>Add</button>
                    <button disabled={selectedSeats.length > 0 ? null : true} className={"rounded cancel delete " + themeClasses.button} onClick={deleteWorkstation}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Workstations;
