import React, { useEffect } from "react";
import { Box, Paper, Stack } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import DeleteCustomer from "./DeleteCustomer";
import NoRowIcon from "../../components/NoRowIcon";
import moment from "moment/moment";
import CustomPagination from "../../components/Pagination";

const Customers = () => {
  const dispatch = useDispatch();
  const {
    orders = {
      data: [],
    },
    orderDeleted = {
      data: { id: null },
    },
    orderSaved,
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/orders`,
        output: "orders",
      })
    );
  }, [orderDeleted.data.id, orderSaved]);
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
      headerName: "CUSTOMER",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      field: "gender",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerName: "GENDER",
      flex: 0.5,
      headerAlign: "left",
      sortable: false,
    },
    {
      field: "age",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerName: "AGE",
      flex: 0.5,
      headerAlign: "left",
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "contactNumber",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerName: "CONTACT",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "total",
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
      field: "due",
      headerName: "DUE",
      type: "text",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },

    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "createdAt",
      headerName: "ORDER CREATED",
      type: "text",
      flex: 1,
      headerAlign: "left",
      sortable: false,
      align: "left",
      renderCell: (params) =>
        moment(params.value).format("DD-MM-YYYYY HH:mm:ss"),
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "updatedAt",
      headerName: "ORDER UPDATED",
      type: "text",
      flex: 1,
      headerAlign: "left",
      sortable: false,
      align: "left",
      renderCell: (params) =>
        moment(params.value).format("DD-MM-YYYYY HH:mm:ss"),
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

  function Toolbar() {
    return (
      <Stack direction="row" sx={{ justifyContent: "space-between", pt: 2 }}>
        <GridToolbarQuickFilter sx={{ py: 1, px: 1, mr: 2 }} />
      </Stack>
    );
  }
  return (
    <Paper
      elevation={1}
      sx={{ height: 475, width: "100%", bgcolor: "#f5f9f0", p: 2 }}
    >
      <DataGrid
        getRowId={(row) => row._id}
        checkboxSelection={true}
        rows={orders.data}
        columns={columns}
        disableSelectionOnClick
        disableColumnSelector
        components={{
          NoRowsOverlay: NoRowIcon,
          Pagination: CustomPagination,
          Toolbar: Toolbar,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        headerHeight={55}
        // hideFooterPagination
        pageSize={10}
        disableColumnMenu
        density="compact"
        showCellRightBorder={true}
        showColumnRightBorder={true}
      />
    </Paper>
  );
};

export default Customers;
