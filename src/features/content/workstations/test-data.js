import WorkstationStatus from "../../../constants/WorkstationStatus";
import WorkstationType from "../../../constants/WorkstationType";

// FLOOR 15 DATA
const sample = {
  type: WorkstationType.APPLE,
  status: WorkstationStatus.NOSTATUS,
  monitors: 1,
  docking: "none",
  ports: "4521",
  reservedBy: "",
  seatId: "1",
  editable: true
};

const workstation2 = {
  type: WorkstationType.WINDOWS,
  status: WorkstationStatus.NOSTATUS,
  monitors: 1,
  docking: "none",
  ports: "8080",
  reservedBy: "",
  seatId: "1",
  editable: true
};

let count = 1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function workStationRowMaker() {
  const ret = [];
  for (let i = 0; i < 6; i++) {
    const type = getRandomInt(2) === 1 ? WorkstationType.WINDOWS : WorkstationType.APPLE;
    ret.push({
      type: type,
      status: WorkstationStatus.NOSTATUS,
      monitors: getRandomInt(2) + 1,
      docking: "none",
      ports: "8080",
      reservedBy: "",
      seatId: count.toString(),
      editable: true
    });
    count++;
  }

  return ret;
}

const workstationsRow1 = workStationRowMaker();
const workstationsRow2 = workStationRowMaker();
const workstationsRow3 = workStationRowMaker();
const workstationsRow4 = workStationRowMaker();
const workstationsRow5 = workStationRowMaker();
const workstationsRow6 = workStationRowMaker();
const workstationsRow7 = workStationRowMaker();

const workstationsBay1 = {
  bayLabel: "Bay 1",
  bayRows: [workstationsRow1, workstationsRow2],
}

const workstationsBay2 = {
  bayLabel: "Bay 2",
  bayRows: [workstationsRow3, workstationsRow4],
}

const workstationsBay3 = {
  bayLabel: "Bay 3",
  bayRows: [workstationsRow5, workstationsRow6],
}

const workstationsBay4 = {
  bayLabel: "Bay 1",
  bayRows: [workstationsRow7],
}

export const workstationsSectorData1 = {
  sectorLabel: "Sector 1",
  sectorBays: [
    workstationsBay1,
    workstationsBay2
  ],
}

export const workstationsSectorData2 = {
  sectorLabel: "Sector 2",
  sectorBays: [
    workstationsBay3
  ],
}

export const workstationsSectorData3 = {
  sectorLabel: "Sector 1",
  sectorBays: [
    workstationsBay4
  ],
}
