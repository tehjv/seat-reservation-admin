import { useState } from "react";

export const useWorkstation = () => {
  const defaultValue = {
    monitors: 1,
    docking: "",
    ports: "",
    type: "",
    bay: "",
    row: "",
  };
  const [workstation, setWorkstation] = useState(defaultValue);

  return {
    workstation,
    setWorkstation,
    resetWorkStation: () => setWorkstation(defaultValue),
    monitorsBind: {
      value: workstation.monitors,
      onChange: (event) => {
        setWorkstation((state) => ({ ...state, monitors: event.target.value }));
      },
    },
    portsBind: {
      value: workstation.ports,
      onChange: (event) => {
        setWorkstation((state) => ({ ...state, ports: event.target.value }));
      },
    },
    typeBind: {
      value: workstation.type,
      onChange: (event) => {
        setWorkstation((state) => ({ ...state, type: event.target.value }));
      },
    },
    bayBind: {
      value: workstation.bay,
      onChange: (event) => {
        setWorkstation((state) => ({ ...state, bay: event.target.value }));
      },
    },
    rowBind: {
      value: workstation.row,
      onChange: (event) => {
        setWorkstation((state) => ({ ...state, row: event.target.value }));
      },
    },
  };
};
