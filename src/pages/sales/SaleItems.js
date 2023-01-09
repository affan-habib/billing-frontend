import { Info } from "@mui/icons-material";
import { Dialog, IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import DataGrid from "../../components/DataGrid";

const SaleItems = ({ itemList }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton color="primary" onClick={() => setOpen(!open)}>
        <Info />
      </IconButton>
      <Dialog maxWidth="lg" open={open} onClose={() => setOpen(!open)}>
        <ItemList setOpen={setOpen} itemList={itemList} />
      </Dialog>
    </div>
  );
};
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
    editable: true,
  },
  {
    field: "basePrice",
    headerName: "PRICE",
    type: "number",
    minWidth: 60,
    headerAlign: "right",
    align: "right",
    editable: true,
  },
  {
    field: "quantityOrdered",
    headerName: "UNIT",
    type: "number",
    editable: true,
    minWidth: 60,
    headerAlign: "right",
    align: "right",
  },
  {
    field: "discountPerUnit",
    headerName: "DISCOUNT",
    type: "number",
    minWidth: 60,
    headerAlign: "right",
    align: "right",
    editable: true,
  },
  {
    field: "finalPrice",
    headerName: "AMOUNT",
    align: "right",
    minWidth: 60,
    headerAlign: "right",
    type: "number",
    valueGetter: (params) =>
      params.row.quantityOrdered * params.row.basePrice -
      params.row.discountPerUnit,
  },
];
const ItemList = ({ itemList }) => {
  return (
    <Paper square elevation={1} sx={{ width: "800px", p: 2 }}>
      <DataGrid rows={itemList} columns={columns} hideFooter />
    </Paper>
  );
};

export default SaleItems;
