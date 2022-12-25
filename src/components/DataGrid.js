// material-ui
import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { useState } from "react";
import NoRowIcon from "./NoRowIcon";
import CustomPagination from "./Pagination";

function CustomToolbar() {
  return (
    <GridToolbarContainer
      sx={{ my: 1, display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ pr: 1 }}>
        <GridToolbarColumnsButton
          sx={{
            py: 1,
            px: 1,
            mr: 2,
            border: "1px solid",
            "&:hover": { bgcolor: "#205081", color: "white" },
          }}
        />
        <GridToolbarFilterButton
          sx={{
            py: 1,
            px: 1,
            mr: 2,
            border: "1px solid",
            "&:hover": { bgcolor: "#205081", color: "white" },
          }}
        />
        <GridToolbarDensitySelector
          sx={{
            py: 1,
            px: 1,
            mr: 2,
            border: "1px solid",
            "&:hover": { bgcolor: "#205081", color: "white" },
          }}
        />
        <GridToolbarExport
          sx={{
            py: 1,
            px: 1,
            mr: 2,
            border: "1px solid",
            "&:hover": { bgcolor: "#205081", color: "white" },
          }}
        />
      </Box>
      <GridToolbarQuickFilter sx={{ py: 1, px: 1, mr: 2 }} />
    </GridToolbarContainer>
  );
}

//INFO default table rowId is id, for custom row id, set rowId from component as a props.

function DataGridTableCustom(props) {
  console.log(props);
  const [pageSize, setPageSize] = useState(10);
  return (
    <DataGrid
      disableColumnMenu
      density="compact"
      showCellRightBorder={true}
      showColumnRightBorder={true}
      sx={{
        height: 400,
        Width: "100%",
        mt: 2,
        borderRadius: 0,
        border: 0,
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        "& .MuiDataGrid-row": {
          "&:nth-of-type(2n)": {
            backgroundColor: " #EBF0F4 ", //even tealcolor
            "&:hover": {
              background: " #EBF0F4 !important",
            },
          },
        },
      }}
      components={{
        NoRowsOverlay: NoRowIcon,
        Pagination: CustomPagination,
      }}
      headerHeight={55}
      disableSelectionOnClick
      disableColumnSelector
      {...props}
    />
  );
}

export default DataGridTableCustom;
