import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from 'react-modal';
import WorkstationStatus from '../../../constants/WorkstationStatus';
import EmployeeSelector from "../employee-selector";
import {
  BorderAll,
  Apple,
  LaptopWindows,
  LaptopChromebook,
  CancelPresentation,
  NotInterested
} from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import WorkstationType from "../../../constants/WorkstationType";

const useStyles = makeStyles((theme) => ({
  available: {
    background: `${theme.palette.reservation.available}`,
    color: `${theme.palette.reservation.text.light}`
  },
  reserved: {
    background: `${theme.palette.reservation.reserved}`,
    color: `${theme.palette.reservation.text.light}`
  },
  disabled: {
    background: `${theme.palette.reservation.disabled}`,
    color: `${theme.palette.reservation.text.dark}`
  },
  flex: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
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
    "&.reserve": {
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
  icon: {
    height: "2.5rem",
    width: "auto",
    margin: "0"
  }
}));

const Workstation = ({ props }) => {
  const themeClasses = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);
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
      height: '500px'
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function reserve() {
    console.log('reserving')
  }

  function handleSelect(e) {
    const value = e.target.checked;
    let newSelection;
    if (value) {
      newSelection = [...props.currentSelection];
      newSelection.push(props.seatId);
    } else {
      newSelection = props.currentSelection.filter(item => item !== props.seatId);
    }
    props.selectionUpdater(newSelection);
  }

  function doNotPropagate(e) {
    e.stopPropagation();
  }

  Modal.setAppElement('#mainApp');

  const colors = [
    themeClasses.available,
    themeClasses.reserved,
    themeClasses.disabled,
    themeClasses.disabled
  ];
  return (
    <>
      {!props.isFiller ? (
        <div>
          <div
            onClick={() => { (props.status === WorkstationStatus.AVAILABLE || props.status === WorkstationStatus.RESERVED) && openModal() }}
            className={
              "flex flex-col relative rounded border-2 h-20 w-28 cursor-pointer " +
              colors[props.status] + " " + themeClasses.flex
            }
          >
            {props.selectionUpdater && <input onChange={handleSelect} onClick={doNotPropagate} className="absolute top-1 right-1" type="checkbox"></input>}
            {/* <img
              className="m-auto h-1/2 select-none"
              alt="workstation logo"
              src={"/logos/" + logos[props.type]}
            ></img> */}
            {props.type === WorkstationType.WINDOWS && <BorderAll className={themeClasses.icon} /> }
            {props.type === WorkstationType.APPLE && <Apple className={themeClasses.icon} /> }
            {props.type === WorkstationType.NEWDOCK && <LaptopWindows className={themeClasses.icon} /> }
            {props.type === WorkstationType.OLDDOCK && <LaptopChromebook className={themeClasses.icon} /> }
            {props.type === WorkstationType.WALL && <CancelPresentation className={themeClasses.icon} /> }
            {props.type === WorkstationType.NONE && <NotInterested className={themeClasses.icon} /> }
            {props.showTeamReservation && <label className="self-center">{props.reservedByTeam}</label>}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h1 className="text-xl self-center my-8">{"Seat " + props.seatId}</h1>
            <label>{"Number of Monitor: " + props.monitors}</label>
            <label>{"Docking Station: " + props.docking}</label>
            <label>{"Network Ports: " + props.ports}</label>
            <label>{"Reserved by: " + (props.reservedBy ? props.reservedBy : "N/A")}</label>
            <div className="flex w-full mt-8 justify-between flex-grow-2 items-end">
              <button className={"rounded cancel " + themeClasses.button} onClick={closeModal}>Cancel</button>
              <EmployeeSelector></EmployeeSelector>
              <button disabled={props.reservedBy} className={"rounded reserve " + themeClasses.button} onClick={reserve}>Reserve</button>
            </div>
          </Modal>
        </div>
      ) : (
        <div className="border-2 h-20 w-28"></div>
      )
      }
    </>
  );
};

Workstation.propTypes = {
  isFiller: PropTypes.bool,
  status: PropTypes.number,
  type: PropTypes.number,
  monitors: PropTypes.number,
  docking: PropTypes.string,
  ports: PropTypes.string,
  reservedBy: PropTypes.string,
  seatId: PropTypes.string,
  reservedByTeam: PropTypes.string,
  showTeamReservation: PropTypes.bool,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array
};

export default Workstation;
