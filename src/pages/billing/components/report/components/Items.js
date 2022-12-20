import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { selectApi } from "../../../../../reducers/apiSlice";
import { useSelector } from "react-redux";

export default function Items() {
  console.log("rendering report");
  const { orderSaved = { data: { itemList: [] } } } = useSelector(selectApi);
  return (
    <>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ minHeight: 300 }}
      >
        <Table sx={{ Width: 550 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell size="small" sx={{ bgcolor: "#f0f0f199" }}>
                SERVICE NAME
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#f0f0f199" }}
                align="right"
              >
                BASE PRICE
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#f0f0f199" }}
                align="right"
              >
                UNIT
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#f0f0f199" }}
                align="right"
              >
                VAT
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#f0f0f199" }}
                align="right"
              >
                PRICE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderSaved.data.itemList.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" className="print-2">
                  {row.serviceName}
                </TableCell>
                <TableCell align="right" className="print-3">
                  {row.basePrice}
                </TableCell>
                <TableCell align="right" className="print-2">
                  {row.quantityOrdered}
                </TableCell>
                <TableCell align="right" className="print-3">
                  0
                </TableCell>
                <TableCell align="right" className="print-2">
                  0
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
        <Table sx={{ Width: 550 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: "#f0f0f199" }} align="center">
                TOTAL AMOUNT
              </TableCell>
              <TableCell sx={{ bgcolor: "#f0f0f199" }} align="center">
                DISCOUNT
              </TableCell>
              <TableCell sx={{ bgcolor: "#f0f0f199" }} align="center">
                ADVANCE
              </TableCell>
              <TableCell sx={{ bgcolor: "#f0f0f199" }} align="center">
                DUE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" className="print-2">
                {orderSaved?.data?.itemTotal || 0}
              </TableCell>
              <TableCell align="center" className="print-3 ">
                {orderSaved?.data?.discountAmount || 0}
              </TableCell>
              <TableCell align="center" className="print-2">
                {orderSaved?.data?.paidAmount || 0}
              </TableCell>
              <TableCell align="center" className="print-3">
                {orderSaved?.data?.itemTotal -
                  orderSaved?.data?.discountAmount -
                  orderSaved?.data?.paidAmount || 0}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
