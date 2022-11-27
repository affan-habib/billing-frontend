import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectApi } from "../../../../reducers/apiSlice";

export default function Final() {
  const { orderSaved = { data: {} } } = useSelector(selectApi);

  const columns = [
    {
      cellClassName: "top-header-6",
      field: "total",
      headerClassName: "top-header-1",
      headerName: "TOTAL",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (params) => orderSaved.data.total,
      headerAlign: "center",
      align: "center",
      type: "number",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-6",
      field: "discount",
      headerName: "DISCOUNT",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) => orderSaved.data.discount,
    },
    {
      field: "advance",
      headerClassName: "top-header-1",
      cellClassName: "top-header-6",
      headerName: "Advance",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) => orderSaved.data.advance,
    },
    {
      field: "due",
      cellClassName: "top-header-6",
      headerClassName: "top-header-1",
      valueGetter: (params) => orderSaved.data.due,
      headerName: "DUE",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
  ];
  const items = [
    {
      id: 85,
      masterServiceName: "Lipid Profile",
      tariffBaseAmount: 1400,
      customerId: 121,
      facilityId: 166,
      quantity: 1,
      discount: 0,
      advance: 0,
      due: 0,
    },
  ];

  return (
    <form>
      <Box sx={{ height: 80, Width: "100%" }}>
        <DataGrid
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "EEFFEB" : "yellow",
            },
          }}
          rows={items}
          columns={columns}
          disableSelectionOnClick
          disableColumnSelector
          headerHeight={40}
          hideFooterPagination
          disableColumnMenu
          density="compact"
          showCellRightBorder={true}
          showColumnRightBorder={true}
          hideFooter
        />
      </Box>
    </form>
  );
}
