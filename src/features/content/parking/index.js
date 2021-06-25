import React from "react";

const ParkSlot = ({ props }) => {
  const ParkingStatus = {
    Available: 0,
    Reserved: 1,
  };
  const colors = [
    "border-indigo-700 bg-indigo-500",
    "border-red-700 bg-red-500",
  ];
  return (
    <div
      className={
        "border-4 flex justify-center items-center cursor-pointer " +
        colors[ParkingStatus[props.status]]
      }
    >
      <img
        className="m-auto h-1/2"
        alt="parking logo"
        src={"/logos/parking.png"}
      ></img>
    </div>
  );
};

const Parking = ({ data }) => {
  const parkingData = [
    { status: "Reserved" },
    { status: "Reserved" },
    { status: "Available" },
    { status: "Reserved" },
    { status: "Available" },
    { status: "Reserved" },
  ];
  const statusLegends = [
    {
      color: "border-indigo-700 bg-indigo-500",
      status: "Available",
    },
    {
      color: "border-red-700 bg-red-500",
      status: "Reserved",
    },
  ];

  return (
    <div id="parking" className="p-8">
      <div id="parking-buttons" className="grid gap-2 grid-cols-3 grid-rows-2">
        {parkingData.map((park, i) => (
          <ParkSlot key={i} props={park} />
        ))}
      </div>
      <div id="calendarLegendDetails" className="flex">
        {statusLegends.map((legend, i) => (
          <div key={i} className="flex items-center mr-4">
            <div className={"h-4 w-4 mr-1 " + legend.color}></div>
            {legend.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parking;
