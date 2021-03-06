import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import WorkstationType from "../../../constants/WorkstationType";
import Modal from "react-modal";
import WorkstationStatus from "../../../constants/WorkstationStatus";
import {
  BorderAll,
  Apple,
  LaptopWindows,
  LaptopChromebook,
  CancelPresentation,
  NotInterested,
} from "@material-ui/icons";
import EmployeeSelector from "../employee-selector";

const useStyles = makeStyles((theme) => ({
  available: {
    background: `${theme.palette.reservation.available}`,
    color: `${theme.palette.reservation.text.light}`,
  },
  reserved: {
    background: `${theme.palette.reservation.reserved}`,
    color: `${theme.palette.reservation.text.light}`,
  },
  disabled: {
    background: `${theme.palette.reservation.disabled}`,
    color: `${theme.palette.reservation.text.dark}`,
  },
  flex: {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  button: {
    background: `${theme.palette.primary.main} !important`,
    border: `1px solid ${theme.palette.primary.light} !important`,
    color: `${theme.palette.primary.contrastText} !important`,
    padding: ".88rem 1.6rem !important",
    "&:hover, &:active, &:focus, &:focus-visible": {
      background: `${theme.palette.primary.dark} !important`,
      border: `1px solid ${theme.palette.primary.main} !important`,
      color: `${theme.palette.primary.contrastText} !important`,
      outline: "none !important",
    },
    "&[disabled], &[disabled].reserve": {
      background: `${theme.palette.background.default} !important`,
      border: `1px solid ${theme.palette.background.light} !important`,
      color: `${theme.palette.background.dark} !important`,
      "&:hover, &:active, &:focus, &:focus-visible": {
        background: `${theme.palette.background.default} !important`,
        border: `1px solid ${theme.palette.background.light} !important`,
        color: `${theme.palette.background.dark} !important`,
        outline: "none !important",
      },
    },
    "&.reserve": {
      background: `${theme.palette.secondary.main} !important`,
      border: `1px solid ${theme.palette.secondary.light} !important`,
      color: `${theme.palette.secondary.contrastText} !important`,
      "&:hover, &:active, &:focus, &:focus-visible": {
        background: `${theme.palette.secondary.dark} !important`,
        border: `1px solid ${theme.palette.secondary.main} !important`,
        color: `${theme.palette.secondary.contrastText} !important`,
        outline: "none !important",
      },
    },
    "&.cancel": {
      background: `${theme.palette.error.main} !important`,
      border: `1px solid ${theme.palette.error.light} !important`,
      color: `${theme.palette.error.contrastText} !important`,
      "&:hover, &:active, &:focus, &:focus-visible": {
        background: `${theme.palette.error.dark} !important`,
        border: `1px solid ${theme.palette.error.main} !important`,
        color: `${theme.palette.error.contrastText} !important`,
        outline: "none !important",
      },
    },
  },
  icon: {
    height: "2.5rem",
    width: "auto",
    margin: "0",
  },
}));

const FloorPlanWorkstation = ({ props }) => {
  const themeClasses = useStyles();
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      height: "500px",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function reserve() {
    console.log("reserving");
  }

  function handleSelect(e) {
    const value = e.target.checked;
    props.selectionUpdater(props.seat, value);
  }

  function doNotPropagate(e) {
    e.stopPropagation();
  }

  Modal.setAppElement("#mainApp");

  const colors = [
    themeClasses.available,
    themeClasses.reserved,
    themeClasses.disabled,
    themeClasses.disabled,
  ];
  return (
    <>
      {!props.seat.isFiller ? (
        <div id={`workstation${props.seat.seatId}`}>
          <div
            onClick={() => {
              (props.seat.status === WorkstationStatus.AVAILABLE ||
                props.seat.status === WorkstationStatus.RESERVED ||
                props.seat.editable) &&
                openModal();
            }}
            className={
              "flex flex-col relative rounded border-2 h-20 w-28 cursor-pointer " +
              colors[props.seat.status] +
              " " +
              themeClasses.flex
            }
          >
            {props.selectionUpdater && (
              <input
                onChange={handleSelect}
                onClick={doNotPropagate}
                className="absolute top-1 right-1"
                type="checkbox"
              ></input>
            )}
            {props.seat.type === WorkstationType.WINDOWS && (
              <BorderAll className={themeClasses.icon} />
            )}
            {props.seat.type === WorkstationType.APPLE && (
              <Apple className={themeClasses.icon} />
            )}
            {props.seat.type === WorkstationType.NEWDOCK && (
              <LaptopWindows className={themeClasses.icon} />
            )}
            {props.seat.type === WorkstationType.OLDDOCK && (
              <LaptopChromebook className={themeClasses.icon} />
            )}
            {props.seat.type === WorkstationType.WALL && (
              <CancelPresentation className={themeClasses.icon} />
            )}
            {props.seat.type === WorkstationType.NONE && (
              <NotInterested className={themeClasses.icon} />
            )}
            {props.seat.showTeamReservation && (
              <label className="self-center">{props.seat.reservedByTeam}</label>
            )}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h1 className="text-xl self-center my-8">
              {"Seat " + props.seat.seatId}
            </h1>
            <label>{"Number of Monitor: " + props.seat.monitors}</label>
            <label>{"Docking Station: " + props.seat.docking}</label>
            <label>{"Network Ports: " + props.seat.ports}</label>
            <label>
              {"Reserved by: " +
                (props.seat.reservedBy ? props.seat.reservedBy : "N/A")}
            </label>
            <div className="flex w-full mt-8 justify-between flex-grow-2 items-end">
              <button
                className={"rounded cancel " + themeClasses.button}
                onClick={closeModal}
              >
                Cancel
              </button>
              <EmployeeSelector></EmployeeSelector>
              <button
                disabled={props.seat.reservedBy}
                className={"rounded reserve " + themeClasses.button}
                onClick={reserve}
              >
                Reserve
              </button>
            </div>
          </Modal>
        </div>
      ) : (
        <div className="border-2 h-20 w-28"></div>
      )}
    </>
  );
};

FloorPlanWorkstation.propTypes = {
  seat: PropTypes.shape({
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
  }),
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array,
};

const FloorPlanWorkstationRow = ({ props }) => {
  let data;

  if (!props) {
    data = [
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
      { isFiller: true },
    ];
  } else {
    data = props.workstations;
  }

  return (
    <div className="grid-cols-6 flex justify-evenly w-full">
      {data.map((datum, i) => (
        <FloorPlanWorkstation
          key={i}
          props={{
            seat: datum,
            selectionUpdater: props.selectionUpdater,
            currentSelection: props.currentSelection,
          }}
        />
      ))}
    </div>
  );
};

FloorPlanWorkstationRow.propTypes = {
  workstations: PropTypes.array,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array,
};

const FloorPlanBay = ({ props }) => {
  return (
    <div className="flex w-full pb-4">
      <div className="flex items-center w-8 p-4 justify-center rounded-l-lg vertical-text bg-gray-200">
        {props.bayLabel}
      </div>
      <div className="flex flex-col w-full justify-center px-4 items-center bg-gray-300">
        {props.bayRows.map((row, i) => (
          <FloorPlanWorkstationRow
            key={i}
            props={{
              workstations: row,
              selectionUpdater: props.selectionUpdater,
              currentSelection: props.currentSelection,
            }}
          />
        ))}
      </div>
    </div>
  );
};

FloorPlanBay.propTypes = {
  bayLabel: PropTypes.string,
  bayRows: PropTypes.array,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array,
};

const FloorPlanSector = ({ props }) => {
  return (
    <div className="w-full">
      <div className="text-lg rounded-2xl font-bold bg-gray-300 w-max py-2 px-4 mb-4">
        {props.sectorLabel}
      </div>
      {props.sectorBays.map((bay, i) => (
        <div key={i}>
          <FloorPlanBay
            props={{
              bayLabel: bay.bayLabel,
              bayRows: bay.bayRows,
              selectionUpdater: props.selectionUpdater,
              currentSelection: props.currentSelection,
            }}
          />
        </div>
      ))}
    </div>
  );
};

FloorPlanSector.propTypes = {
  sectorLabel: PropTypes.string,
  sectorBays: PropTypes.array,
  selectionUpdater: PropTypes.func,
  currentSelection: PropTypes.array,
};

export default FloorPlanSector;
