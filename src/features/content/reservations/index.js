import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import { workStationsSectorData } from "./test-data";
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
    select: {
        border: `1px solid ${theme.palette.secondary.light} !important`,
        color: `${theme.palette.text.select} !important`,
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
    input: {
        border: `1px solid ${theme.palette.secondary.light} !important`,
        color: `${theme.palette.text.secondary} !important`,
        padding: ".88rem 1.6rem !important",
        '&:hover, &:active, &:focus, &:focus-visible': {
            border: `1px solid ${theme.palette.secondary.main} !important`,
            color: `${theme.palette.text.primary} !important`,
            outline: 'none !important'
        }
    }
}));

const Reservations = ({ data }) => {
    const themeClasses = useStyles();
    const [floorPlan] = useState(workStationsSectorData);
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

    function reserve() {
        console.log('reserving', selectedSeats);
        console.log('to ', selectedTeam);
    }

    return (
        <div id="calendar" className="p-8 h-full flex flex-col">
            <div
                id="workstationsControls"
                className="flex justify-start flex-grow-2 items-start"
            >
                <div id="leftControls">
                    <select className={"rounded border-2 mr-2 " + themeClasses.select}>
                        {floors.map((floor, i) => (
                            <option key={i}>{floor}</option>
                        ))}
                    </select>
                    {selectedSeats.length > 0 && <select onChange={setSelectedTeam} value={selectedTeam} className={"rounded border-2 " + themeClasses.select}>
                        <option value="" disabled>Select team</option>
                        {teams.map((team, i) => (
                            <option key={i}>{team}</option>
                        ))}
                    </select>}
                </div>
                <div id="rightControls">
                    <button disabled={(selectedSeats.length === 0 || !selectedTeam) ? true : null} className={"self-center rounded reserve " + themeClasses.button} onClick={reserve}>Reserve</button>
                </div>
            </div>
            <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto rounded">
                <Sector props={{ ...floorPlan, selectionUpdater: updateSelectedSeats, currentSelection: selectedSeats }} />
            </div>
            <div id="calendarLegendDetails" className="flex mt-2">
                {statusLegends.map((legend, i) => (
                    <div key={i} className="flex items-center mr-4">
                        <div className={"h-4 w-4 mr-1 rounded " + legend.color}></div>
                        {legend.status}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reservations;
