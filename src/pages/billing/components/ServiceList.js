import { PlusOutlined } from "@ant-design/icons";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { addToCart } from "../../../reducers/cartSlice";
import NoRowIcon from "../../../components/NoRowIcon";

const ServiceList = ({ setOpen }) => {
  const dispatch = useDispatch();
  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);
  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: "api/v1/service-master/items",
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
      headerName: "ID",
      width: 50,
      align: "center",
      sortable: false,
      headerAlign: "center",
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
      headerClassName: "top-header-1",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      renderCell: (params) => (
        <IconButton
          color="success"
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
          <PlusOutlined />
        </IconButton>
      ),
    },
  ];

  function Toolbar() {
    return (
      <Stack direction="row" sx={{ justifyContent: "space-between", pt: 2 }}>
        <GridToolbarQuickFilter sx={{ py: 1, px: 1, mr: 2 }} />
        <Stack justifyContent="space-between" direction="row">
          <Button
            sx={{ mb: 2, mr: 2, bgcolor: "#dfebf7" }}
            disabled={selectedOptions.length == 0}
            variant="contained"
            onClick={() => handleAddToCart()}
          >
            {selectedOptions.length ? "Add services" : "Select services"}
          </Button>
          <Button sx={{ mb: 2, mr: 2 }} variant="contained">
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
    <Box sx={{ height: 400, p: 2, mt: 2, width: "100%" }}>
      <DataGrid
        // checkboxSelection={true}
        rows={items.data}
        columns={columns}
        disableSelectionOnClick
        disableColumnSelector
        headerHeight={55}
        hideFooterPagination
        disableColumnMenu
        density="compact"
        showCellRightBorder={true}
        showColumnRightBorder={true}
        onSelectionModelChange={(selectedOptions) => {
          setSelectedOptions(selectedOptions);
        }}
        components={{ Toolbar: Toolbar, NoRowsOverlay: NoRowIcon }}
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
