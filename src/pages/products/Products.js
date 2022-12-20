import React, { useEffect } from "react";
import { Box, Button, Stack, Dialog, Paper } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { addToCart } from "../../reducers/cartSlice";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import NoRowIcon from "../../components/NoRowIcon";
import CustomPagination from "../../components/Pagination";

const Products = () => {
  const dispatch = useDispatch();
  const {
    items = {
      data: [],
    },
    itemDeleted = {
      data: {
        id: null,
      },
    },
    itemSaved,
  } = useSelector(selectApi);
  
  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/products`,
          output: "items",
        })
      ),
    [itemDeleted.data.id, itemSaved]
  );
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
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "discountPerUnit",
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
      field: "vatPerUnit",
      headerName: "VAT PER UNIT",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      field: "expiryDate",
      headerName: "EXPIRY DATE",
      type: "number",
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
      renderCell: (params) => <DeleteProduct shouldDelete={params.id} />,
    },
  ];
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleadd = () => {
    let SelectedOptions = items.data.filter(
      (el) => selectedOptions.indexOf(el.id) + 1
    );

    return SelectedOptions.forEach((el) =>
      dispatch(
        addToCart({
          ...el,
          discountPerUnit: 0,
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
    <Paper elevation={1} sx={{ width: "100%", bgcolor: "#f5f9f0" }}>
      <Stack direction="row">
        <Button
          sx={{ m: 2, width: 200 }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Add Item
        </Button>
        <Button
          sx={{ m: 2, ml: 0, width: 200 }}
          disabled={selectedOptions.length == 0}
          variant="contained"
          color="warning"
          onClick={() => handleadd()}
        >
          {selectedOptions.length ? "Add to New bill" : "Select Items"}
        </Button>
        <Dialog open={open} onClose={() => setOpen(!open)}>
          <AddProduct setOpen={setOpen} />
        </Dialog>
      </Stack>
      <DataGrid
        sx={{ height: 400 }}
        getRowId={(row) => row._id}
        checkboxSelection={true}
        rows={items.data}
        columns={columns}
        // pageSize={5}
        disableSelectionOnClick
        disableColumnSelector
        components={{
          NoRowsOverlay: NoRowIcon,
          Pagination: CustomPagination,
        }}
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
    </Paper>
  );
};

export default Products;
