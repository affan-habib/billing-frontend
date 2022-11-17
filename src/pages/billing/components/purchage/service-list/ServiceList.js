import React, { useEffect } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import CustomNoRowsOverlay from "../CustomNoRowsOverlay";
import { addToCart } from "../../reducers/cartSlice";

const ServiceList = ({ setOpen }) => {
  const dispatch = useDispatch();
  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);
  useEffect(() => {
    setTimeout(
      () =>
        dispatch(
          callApi({
            operationId: `api/v1/service-master/items`,
            output: "items",
          })
        ),
      1000
    );
  }, []);
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
      field: "masterServiceName",
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
      field: "tariffBaseAmount",
      headerClassName: "top-header-1",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
  ];
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const handleadd = () => {
    let SelectedOptions = items.data.filter(
      (el) => selectedOptions.indexOf(el.id) + 1
    );

    return SelectedOptions.forEach((el) =>
      dispatch(
        addToCart({
          ...el,
          discountAmount: 0,
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
      <Stack justifyContent="space-between" alignItems="flex-start">
        <Button
          sx={{ mb: 2, ml: 2, bgcolor: "#029889" }}
          disabled={selectedOptions.length == 0}
          variant="contained"
          onClick={() => handleadd()}
        >
          {selectedOptions.length ? "Add services" : "Select services"}
        </Button>
      </Stack>
      <DataGrid
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "EEFFEB" : "yellow",
          },
        }}
        checkboxSelection={true}
        rows={items.data}
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

export default ServiceList;
