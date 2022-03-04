import { useContext } from "react";
import { FloorPlanContext } from "./floorPlanContext";

const useFloorPlanContext = () => {
  // get the context
  const context = useContext(FloorPlanContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useFloorPlanContext was used outside of its Provider");
  }

  return context;
};

export default useFloorPlanContext;
