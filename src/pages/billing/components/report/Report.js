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

  const Text = ({ children }) => {
    return <Typography sx={{ ml: 1, fontWeight: 500 }}>{children}</Typography>;
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
        <Box sx={{ m: 2 }} ref={(el) => (componentRef = el)}>
          <Header />
          <Box m={2}>
            <Stack direction="row">
              <Stack
                direction="row"
                alignItems="flex-start"
                flex={1}
                p={1}
                pb={0}
              >
                <Typography>Bill No :</Typography>
                <Text>1234</Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="flex-start"
                flex={1}
                p={1}
                pb={0}
              >
                <Typography>Term : </Typography>
                <Text>Cash</Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="flex-start"
                flex={1}
                p={1}
                pb={0}
              >
                <Typography>Date :</Typography>
                <Text>{moment(new Date()).format("DD/MM/YYYY")}</Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack
                direction="row"
                alignItems="flex-start"
                flex={1}
                p={1}
                pb={0}
              >
                <Typography>Name :</Typography>
                <Text>{orderSaved?.data?.name || "Not found"}</Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="flex-start"
                flex={1}
                p={1}
                pb={0}
              >
                <Typography>Age :</Typography>
                <Text>{orderSaved?.data?.age || "Not found"}</Text>
              </Stack>
              <Stack
                direction="row"
                alignItems="flex-start"
                flex={1}
                p={1}
                pb={0}
                p={1}
                pb={0}
              >
                <Typography>Contact :</Typography>
                <Text>
                  {orderSaved?.data?.contactNumber || "Not found"}
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ p: 2, pt: 0 }}>
            <Items />
          </Box>
          <Box p={2} pt={0}>
            <Stack
              sx={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography color="info">
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

              <Typography color="info">
                Bill Status :
                <span
                  style={{
                    fontWeight: 300,
                    color: "black",
                    marginLeft: "20px",
                  }}
                >
                  {orderSaved?.data?.paidAmount > 0 &&
                  orderSaved?.data?.dueAmount < orderSaved?.data?.total
                    ? "PARTIALLY PAID"
                    : orderSaved?.data?.paidAmount > 0 &&
                      orderSaved?.data?.dueAmount <= 0
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
