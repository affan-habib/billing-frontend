import React, { useEffect } from "react";
import {
  Box,
  Button,
  Stack,
  Dialog,
  Typography,
  Badge,
  Paper,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { addToCart } from "../../reducers/cartSlice";
import AddCustomer from "./AddCustomer";
import DeleteCustomer from "./DeleteCustomer";
import NoRowIcon from "../../components/NoRowIcon";
import CustomPagination from "../../components/Pagination";

const Customers = () => {
  const dispatch = useDispatch();
  const {
    loading,
    customers = {
      data: [],
    },
    customerDeleted = {
      data: { id: null },
    },
    customerSaved,
  } = useSelector(selectApi);
  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/customers`,
          output: "customers",
        })
      ),

    [customerDeleted.data.id, customerSaved]
  );
  const columns = [
    {
      field: "id",
      headerClassName: "top-header-1",
      
      headerName: "CODE",
      width: 70,
      align: "left",
      sortable: false,
      headerAlign: "left",
    },
    {
      field: "name",
      headerClassName: "top-header-1",
      
      headerName: "CLIENT NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      
      field: "age",
      headerName: "AGE",
      type: "number",
      minWidth: 60,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      
      field: "contactNumber",
      headerName: "CONTACT",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "left",
    },
    {
      field: "address",
      headerClassName: "top-header-1",
      
      headerName: "ADDRESS",
      flex: .5,
      headerAlign: "left",
    },
    {
      headerClassName: "top-header-1",
      
      field: "gender",
      headerName: "GENDER",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            m: 1,
            pr: 1,
            pl: 1,
            bgcolor: "primary.main",
            color: "white",
            borderRadius: 5,
            fontSize: 14,
          }}
        >
          {params.value.toUpperCase()}
        </Box>
      ),
    },

    {
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      headerClassName: "top-header-1",
      
      renderCell: (params) => <DeleteCustomer shouldDelete={params.id} />,
    },
  ];
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleadd = () => {
    let SelectedOptions = customers.data.filter(
      (el) => selectedOptions.indexOf(el.id) + 1
    );

    return SelectedOptions.forEach((el) =>
      dispatch(
        addToCart({
          ...el,
          contactNumber: 0,
          expiryDate: 0,
          vatPerUnit: 0,
          discountPerUnit: 0,
          quantityOrdered: 1,
          quantityReturned: 0,
          discountTotal: 0,
          discountReturned: 0,
          vatTotal: 0,
          vatReturned: 0,
          subtotalOrdered: 0,
          subtotalReturned: 0,
          rowTotal: 0,
          returnedBy: "string",
          returnDate: "2022-11-13T11:35:33.765Z",
        })
      )
    );
  };

  return (
    <Paper
      elevation={1}
      sx={{ pt: 2, pb: 2, width: "100%", }}
    >
      <Stack direction="row">
        <Button
          sx={{ mb: 2, ml: 2, flex: 0.0625, minWidth: "140px" }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          New Customer
        </Button>
        <Button
          sx={{ mb: 2, ml: 2, flex: 0.0625, minWidth: "160px" }}
          disabled={selectedOptions.length !== 1}
          variant="contained"
          color="warning"
          onClick={() => handleadd()}
        >
          {selectedOptions.length ? "Bill to customer" : "Select Customer"}
        </Button>
        <Dialog open={open} onClose={() => setOpen(!open)}>
          <AddCustomer setOpen={setOpen} />
        </Dialog>
      </Stack>
      <DataGrid
        sx={{ mr: 2, ml: 2, height: 400, borderRadius: 0, border: 0 }}
        getRowId={(row) => row._id}
        checkboxSelection={true}
        rows={customers.data}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        disableColumnSelector
        components={{
          NoRowsOverlay: NoRowIcon,
          Pagination: CustomPagination,
        }}
        headerHeight={55}
        disableColumnMenu
        density="compact"
        showCellRightBorder={true}
        showColumnRightBorder={true}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectedOptions(newSelectionModel);
        }}
      />
    </Paper>
  );
};

export default Customers;
