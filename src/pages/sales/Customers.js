import React, { useEffect } from "react";
import { Box, Button, Stack, Dialog } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { addToCart } from "../../reducers/cartSlice";
import AddCustomer from "./AddCustomer";
import DeleteCustomer from "./DeleteCustomer";
import NoRowIcon from "../../components/NoRowIcon";

const Customers = () => {
  const dispatch = useDispatch();
  const {
    orders = {
      data: [],
    },
    orderDeleted = {
      id: null,
    },
    customerSaved,
  } = useSelector(selectApi);
  useEffect(() => {
    setTimeout(
      () =>
        dispatch(
          callApi({
            operationId: `api/orders`,
            output: "orders",
          })
        ),
      1000
    );
  }, [orderDeleted.id, customerSaved]);
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
      field: "name",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerName: "CUSTOMER NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "total",
      headerClassName: "top-header-1",
      headerName: "TOTAL",
      type: "text",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "discount",
      headerClassName: "top-header-1",
      headerName: "DISCOUNT",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "due",
      headerClassName: "top-header-1",
      headerName: "DUE",
      type: "text",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      renderCell: (params) => <DeleteCustomer shouldDelete={params.id} />,
    },
  ];
  return (
    <Box sx={{ height: 475, mt: 2, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "EEFFEB" : "yellow",
          },
        }}
        checkboxSelection={true}
        rows={orders.data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        disableColumnSelector
        components={{
          NoRowsOverlay: NoRowIcon,
        }}
        // experimentalFeatures={{ newEditingApi: true }}
        headerHeight={55}
        // hideFooterPagination
        disableColumnMenu
        density="compact"
        showCellRightBorder={true}
        showColumnRightBorder={true}
      />
    </Box>
  );
};

export default Customers;
