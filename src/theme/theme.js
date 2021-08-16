import { createTheme } from "@material-ui/core/styles";

// Generate a palette with https://in-your-saas.github.io/material-ui-theme-editor/
const palette = require("./palette.json");

// Export Material UI theme
export const theme = createTheme({
    ...palette,
});

export default theme;
