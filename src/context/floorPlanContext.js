import React, { createContext, useEffect, useState } from "react";
import {
  workstationsSectorData1,
  workstationsSectorData2,
  workstationsSectorData3,
} from "../features/content/workstations/test-data";

const FloorPlanContext = createContext();
FloorPlanContext.displayName = "WorkstationContext";

// This context provider is passed to any component requiring the context
const FloorPlanProvider = ({ children }) => {  
  const [allFloorPlan, setAllFloorPlan] = useState(null);

  // temp setup with canned data. use API when ready
  useEffect(() => {
    const workstationsSectorData1Clone = { ...workstationsSectorData1 };
    const workstationsSectorData2Clone = { ...workstationsSectorData2 };
    const workstationsSectorData3Clone = { ...workstationsSectorData3 };
    setAllFloorPlan({
      "Floor 15": [workstationsSectorData1Clone, workstationsSectorData2Clone],
      "Floor 16": [workstationsSectorData3Clone],
    });
  }, []);

  // TODO: fetch floorPlan via API might need to adjust data. Also use axios.
  //   useEffect(() => {
  //     const fetchUser = () => {
  //       // this would usually be your own backend, or localStorage
  //       // for example
  //       fetch("https://randomuser.me/api/")
  //         .then((response) => response.json())
  //         .then((result) => setAllFloorPlan(result.results[0])) // if data is as is
  // .then((result) => { // if data needs transformation/adjustment
  //   // const transformed = <dataTranformation> (result)
  //   setAllFloorPlan(transformed)
  // })
  //         .catch((error) => console.log("An error occured"));
  //     };

  //     fetchUser();
  //   }, []);

  return (
    <FloorPlanContext.Provider
      value={{
        allFloorPlan,
        setAllFloorPlan,
      }}
    >
      {children}
    </FloorPlanContext.Provider>
  );
};

export { FloorPlanProvider, FloorPlanContext };
