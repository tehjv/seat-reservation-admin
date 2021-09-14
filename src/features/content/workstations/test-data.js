import WorkstationStatus from "../../../constants/WorkstationStatus";
import WorkstationType from "../../../constants/WorkstationType";

const noStatusRowAllTypesData = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.WALL,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.NONE,
    status: WorkstationStatus.NOSTATUS,
  },
];

const withStatusRowAllTypesData = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.AVAILABLE,
  },
  {
    type: WorkstationType.WALL,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.NONE,
    status: WorkstationStatus.NOTALLOWED,
  },
];

const noStatusRowData = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOSTATUS,
  },
];

const withStatusRowData1 = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "2"
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "3"
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "4"
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "John",
    seatId: "5"
  },
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "6"
  },
];

const withStatusRowData2 = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "John",
    seatId: "1"
  },
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
];

const withStatusRowData3 = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "Jan",
    seatId: "1"
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.AVAILABLE,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOTALLOWED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "",
    seatId: "1"
  },
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.RESERVED,
    monitors: 1,
    docking: "none",
    ports: "4521",
    reservedBy: "Ann",
    seatId: "1"
  },
];

export const rowData = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.AVAILABLE,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.NOSTATUS,
  },
  {
    type: WorkstationType.WALL,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.NONE,
    status: WorkstationStatus.NOTALLOWED,
  },
];

export const noStatusSectordata = {
  sectorLabel: "Sector 1",
  sectorBays: [
    { bayLabel: "Bay 1", bayRows: [noStatusRowAllTypesData, noStatusRowData] },
    { bayLabel: "Bay 2", bayRows: [noStatusRowData, noStatusRowData] },
  ],
};

export const withStatusSectordata = {
  sectorLabel: "Sector 1",
  sectorBays: [
    {
      bayLabel: "Bay 1",
      bayRows: [withStatusRowAllTypesData, withStatusRowData1],
    },
    { bayLabel: "Bay 2", bayRows: [withStatusRowData2, withStatusRowData3] },
  ],
};
