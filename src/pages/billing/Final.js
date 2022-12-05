import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "../../reducers/cartSlice";
import { Grid } from "@mui/material";
export default function Final() {
  const { orderDetailList, discount, advance } = useSelector(
    (state) => state.cart
  );
  let finalAmount = orderDetailList.reduce(
    (a, b) => a + b.tariffBaseAmount * b.quantityOrdered,
    0
  );

  useEffect(() => {
    dispatch(
      calculateTotal({
        field: "total",
        value: finalAmount - discount - advance,
      })
    );
  }, [finalAmount, discount, advance]);

  const dispatch = useDispatch();
  const finalAmountColumn = [
    {
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
  ];
  const discountAmountColumn = [
    {
      field: "discount",
      headerClassName: "top-header-1",
      cellClassName: "top-header-5",
      field: "discount",
      headerName: "DISCOUNT",
      editable: true,
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      valueGetter: (params) => discount,
      sortable: false,
    },
  ];
  const advanceAmountColumn = [
    {
      field: "advance",
      headerClassName: "top-header-1",
      cellClassName: "top-header-5",
      headerName: "ADVANCE",
      editable: true,
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
      sortable: false,
      valueGetter: (params) => advance,
    },
  ];
  const dueAmountColumn = [
    {
      field: "due",
      cellClassName: "top-header-4",
      headerClassName: "top-header-1",
      valueGetter: (params) => finalAmount - discount - advance || 0,
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
      id: "affan",
      discount: 0,
      advance: 0,
      due: 0,
    },
  ];

  return (
    <Box sx={{ Width: "100%" }}>
      <Grid container spacing={1}>
        <Grid item md={6} sx={{ width: "100%", height: 85 }}>
          <DataGrid
            rows={items}
            columns={discountAmountColumn}
            disableSelectionOnClick
            disableColumnSelector
            headerHeight={55}
            hideFooterPagination
            disableColumnMenu
            density="compact"
            showCellRightBorder={true}
            showColumnRightBorder={true}
            hideFooter
            onCellEditCommit={(params) => dispatch(calculateTotal(params))}
          />
        </Grid>
        <Grid item md={6}>
          <DataGrid
            rows={items}
            columns={finalAmountColumn}
            disableSelectionOnClick
            disableColumnSelector
            headerHeight={55}
            hideFooterPagination
            disableColumnMenu
            density="compact"
            showCellRightBorder={true}
            showColumnRightBorder={true}
            hideFooter
            onCellEditCommit={(params) => dispatch(calculateTotal(params))}
          />
        </Grid>
        <Grid item md={6}>
          <DataGrid
            rows={items}
            columns={advanceAmountColumn}
            disableSelectionOnClick
            disableColumnSelector
            headerHeight={55}
            hideFooterPagination
            disableColumnMenu
            density="compact"
            showCellRightBorder={true}
            showColumnRightBorder={true}
            hideFooter
            onCellEditCommit={(params) => dispatch(calculateTotal(params))}
          />
        </Grid>
        <Grid item md={6} sx={{ width: "100%", height: 84 }}>
          <DataGrid
            rows={items}
            columns={dueAmountColumn}
            disableSelectionOnClick
            disableColumnSelector
            headerHeight={55}
            hideFooterPagination
            disableColumnMenu
            density="compact"
            showCellRightBorder={true}
            showColumnRightBorder={true}
            hideFooter
            onCellEditCommit={(params) => dispatch(calculateTotal(params))}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
