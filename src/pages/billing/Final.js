import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import "./styles/index.css";
import { useSelector } from "react-redux";
export default function Final() {
  const orderDetailList = useSelector((state) => state.cart.orderDetailList);
  let finalAmount = orderDetailList.reduce(
    (a, b) => a + b.tariffBaseAmount * b.quantityOrdered,
    0
  );

  const [discountAmount, setDiscountAmount] = React.useState(0);

  const columns = [
    {
      headerClassName: "top-header-3",
      cellClassName: "top-header-4",
      field: "totalAmount",
      headerClassName: "top-header-1",
      headerName: "TOTAL AMOUNT",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (params) => finalAmount,
      headerAlign: "center",
      align: "center",
      type: "number",
    },
    {
      headerClassName: "top-header-2",
      cellClassName: "top-header-4",
      field: "discountAmount",
      headerClassName: "top-header-1",
      headerName: "DISCOUNT",
      editable: true,
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) => discountAmount,
    },
    {
      field: "advance",
      headerClassName: "top-header-3",
      cellClassName: "top-header-4",
      headerClassName: "top-header-1",
      headerName: "ADVANCE",
      // editable: true,
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
    },
    {
      field: "due",

      cellClassName: "top-header-4",
      headerClassName: "top-header-1",
      valueGetter: (params) => finalAmount - discountAmount || 0,

      headerName: "DUE BY (AMOUNT)",
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
      discountAmount: 0,
      advance: 0,
      due: 0,
    },
  ];

  return (
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
        headerHeight={55}
        hideFooterPagination
        disableColumnMenu
        density="compact"
        showCellRightBorder={true}
        showColumnRightBorder={true}
        hideFooter
        onCellEditCommit={(params) => setDiscountAmount(params.value)}
      />
    </Box>
  );
}
