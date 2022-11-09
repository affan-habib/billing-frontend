import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {},
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            padding: "3px 9px",
          },
        },
        popupIndicator: {
          width: "auto",
          height: "auto",
        },
        clearIndicator: {
          width: "auto",
          height: "auto",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "10px 12px 10px 12px",
          borderRadious: 0,
        },
        notchedOutline: {
          "& fieldset": {
            borderRadius: `0 0 0 0`,
          },
        },
        inputSizeSmall: {
          padding: "7.5px 8px 7.5px 12px",
        },
        inputMultiline: {
          padding: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
        },
        outlined: {
          lineHeight: "0.8em",
          "&.MuiInputLabel-sizeSmall": {
            lineHeight: "1em",
          },
          "&.MuiInputLabel-shrink": {
            padding: "0 8px",
            marginLeft: -6,
            lineHeight: "1.4375em",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 500, // Roboto Condensed
    fontWeightBold: 600, // Roboto Condensed
  },
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
};

export default theme;
