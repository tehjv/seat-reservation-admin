import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
        },
        width: '240px'
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
        },
        width: '240px'
    }
}));

const Settings = ({ data }) => {
    const themeClasses = useStyles();
    const [startDate, setStartDate] = useState(new Date());

    function updateRotation() {
        return;
    }

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Edit Seat Rotation</h1>
            <div className="mt-8 flex flex-row flex-wrap w-full my-2">
                <div className="flex items-center w-full">
                    <label>Current Rotation</label>
                </div>
                <div className="flex items-center w-full mb-4">
                <select className={"rounded border-2 " + themeClasses.select}>
                        <option>Odd</option>
                        <option>Even</option>
                    </select>
                </div>
                <div className="flex items-center w-full">
                    <label>Implementation Date</label>
                </div>
                <div className="flex items-center w-full mb-4">
                    <DatePicker
                        className={"rounded border-2 " + themeClasses.input}
                        placeholderText="Pick a date"
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                        }}
                    />
                </div>
                <div className="flex items-center w-full">
                    <label>Rotation Basis</label>
                </div>
                <div className="flex items-center w-full mb-4">
                    <select className={"rounded border-2 " + themeClasses.select}>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Daily</option>
                    </select>
                </div>
            </div>
            <div
                id="editRotationControls"
                className="flex justify-between flex-grow-2 items-end"
            >
                <div id="rightControls" className="flex">
                    <button className={"rounded update " + themeClasses.button} onClick={updateRotation}>Save settings</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
