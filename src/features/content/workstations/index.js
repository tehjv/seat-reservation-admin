import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Sector from "../../shared/sector";
import { noStatusSectordata, noStatusSectordata2 } from "../../../test-data/test-data";
import { makeStyles } from "@material-ui/core/styles";
import Modal from 'react-modal';
import { Input } from 'semantic-ui-react'

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
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newSeat, setNewSeat] = useState(null);
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

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
            height: '450px',
            width: '500px'
        },
    };

    function deleteWorkstation() {

    }

    function addWorkstation() {

    }

    return (
        <div id="calendar" className="p-8 h-full flex flex-col">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h1 className="text-4xl font-bold mb-8">Add New Seat</h1>
                <div className="mt-8 flex flex-row flex-wrap w-full my-2">
                    <div className="flex items-center w-full">
                        <label>Number of Monitor:</label>
                    </div>
                    <div className="flex items-center w-full mb-4">
                        <input className={"rounded border-2 " + themeClasses.select} type="number" placeholder='Enter number' />
                    </div>
                    <div className="flex items-center w-full">
                        <label>Type:</label>
                    </div>
                    <div className="flex items-center w-full mb-4">
                        <select className={"rounded border-2 " + themeClasses.select}>
                            <option>Windows</option>
                            <option>Apple</option>
                            <option>New Docking</option>
                            <option>Old Docking</option>
                        </select>
                    </div>
                    <div className="flex items-center w-full">
                        <label>Ports:</label>
                    </div>
                    <div className="flex items-center w-full mb-4">
                        <input className={"rounded border-2 " + themeClasses.select} type="text" placeholder='Enter value' />
                    </div>
                    <div className="flex w-full mt-8 justify-between flex-grow-2 items-end">
                        <button className={"rounded cancel " + themeClasses.button} onClick={closeModal}>Cancel</button>
                        <button className={"rounded reserve " + themeClasses.button}>Add</button>
                    </div>
                </div>
            </Modal>
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
                    <button className={"rounded add mr-2 " + themeClasses.button} onClick={openModal}>Add</button>
                    <button disabled={selectedSeats.length > 0 ? null : true} className={"rounded cancel delete " + themeClasses.button} onClick={deleteWorkstation}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Workstations;
