import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FloorPlanSector from "../../shared/floorplan";
import { workstationsSectorData1, workstationsSectorData2, workstationsSectorData3 } from "./test-data";
import { makeStyles } from "@material-ui/core/styles";
import Modal from 'react-modal';

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
    const workstationsSectorData1Clone = { ...workstationsSectorData1 };
    const workstationsSectorData2Clone = { ...workstationsSectorData2 };
    const workstationsSectorData3Clone = { ...workstationsSectorData3 };
    const [allFloorPlan, setAllFloorPlan] = useState({
        "Floor 15": [workstationsSectorData1Clone, workstationsSectorData2Clone],
        "Floor 16": [workstationsSectorData3Clone]
    });
    const [floorPlan, setFloorPlan] = useState([workstationsSectorData1Clone, workstationsSectorData2Clone]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [newSeat, setNewSeat] = useState(null);
    const updateSelectedSeats = (seat, add) => {
        let temp = [...selectedSeats];
        if (add) {
            temp.push(seat)
        } else {
            temp = temp.filter(x => x.seatId !== seat.seatId);
        }

        setSelectedSeats(temp);
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
            height: '610px',
            width: '500px'
        },
    };

    function floorChangeHandler(e) {
        const val = e.target.value;
        selectedSeats.forEach(seat => {
            const seatDiv = document.querySelector(`#workstation${seat.seatId}`);
            const input = seatDiv.querySelector('input');
            input.checked = false;
        });
        setSelectedSeats([]);
        setFloorPlan(allFloorPlan[val]);
    }

    function deleteWorkstation() {
        console.log('deleting:', selectedSeats)
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
                        </select>
                    </div>
                    <div className="flex items-center w-full">
                        <label>Ports:</label>
                    </div>
                    <div className="flex items-center w-full mb-4">
                        <input className={"rounded border-2 " + themeClasses.select} type="text" placeholder='Enter value' />
                    </div>
                    <div className="flex items-center w-full">
                        <label>Bay:</label>
                    </div>
                    <div className="flex items-center w-full mb-4">
                        <input className={"rounded border-2 " + themeClasses.select} type="text" placeholder='Enter value' />
                    </div>
                    <div className="flex items-center w-full">
                        <label>Row:</label>
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
            <div
                id="workstationsControls"
                className="flex justify-start flex-grow-2 items-start"
            >
                <div id="leftControls" className="mr-2">
                    <select
                        className={"rounded border-2 px-2 py-3 " + themeClasses.select}
                        onChange={(e) => floorChangeHandler(e)}
                    >
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
            <div id="floor-plan" className="p-4 border-2 h-5/6 overflow-auto rounded">
                {floorPlan.map((sector, i) => (
                    <FloorPlanSector key={i} props={{
                        ...sector,
                        currentSelection: selectedSeats,
                        selectionUpdater: updateSelectedSeats
                    }} />
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
        </div>
    );
};

export default Workstations;
