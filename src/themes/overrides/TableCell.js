// ==============================|| OVERRIDES - TABLE CELL ||============================== //

export default function TableCell(theme) {
  const commonCell = {
    '&:not(:last-of-type)': {
      position: 'relative',
      // '&:after': {
      //   position: 'absolute',
      //   content: '""',
      //   backgroundColor: theme.palette.divider,
      //   width: 1,
      //   height: 'calc(100% - 30px)',
      //   right: 0,
      //   top: 16
      // }
    }
  };

  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          padding: 2,
          border: 0,
          borderColor: theme.palette.divider
        },
        sizeSmall: {
          padding: 8
        },
        head: {
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          backgroundColor: "#205081",
          color: theme.palette.common.white,
          ...commonCell
        },
        body: {

          fontSize: 14,
        },
        footer: {
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          ...commonCell
        },
      }
    }
  };
}
