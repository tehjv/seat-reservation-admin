import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  available: {
    background: `${theme.palette.reservation.available}`,
  },
  reserved: {
    background: `${theme.palette.reservation.reserved}`,
  },
  disabled: {
    background: `${theme.palette.reservation.disabled}`,
  },
  car: {
    color: `${theme.palette.reservation.text.light}`,
  },
  button: {
    background: `${theme.palette.primary.main} !important`,
    border: `1px solid ${theme.palette.primary.light} !important`,
    color: `${theme.palette.primary.contrastText} !important`,
    padding: ".88rem 1.6rem !important",
    "&:hover, &:active, &:focus, &:focus-visible": {
      background: `${theme.palette.primary.dark} !important`,
      border: `1px solid ${theme.palette.primary.main} !important`,
      color: `${theme.palette.primary.contrastText} !important`,
      outline: "none !important",
    },
    "&[disabled], &[disabled].reserve": {
      background: `${theme.palette.background.default} !important`,
      border: `1px solid ${theme.palette.background.light} !important`,
      color: `${theme.palette.background.dark} !important`,
      "&:hover, &:active, &:focus, &:focus-visible": {
        background: `${theme.palette.background.default} !important`,
        border: `1px solid ${theme.palette.background.light} !important`,
        color: `${theme.palette.background.dark} !important`,
        outline: "none !important",
      },
    },
    "&.reserve": {
      background: `${theme.palette.secondary.main} !important`,
      border: `1px solid ${theme.palette.secondary.light} !important`,
      color: `${theme.palette.secondary.contrastText} !important`,
      "margin-left": "4px",
      "&:hover, &:active, &:focus, &:focus-visible": {
        background: `${theme.palette.secondary.dark} !important`,
        border: `1px solid ${theme.palette.secondary.main} !important`,
        color: `${theme.palette.secondary.contrastText} !important`,
        outline: "none !important",
      },
    },
    "&.cancel": {
      background: `${theme.palette.error.main} !important`,
      border: `1px solid ${theme.palette.error.light} !important`,
      color: `${theme.palette.error.contrastText} !important`,
      "margin-right": "4px",
      "&:hover, &:active, &:focus, &:focus-visible": {
        background: `${theme.palette.error.dark} !important`,
        border: `1px solid ${theme.palette.error.main} !important`,
        color: `${theme.palette.error.contrastText} !important`,
        outline: "none !important",
      },
    },
  },
  icon: {
    height: "4rem",
    width: "auto",
    margin: "2rem 0",
  },
}));

export default useStyles;
