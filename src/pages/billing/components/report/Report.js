import { CloseCircleFilled, PrinterFilled } from "@ant-design/icons";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { selectApi } from "../../../../reducers/apiSlice";
import NoRowIcon from "../../../../components/NoRowIcon";
import Final from "./Final";

const Report = ({ setOpen }) => {
  const cart = useSelector((state) => state.cart);
  const { orderSaved = { data: {} } } = useSelector(selectApi);
  // console.log(orderSaved);
  // console.log({values});
  const columns = [
    {
      field: "id",
      headerClassName: "top-header-1",
      cellClassName: "top-header-6",
      headerName: "ID",
      width: 50,
      align: "center",
      sortable: false,
      headerAlign: "center",
    },
    {
      field: "masterServiceName",
      headerClassName: "top-header-1",
      cellClassName: "top-header-6",
      headerName: "SERVICE NAME",
      flex: 1,
      headerAlign: "left",
      sortable: false,
    },
    {
      headerClassName: "top-header-1",
      cellClassName: "top-header-6",
      field: "tariffBaseAmount",
      headerName: "PRICE",
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
    {
      field: "quantityOrdered",
      headerClassName: "top-header-1",
      cellClassName: "top-header-6",
      headerName: "UNIT",
      editable: true,
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
  ];

  const PrinterButton = () => {
    return (
      <IconButton
        onClick={() => window.print()}
        sx={{ position: "absolute", right: 15, top: 15, color: "#029889" }}
      >
        <PrinterFilled style={{ fontSize: "20px" }} />
      </IconButton>
    );
  };
  const CloseButton = () => {
    return (
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: 45, top: 15, color: "#029889" }}
      >
        <CloseCircleFilled style={{ fontSize: "20px" }} />
      </IconButton>
    );
  };
  return (
    <Box sx={{ width: "600px" }}>
      <Paper variant="outlined" square>
        <PrinterButton />
        <CloseButton />
        <Typography align="center" variant="h3" m={2} color="#029889">
          ABC GENERAL HOSPITAL
        </Typography>
        <Box m={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Bill From :
                </Typography>

                <Typography>{orderSaved.data?.billFrom}</Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Order Id :
                </Typography>

                <Typography>{orderSaved.data?.orderMasterId}</Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Date :
                </Typography>
                <Typography>16 Nov 2022</Typography>
              </Paper>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Patient Name :{" "}
                </Typography>

                <Typography>
                  {orderSaved.data?.patientName || "Not found"}
                </Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Age :
                </Typography>

                <Typography>
                  {orderSaved.data?.patientAge || "Not found"}
                </Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Mobile Number :
                </Typography>

                <Typography>
                  {orderSaved.data?.patientContactNo || "Not found"}
                </Typography>
              </Paper>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ width: "100%", height: 350, p: 2, pt: 0 }}>
          <DataGrid
            rows={cart.orderDetailList}
            columns={columns}
            disableSelectionOnClick
            disableColumnSelector
            components={{
              NoRowsOverlay: NoRowIcon,
            }}
            headerHeight={40}
            hideFooterPagination
            disableColumnMenu
            density="compact"
            showCellRightBorder={true}
            showColumnRightBorder={true}
            hideFooter
          />
        </Box>
        <Box p={2}>
          <Final />
          <Stack
            sx={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" color="#029889">
              Billing manager :
              <span
                style={{ fontWeight: 400, color: "black", marginLeft: "20px" }}
              >
                Affan Habib
              </span>
            </Typography>

            <Typography variant="subtitle1" color="#029889">
              Bill Status :
              <span
                style={{ fontWeight: 300, color: "black", marginLeft: "20px" }}
              >
                {orderSaved?.data?.advance > 0 &&
                orderSaved?.data?.due < orderSaved?.data?.total
                  ? "PARTIALLY PAID"
                  : orderSaved?.data?.advance > 0 && orderSaved?.data?.due <= 0
                  ? "PAID"
                  : "NOT PAID"}
              </span>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Report;
