// project import
import getColors from "../../utils/getColors";

// ==============================|| OVERRIDES - INPUT BORDER & SHADOWS ||============================== //

function getColor({ variant, theme }) {
  const colors = getColors(theme, variant);
  const { light } = colors;

  return {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: light,
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${light}`,
      },
    },
  };
}

// ==============================|| OVERRIDES - OUTLINED INPUT ||============================== //

export default function OutlinedInput(theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "8.5px 12px 8.5px 10px",
          borderRadious: 0,
        },
        notchedOutline: {
          borderColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[300],
        },
        root: {
          ...getColor({ variant: "primary", theme }),
          "&.Mui-error": {
            ...getColor({ variant: "error", theme }),
          },
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
        colorSecondary: getColor({ variant: "secondary", theme }),
        colorError: getColor({ variant: "error", theme }),
        colorWarning: getColor({ variant: "warning", theme }),
        colorInfo: getColor({ variant: "info", theme }),
        colorSuccess: getColor({ variant: "success", theme }),
      },
    },
  };
}
