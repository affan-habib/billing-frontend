import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import React from "react";

const ServiceDetails = (props) => {
  const columns = [
    {
      headerClassName: "top-header-3",
      cellClassName: "top-header-3",
      field: "masterServiceName",
      headerClassName: "top-header-1",
      headerName: "TOTAL AMOUNT",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      headerAlign: "Left",
    },
    {
      headerClassName: "top-header-2",
      cellClassName: "top-header-2",
      field: "discountAmount",
      headerClassName: "top-header-1",
      headerName: "DISCOUNT",
      editable: true,
      flex: 1,
      headerAlign: "Left",
      sortable: false,
    },
  ];
  const item = {
    id: 85,
    masterServiceName: "Lipid Profile",
    tariffBaseAmount: 1400,
    customerId: 121,
    facilityId: 166,
    quantity: 1,
    discountAmount: 0,
    advance: 0,
    due: 0,
    isDiscountable: false,
  };

  let objKeyValue = Object.entries(item);
  console.log({ objKeyValue });
  return (
    <Grid container spacing={2} sx={{ maxWidth: 800, p: 2, height: "100%" }}>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="h4"
          align="center"
          sx={{ display: "block" }}
          color="info.main"
        >
          Serum Creatinine
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TableContainer component={Paper} variant="outlined">
          <Table sx={{ maxWidth: 800 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>Service Name</TableCell>
                <TableCell align="Left">{item.masterServiceName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>Price</TableCell>
                <TableCell align="Left">{item.tariffBaseAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>
                  Is Discountable
                </TableCell>
                <TableCell align="Left">
                  {item.isDiscountable ? "Yes" : "No"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>Tax % </TableCell>
                <TableCell align="Left">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>Vat</TableCell>
                <TableCell align="Left">0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>Tarrif Id</TableCell>
                <TableCell align="Left">4444</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: '#212F3C' }}>
                  Tarrif last updated
                </TableCell>
                <TableCell align="Left">23-05-2021</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button sx={{ mt: 2 }} color="info" variant="contained" fullWidth type="submit">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default ServiceDetails;
