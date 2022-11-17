import { CloseCircleFilled, PrinterFilled } from "@ant-design/icons";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import CustomNoRowsOverlay from "../components/CustomNoRowsOverlay";

const Report = ({ setOpen }) => {
  const cart = useSelector((state) => state.cart);

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
      headerClassName: "top-header-1",
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
      headerClassName: "top-header-1",
      headerName: "UNIT",
      editable: true,
      type: "number",
      minWidth: 120,
      headerAlign: "center",
      sortable: false,
      align: "center",
    },
  ];
  const processRowUpdate = React.useCallback(async (newRow) => {
    console.log(newRow);
  }, []);

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.log(error);
  }, []);
  const PrinterButton = () => {
    return (
      <IconButton
        onClick={() => setOpen(false)}
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

                <Typography>OPD</Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Bill Number :
                </Typography>

                <Typography>0179898444</Typography>
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

                <Typography>Md. Jabir Ahmed</Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Age :{" "}
                </Typography>

                <Typography>30</Typography>
              </Paper>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Paper variant="outlined" square sx={{ p: 0.5 }}>
                <Typography variant="subtitle1" color="#029889">
                  Mobile Number :
                </Typography>

                <Typography>0179898444</Typography>
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
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
            headerHeight={55}
            hideFooterPagination
            disableColumnMenu
            density="compact"
            showCellRightBorder={true}
            showColumnRightBorder={true}
            hideFooter
            processRowUpdate={processRowUpdate}
            onProcessRowUpdateError={handleProcessRowUpdateError}
          />
        </Box>
        <Box p={2}>
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
              Bill Status :{" "}
              <span
                style={{ fontWeight: 300, color: "black", marginLeft: "20px" }}
              >
                Paid
              </span>
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Report;
