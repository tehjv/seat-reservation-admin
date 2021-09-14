import WorkstationStatus from "../../../constants/WorkstationStatus";
import WorkstationType from "../../../constants/WorkstationType";

const workStationsRow = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.RESERVED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1",
    reservedByTeam: 'CIE',
    showTeamReservation: true
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "Jan",
    seatId: "2",
    reservedByTeam: 'CA',
    showTeamReservation: true
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "3",
    reservedByTeam: '',
    showTeamReservation: true
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "4",
    reservedByTeam: '',
    showTeamReservation: true
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "5",
    reservedByTeam: '',
    showTeamReservation: true
  },
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "Ann",
    seatId: "6",
    reservedByTeam: '',
    showTeamReservation: true
  },
];

export const workStationsSectorData = {
  sectorLabel: "Sector 1",
  sectorBays: [
    { bayLabel: "Bay 2", bayRows: [workStationsRow] },
  ],
};

