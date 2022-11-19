import React, { useEffect } from "react";
import { Box, Button, Stack, Dialog } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../../reducers/apiSlice";
import CustomNoRowsOverlay from "../CustomNoRowsOverlay";
import { addToCart } from "../../../../reducers/cartSlice";
import AddProduct from "./AddCustomer";
import DeleteCustomer from "./DeleteCustomer";

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
      headerName: "CUSTOMER NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "age",
      headerClassName: "top-header-1",
      headerName: "AGE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      field: "contactNumber",
      headerClassName: "top-header-1",
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
      headerClassName: "top-header-1",
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
      cellClassName: "top-header-2",
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
    <Box sx={{ height: 400, mt: 2, width: "100%" }}>
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
          disabled={selectedOptions.length == 0}
          variant="contained"
          color="warning"
          onClick={() => handleadd()}
        >
          {selectedOptions.length ? "Add to New bill" : "Select services"}
        </Button>
        <Dialog open={open} onClose={() => setOpen(!open)}>
          <AddProduct setOpen={setOpen} />
        </Dialog>
      </Stack>
      <DataGrid
        getRowId={(row) => row._id}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "EEFFEB" : "yellow",
          },
        }}
        checkboxSelection={true}
        rows={customers.data}
        columns={columns}
        // pageSize={5}
        disableSelectionOnClick
        disableColumnSelector
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        // experimentalFeatures={{ newEditingApi: true }}
        headerHeight={55}
        hideFooterPagination
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
