import { Box, Button, Dialog, Stack } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { addToCart } from "../../../reducers/cartSlice";
import NoRowIcon from "../../../components/NoRowIcon";
import AddProduct from "../../products/AddProduct";
import CustomPagination from "../../../components/Pagination";
import { AddCircle } from "@mui/icons-material";

const ServiceList = () => {
  const dispatch = useDispatch();
  const { orderDetailList } = useSelector((state) => state.cart);
  let alreadySelectedOptions = orderDetailList.map((el) => el.id);

  const [open, setOpen] = useState(false);
  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);
  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: "api/products",
          output: "items",
        })
      ),
    []
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
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      renderCell: (params) => (
        <Button
          startIcon={
            alreadySelectedOptions.includes(params.row.id) || (
              <AddCircle style={{ fontSize: 16 }} />
            )
          }
          variant="contained"
          sx={{ height: 20, width: 70, borderRadius: 10 }}
          size="small"
          color="info"
          onClick={() =>
            dispatch(
              addToCart({
                ...params.row,
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
          }
        >
          {alreadySelectedOptions.includes(params.row.id) ? "ADDED" : "ADD"}
        </Button>
      ),
    },
  ];

  function Toolbar() {
    return (
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", pt: 2, bgcolor: "#e2ffff" }}
      >
        <GridToolbarQuickFilter sx={{ py: 1, px: 1, mr: 2 }} />
        <Stack justifyContent="space-between" direction="row">
          <Button
            sx={{ mb: 2, mr: 2 }}
            disabled={selectedOptions.length == 0}
            variant="contained"
            color="info"
            onClick={() => handleAddToCart()}
          >
            {selectedOptions.length ? "Add services" : "Select services"}
          </Button>
          <Button
            sx={{ mb: 2, mr: 2 }}
            color="info"
            variant="contained"
            onClick={() => setOpen(!open)}
          >
            Add New Service
          </Button>
        </Stack>
      </Stack>
    );
  }
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const handleAddToCart = () => {
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
    <Box sx={{ height: 400, p: 2, width: "100%" }}>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <AddProduct setOpen={setOpen} />
      </Dialog>
      <DataGrid
        // checkboxSelection={true}
        rows={items.data}
        columns={columns}
        isRowSelectable={(id) =>
          alreadySelectedOptions.includes(id)
        }
        disableSelectionOnClick
        disableColumnSelector
        headerHeight={55}
        hideFooterPagination
        hideFooter
        disableColumnMenu
        checkboxSelection={true}
        density="compact"
        showCellRightBorder={true}
        showColumnRightBorder={true}
        onSelectionModelChange={(selectedOptions) => {
          setSelectedOptions(selectedOptions);
        }}
        components={{
          Toolbar: Toolbar,
          NoRowsOverlay: NoRowIcon,
          Pagination: CustomPagination,
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
};

export default ServiceList;
