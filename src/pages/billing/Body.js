import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import RemoveItem from "./actions/RemoveItem";
import NoRowIcon from "../../components/NoRowIcon";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "./actions/AddItem";
import { Paper, Stack } from "@mui/material";
import FindCustomer from "./actions/FindCustomer";
import { editCellValue } from "../../reducers/cartSlice";
export default function Body() {
  const rows = useSelector((state) => state.cart.itemList);
  const dispatch = useDispatch();
  const addItemRef = React.useRef();
  const columns = [
    {
      field: "id",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerName: "CODE",
      width: 70,
      align: "left",
      sortable: false,
      headerAlign: "left",
    },
    {
      field: "serviceName",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerName: "SERVICE NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
      editable: true,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "basePrice",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "right",
      sortable: false,
      align: "right",
      editable: true,
    },
    {
      field: "quantityOrdered",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerName: "UNIT",
      type: "number",
      editable: true,
      minWidth: 120,
      headerAlign: "right",
      sortable: false,
      align: "right",
    },
    {
      field: "discountPerUnit",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerName: "DISCOUNT",
      type: "number",
      minWidth: 120,
      headerAlign: "right",
      sortable: false,
      align: "right",
      editable: true,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "finalPrice",
      headerName: "AMOUNT",
      sortable: false,
      align: "right",
      minWidth: 120,
      valueGetter: (params) =>
        params.row.quantityOrdered * params.row.basePrice -
        params.row.discountPerUnit,
      headerAlign: "right",
      type: "number",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      minWidth: 70,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      renderCell: (params) => <RemoveItem shouldDelete={params.id} />,
    },
  ];

  return (
    <Box>
      <Stack direction="row">
        <FindCustomer addItemRef={addItemRef} />
        <AddItem addItemRef={addItemRef} />
      </Stack>

      <Paper square elevation={1}>
        <DataGrid
          sx={{
            bgcolor: "#f5f9f0",
            height: 250,
            Width: "100%",
            mt: 2,
            borderRadius: 0,
            border: 0,
          }}
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          disableColumnSelector
          components={{
            NoRowsOverlay: NoRowIcon,
          }}
          headerHeight={55}
          hideFooterPagination
          disableColumnMenu
          density="compact"
          showCellRightBorder={true}
          showColumnRightBorder={true}
          hideFooter
          onCellEditCommit={(params) => dispatch(editCellValue(params))}
        />
      </Paper>
    </Box>
  );
}
