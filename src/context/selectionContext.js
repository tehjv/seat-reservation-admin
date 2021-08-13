import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

// This context provider is passed to any component requiring the context
const SelectionProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    return (
        <SelectionContext.Provider
            value={{
                name,
                setName,
                id,
                setId
            }}
        >
            {children}
        </SelectionContext.Provider>
    );
};

export default SelectionProvider;