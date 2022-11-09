
// ==============================|| OVERRIDES - TABLE ROW ||============================== /

export default function TableRow() {
  return {
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: "#F5F5F5"
          },
          '&:last-of-type': {
            '& .MuiTableCell-root': {
              borderBottom: 'none'
            }
          },
          '& .MuiTableCell-root': {
            '&:last-of-type': {
              paddingRight: 24
            },
            '&:first-of-type': {
              paddingLeft: 24
            },
          },
          padding: 8,
          border: 0,
        },
      }
    }
  };
}
