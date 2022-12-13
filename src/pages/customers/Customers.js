import React, { useEffect } from "react";
import { Box, Button, Stack, Dialog } from "@mui/material";
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
    customers = {
      data: [],
    },
    customerDeleted = {
      id: null,
    },
    customerSaved,
  } = useSelector(selectApi);
  useEffect(() => {
    setTimeout(
      () =>
        dispatch(
          callApi({
            operationId: `api/customers`,
            output: "customers",
          })
        ),
      1000
    );
  }, [customerDeleted.id, customerSaved]);
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
      headerName: "CLIENT NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "age",
      headerName: "AGE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "contactNumber",
      headerName: "CONTACT",
      type: "text",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "gender",
      headerName: "GENDER",
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
      cellClassName: "top-header-3",
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
    <Box sx={{ height: 475, mt: 2, width: "100%" }}>
      <Stack direction="row">
        <Button
          sx={{ mb: 2, ml: 2, width: 200 }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Add New Customer
        </Button>
        <Button
          sx={{ mb: 2, ml: 2, width: 200 }}
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
    </Box>
  );
};

export default Customers;
