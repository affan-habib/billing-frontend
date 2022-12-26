import React, { Suspense, useEffect } from "react";
import { Box, Paper, Stack } from "@mui/material";
import DataGrid from "../../components/DataGrid";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import DeleteSale from "./DeleteSale";
import NoRowIcon from "../../components/NoRowIcon";
import moment from "moment/moment";
import CustomPagination from "../../components/Pagination";
import Loader from "../../components/Loader";

const Sales = () => {
  const dispatch = useDispatch();
  const {
    orders = {
      data: [],
    },
    saleDeleted,
    orderSaved,
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/orders`,
        output: "orders",
      })
    );
  }, [saleDeleted, orderSaved]);

  const filtered = orders?.data?.filter(
    (el) => el.invoiceId != saleDeleted?.data?.invoiceId
  );

  const columns = [
    {
      field: "invoiceId",
      headerName: "CODE",
      width: 70,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "name",
      headerName: "SALE",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "gender",
      headerName: "GENDER",
      flex: 0.5,
      headerAlign: "left",
    },
    {
      field: "age",
      headerName: "AGE",
      flex: 0.5,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "contactNumber",
      headerName: "CONTACT",
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "itemTotal",
      headerName: "TOTAL",
      minWidth: 120,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "discountAmount",
      headerName: "DISCOUNT",
      type: "number",
      minWidth: 120,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "paidAmount",
      headerName: "PAID",
      minWidth: 120,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "createdAt",
      headerName: "ORDER CREATED",
      flex: 1,
      headerAlign: "left",
      align: "left",
      renderCell: (params) =>
        moment(params.value).format("DD-MM-YYYYY HH:mm:ss"),
    },
    {
      field: "updatedAt",
      headerName: "ORDER UPDATED",
      flex: 1,
      headerAlign: "left",
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
      renderCell: (params) => <DeleteSale shouldDelete={params.id} />,
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
    <Paper elevation={1} sx={{ p: 2 }}>
      <Suspense fallback={<Loader />}>
        <DataGrid
          getRowId={(row) => row?._id}
          checkboxSelection={true}
          rows={orders.data}
          columns={columns}
          components={{
            Toolbar: Toolbar,
          }}
        />
      </Suspense>
    </Paper>
  );
};

export default Sales;
