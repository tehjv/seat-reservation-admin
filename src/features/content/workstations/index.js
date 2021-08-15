import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
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

const Workstations = ({ data }) => {
    const themeClasses = useStyles();
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
                <div className="mt-8 flex flex-row flex-wrap w-full my-2">
                    <div className="flex items-center justify-between w-full">
                        <label>Current Rotation</label>
                        <select disabled={!editEnabled ? true : null} className={"rounded border-2 " + themeClasses.select}>
                            <option>Odd</option>
                            <option>Even</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between w-full my-2">
                        <label>Implementation Date</label>
                        <DatePicker
                            disabled={!editEnabled}
                            className={"rounded border-2 " + themeClasses.input}
                            placeholderText="Pick a date"
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full my-2">
                        <label>Rotation Basis</label>
                        <select disabled={!editEnabled ? true : null} className={"rounded border-2 " + themeClasses.select}>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Daily</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center w-full mt-8 justify-between flex-grow-2 items-end">
                    <button className={"py-1 px-2 rounded cancel " + themeClasses.button} onClick={() => { disableEdit(); closeModal() }}>Cancel</button>
                    <button className={"py-1 px-2 rounded edit " + themeClasses.button} onClick={editRotation}>Edit</button>
                </div>
            </Modal>
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
            <div
                id="workstationsControls"
                className="flex justify-between flex-grow-2 items-end"
            >
                <div id="leftControls">
                    <button className={"self-center mr-1 py-1 px-2 rounded disabled:opacity-50 " + themeClasses.button} onClick={openModal}>Edit Seat Rotation</button>
                    <select className={"rounded border-2 " + themeClasses.select}>
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
        </div>
    );
};

export default Workstations;
