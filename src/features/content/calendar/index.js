import React from "react";
import Workstation from "../../shared/workstation";
import WorkstationStatus from "../../../constants/WorkstationStatus";
import WorkstationType from "../../../constants/WorkstationType";
import WorkstationRow from "../../shared/workstation-row";
import Bay from "../../shared/bay";

const Calendar = ({ data }) => {
  console.log(WorkstationStatus);
  const rowData = [
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
  return (
    <div className="p-8">
      <h4>Workstation Components</h4>
      <Workstation
        props={{
          type: WorkstationType.WINDOWS,
          status: WorkstationStatus.AVAILABLE,
        }}
      />
      <Workstation
        props={{
          type: WorkstationType.APPLE,
          status: WorkstationStatus.RESERVED,
        }}
      />
      <Workstation
        props={{
          type: WorkstationType.NEWDOCK,
          status: WorkstationStatus.NOTALLOWED,
        }}
      />
      <Workstation
        props={{
          type: WorkstationType.OLDDOCK,
          status: WorkstationStatus.NOSTATUS,
        }}
      />
      <Workstation
        props={{
          type: WorkstationType.WALL,
          status: WorkstationStatus.NOTALLOWED,
        }}
      />
      <Workstation
        props={{
          type: WorkstationType.NONE,
          status: WorkstationStatus.NOTALLOWED,
        }}
      />
      <hr></hr>
      <h4>Row Components</h4>
      <WorkstationRow />
      <WorkstationRow props={{ workstations: rowData }} />
      <hr></hr>
      <h4>Bay Components</h4>
      <Bay props={{ bayLabel: "Bay 1", bayRows: [rowData] }} />
    </div>
  );
};

export default Calendar;
