import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import "./styles/index.css";
import RemoveItem from "./actions/RemoveItem";
import CustomNoRowsOverlay from "./components/CustomNoRowsOverlay";

export default function Body({ values }) {
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
    {
      field: "quantity",
      headerClassName: "top-header-1",
      cellClassName: "top-header-3",
      headerClassName: "top-header-1",
      headerName: "UNIT",
      editable: true,
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
      // renderEditCell: (params) => <CustomEditComponent {...params} />,
    },
    {
      field: "discountAmount",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      headerClassName: "top-header-1",
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
      field: "finalPrice",
      headerClassName: "top-header-1",
      headerName: "AMOUNT",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      align: "center",
      minWidth: 120,
      valueGetter: (params) =>
        params.row.quantity * params.row.tariffBaseAmount,
      headerAlign: "center",
      type: "number",
    },
    {
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      headerClassName: "top-header-1",
      cellClassName: "top-header-2",
      renderCell: (params) => (
        <RemoveItem values={values.orderDetailList} shouldDelete={params.id} />
      ),
    },
  ];
  const [rowId, setRowId] = React.useState(null);
  const processRowUpdate = React.useCallback(async (newRow) => {
    console.log(newRow);
  }, []);

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.log(error);
  }, []);
  return (
    <Box sx={{ height: 220, Width: "100%"}}>
      <DataGrid
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "EEFFEB" : "yellow",
          },
        }}
        // checkboxSelection={true}
        rows={values?.orderDetailList}
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
        hideFooter
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
      {/* <button onClick={handleClickButton}>click</button> */}
    </Box>
  );
}
