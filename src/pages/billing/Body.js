import * as React from "react";
import Box from "@mui/material/Box";
import DataGrid from "../../components/DataGrid";
import RemoveItem from "./actions/RemoveItem";
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
      headerName: "CODE",
      width: 70,
      align: "left",

      headerAlign: "left",
    },
    {
      field: "serviceName",
      headerName: "SERVICE NAME",
      flex: 1,
      headerAlign: "left",

      editable: true,
    },
    {
      field: "basePrice",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "right",

      align: "right",
      editable: true,
    },
    {
      field: "quantityOrdered",
      headerName: "UNIT",
      type: "number",
      editable: true,
      minWidth: 120,
      headerAlign: "right",

      align: "right",
    },
    {
      field: "discountPerUnit",
      headerName: "DISCOUNT",
      type: "number",
      minWidth: 120,
      headerAlign: "right",

      align: "right",
      editable: true,
    },
    {
      field: "finalPrice",
      headerName: "AMOUNT",

      align: "right",
      minWidth: 120,
      valueGetter: (params) =>
        params.row.quantityOrdered * params.row.basePrice -
        params.row.discountPerUnit,
      headerAlign: "right",
      type: "number",
    },
    {
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
          rows={rows}
          columns={columns}
          hideFooter
          onCellEditCommit={(params) => dispatch(editCellValue(params))}
        />
      </Paper>
    </Box>
  );
}
