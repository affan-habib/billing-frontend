import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import RemoveItem from "./actions/RemoveItem";
import NoRowIcon from "../../components/NoRowIcon";
import { useSelector } from "react-redux";
import AddItem from "./actions/AddItem";
export default function Body() {
  const rows = useSelector((state) => state.cart.orderDetailList);
  const columns = [
    {
      field: "id",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerName: "ID",
      width: 50,
      align: "center",
      sortable: false,
      headerAlign: "center",
    },
    {
      field: "serviceName",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerName: "SERVICE NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "basePrice",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      field: "quantityOrdered",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerName: "UNIT",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      field: "discountAmount",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerName: "DISCOUNT",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "finalPrice",
      headerName: "AMOUNT",
      sortable: false,
      align: "center",
      minWidth: 120,
      valueGetter: (params) =>
        params.row.quantityOrdered * params.row.basePrice,
      headerAlign: "center",
      type: "number",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      renderCell: (params) => <RemoveItem shouldDelete={params.id} />,
    },
  ];

  return (
    <Box>
      <AddItem />
      <DataGrid
        sx={{ height: 250, Width: "100%", mt: 2 }}
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
      />
    </Box>
  );
}
