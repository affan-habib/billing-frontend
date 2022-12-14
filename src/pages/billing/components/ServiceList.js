import { Box, Button, Dialog, Stack } from "@mui/material";
import DataGrid from "../../../components/DataGrid";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";
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
  const { itemList } = useSelector((state) => state.cart);
  let alreadySelectedOptions = itemList.map((el) => el.id);

  const [open, setOpen] = useState(false);
  const {
    loading,
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
      
    },
    {
      
      field: "basePrice",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      
      align: "center",
    },
    {
      
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
          onClick={() => dispatch(addToCart(params.row))}
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
            onClick={() => handleAddToCart()}
          >
            {selectedOptions.length ? "Add services" : "Select Items"}
          </Button>
          <Button
            sx={{ mb: 2, mr: 2 }}
            variant="contained"
            onClick={() => setOpen(!open)}
          >
            Add Item
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

    return SelectedOptions.forEach((el) => dispatch(addToCart(el)));
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
        isRowSelectable={(id) => alreadySelectedOptions.includes(id)}
        hideFooter
        checkboxSelection={true}
        onSelectionModelChange={(selectedOptions) => {
          setSelectedOptions(selectedOptions);
        }}
        components={{
          Toolbar: Toolbar,
        }}
      />
    </Box>
  );
};

export default ServiceList;
