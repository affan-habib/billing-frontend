import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { selectApi } from "../../../../reducers/apiSlice";
import { useSelector } from "react-redux";

export default function Items() {
  console.log("rendering report");
  const { orderSaved = { data: { orderDetailList: [] } } } =
    useSelector(selectApi);
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
              <TableCell
                size="small"
                sx={{ bgcolor: "#029889", color: "white" }}
              >
                SERVICE NAME
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#029889", color: "white" }}
                align="right"
              >
                BASE PRICE
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#029889", color: "white" }}
                align="right"
              >
                UNIT
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#029889", color: "white" }}
                align="right"
              >
                VAT
              </TableCell>
              <TableCell
                size="small"
                sx={{ bgcolor: "#029889", color: "white" }}
                align="right"
              >
                PRICE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderSaved.data.orderDetailList.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.masterServiceName}
                </TableCell>
                <TableCell align="right">{row.tariffBaseAmount}</TableCell>
                <TableCell align="right">{row.quantityOrdered}</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} variant="outlined" sx={{ mt: 2 }}>
        <Table sx={{ Width: 550 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ bgcolor: "#029889", color: "white" }}
                align="center"
              >
                TOTAL AMOUNT
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#029889", color: "white" }}
                align="center"
              >
                DISCOUNT
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#029889", color: "white" }}
                align="center"
              >
                ADVANCE
              </TableCell>
              <TableCell
                sx={{ bgcolor: "#029889", color: "white" }}
                align="center"
              >
                DUE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                {orderSaved?.data?.total || 0}
              </TableCell>
              <TableCell align="center">
                {orderSaved?.data?.discount || 0}
              </TableCell>
              <TableCell align="center">
                {orderSaved?.data?.advance || 0}
              </TableCell>
              <TableCell align="center">{orderSaved?.data?.due || 0}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
