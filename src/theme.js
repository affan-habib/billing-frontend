import { createTheme } from "@mui/material/styles";
import { grey, green, deepOrange, red,teal, orange, yellow, blue, deepPurple, cyan } from '@mui/material/colors';

const rawTheme = createTheme({
  palette: {
    primary: {
      light: deepOrange[400],
      main: deepOrange[500],
      dark: deepOrange[700],
    },
    secondary: {
      light: orange[200],
      main: orange[300],
      dark: orange[400],
    },
    warning: {
      light: blue[100],
      main: blue[500],
      dark: blue[700],
    },
    error: {
      light: deepOrange[300],
      main: deepOrange[300],
      dark: deepOrange[400],
    },
    success: {
      light: deepOrange[400],
      main: deepOrange[500],
      dark: deepOrange[700],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 1,
        },
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
        root: { borderRadius: "2px" },
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
    htmlFontSize: 16,

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: "2.375rem",
      lineHeight: 1.21,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: 1.27,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.33,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.57,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.57,
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.66,
    },
    overline: {
      lineHeight: 1.66,
    },
    button: {
      textTransform: "capitalize",
    },
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
