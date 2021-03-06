import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SelectionProvider from "./context/selectionContext";
import { FloorPlanProvider } from "./context/floorPlanContext";

// Material UI
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import "./theme.scss";

ReactDOM.render(
  <FloorPlanProvider>
    <SelectionProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SelectionProvider>
  </FloorPlanProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
