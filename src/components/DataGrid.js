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

function DataGridTableCustom({
  rows,
  columns,
  isToolbarAvailable = true,
  sx,
  getRowId,
  onCellEditCommit,
  hideFooter,
  components,
  checkboxSelection,
}) {
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
          color: "error.main",
        },
        "& .MuiDataGrid-columnHeader": {
          color: "white",
          bgcolor: "primary.main",
          fontSize: "0.9rem",
        },
        "& .MuiDataGrid-row": {
          fontSize: "0.9rem",
          "&:nth-of-type(2n)": {
            backgroundColor: " #EBF0F4 ", //even tealcolor
            "&:hover": {
              background: " #EBF0F4 !important",
            },
          },
        },
        "& .MuiDataGrid-sortIcon": {
          color: "white",
        },
        ...sx,
      }}
      components={{
        NoRowsOverlay: NoRowIcon,
        Pagination: CustomPagination,
        ...components,
      }}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 100 },
        },
      }}
      checkboxSelection={checkboxSelection}
      headerHeight={55}
      disableSelectionOnClick
      disableColumnSelector
      rows={rows}
      columns={columns}
      getRowId={getRowId}
      onCellEditCommit={onCellEditCommit}
      hideFooter={hideFooter}
      pageSize={10}
    />
  );
}

export default DataGridTableCustom;
