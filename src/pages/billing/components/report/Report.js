import { CloseCircleFilled, PrinterFilled } from "@ant-design/icons";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectApi } from "../../../../reducers/apiSlice";
import Header from "./components/Header";
import Items from "./components/Items";
import ReactToPrint from "react-to-print";
import moment from "moment";

const Report = ({ setOpen }) => {
  let componentRef = React.useRef();

  const { orderSaved = { data: {} } } = useSelector(selectApi);
  console.log("rendering report");
  const CloseButton = () => {
    return (
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: 45, top: 15 }}
      >
        <CloseCircleFilled style={{ fontSize: "20px" }} />
      </IconButton>
    );
  };

  return (
    <Box>
      <Paper variant="outlined" sx={{ width: "595px" }} square>
        <ReactToPrint
          trigger={() => (
            <IconButton
              color="info"
              sx={{
                position: "absolute",
                right: 15,
                top: 15,
              }}
            >
              <PrinterFilled style={{ fontSize: "20px" }} />
            </IconButton>
          )}
          content={() => componentRef}
        />
        <CloseButton />
        <Box sx={{ m: 4 }} ref={(el) => (componentRef = el)}>
          <Header />
          <Box m={2}>
            <Stack direction="row" justifyContent="space-between">
              <Stack sx={{ flex: 1 }}>
                <Paper variant="outlined" square sx={{ p: 0.5 }}>
                  <Typography variant="subtitle1" color="info.main">
                    Bill No :
                  </Typography>

                  <Typography>1234</Typography>
                </Paper>
              </Stack>
              <Stack sx={{ flex: 1 }}>
                <Paper variant="outlined" square sx={{ p: 0.5 }}>
                  <Typography variant="subtitle1" color="info.main">
                    Payment Method :
                  </Typography>

                  <Typography>Cash</Typography>
                </Paper>
              </Stack>
              <Stack sx={{ flex: 1 }}>
                <Paper variant="outlined" square sx={{ p: 0.5 }}>
                  <Typography variant="subtitle1" color="info.main">
                    Date :
                  </Typography>
                  <Typography>
                    {moment(new Date()).format("DD/MM/YYYY")}
                  </Typography>
                </Paper>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Stack sx={{ flex: 1 }}>
                <Paper variant="outlined" square sx={{ p: 0.5 }}>
                  <Typography variant="subtitle1" color="info.main">
                    Patient Name :
                  </Typography>
                  <Typography>
                    {orderSaved?.customer?.name || "Not found"}
                  </Typography>
                </Paper>
              </Stack>
              <Stack sx={{ flex: 1 }}>
                <Paper variant="outlined" square sx={{ p: 0.5 }}>
                  <Typography variant="subtitle1" color="info.main">
                    Age :
                  </Typography>
                  <Typography>
                    {orderSaved?.customer?.age || "Not found"}
                  </Typography>
                </Paper>
              </Stack>
              <Stack sx={{ flex: 1 }}>
                <Paper variant="outlined" square sx={{ p: 0.5 }}>
                  <Typography variant="subtitle1" color="info.main">
                    Mobile Number :
                  </Typography>
                  <Typography>
                    {orderSaved?.customer?.contactNumber || "Not found"}
                  </Typography>
                </Paper>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ p: 2, pt: 0 }}>
            <Items />
          </Box>
          <Box p={2}>
            <Stack
              sx={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="subtitle1" color="info">
                Billing manager :
                <span
                  style={{
                    fontWeight: 400,
                    color: "black",
                    marginLeft: "20px",
                  }}
                >
                  Affan Habib
                </span>
              </Typography>

              <Typography variant="subtitle1" color="info">
                Bill Status :
                <span
                  style={{
                    fontWeight: 300,
                    color: "black",
                    marginLeft: "20px",
                  }}
                >
                  {orderSaved?.data?.advance > 0 &&
                  orderSaved?.data?.due < orderSaved?.data?.total
                    ? "PARTIALLY PAID"
                    : orderSaved?.data?.advance > 0 &&
                      orderSaved?.data?.due <= 0
                    ? "PAID"
                    : "DUE"}
                </span>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Report;
