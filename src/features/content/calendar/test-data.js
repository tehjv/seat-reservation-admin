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

const withStatusRowData = [
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.AVAILABLE,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.NEWDOCK,
    status: WorkstationStatus.AVAILABLE,
  },
  {
    type: WorkstationType.OLDDOCK,
    status: WorkstationStatus.NOTALLOWED,
  },
  {
    type: WorkstationType.APPLE,
    status: WorkstationStatus.RESERVED,
  },
  {
    type: WorkstationType.WINDOWS,
    status: WorkstationStatus.NOTALLOWED,
  },
];

const withStatusRowData2 = [
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
      type: WorkstationType.APPLE,
      status: WorkstationStatus.NOTALLOWED,
    },
    {
      type: WorkstationType.WINDOWS,
      status: WorkstationStatus.RESERVED,
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
      bayRows: [withStatusRowAllTypesData, withStatusRowData],
    },
    { bayLabel: "Bay 2", bayRows: [withStatusRowData, withStatusRowData2] },
  ],
};

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
