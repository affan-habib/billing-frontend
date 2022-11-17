import { useEffect, useState } from "react";
import { Box, Dialog, Grid, Paper } from "@mui/material";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
import Header from "./Header";
import Final from "./Final";
import BottomSubmit from "./actions/bottomSubmit/BottomSubmit";
import { getSchema, validator } from "./Schema";
import "./styles/index.css";
import TopHeader from "./components/TopHeader";
import Body from "./Body";
import Report from "./report/Report";
const Billing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <Report setOpen={setOpen} />
      </Dialog>

      <Formik
        initialValues={getSchema({})}
        validationSchema={validator}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            callApi({
              operationId: "api/v1/order-detail/save",
              output: "orderDetails",
              parameters: {
                method: "POST",
                body: JSON.stringify({ ...values, ...cart }),
              },
            })
          );
          setOpen(!open);
        }}
      >
        {(props) => {
          return (
            <Box>
              <TopHeader {...props} />
              <Header {...props} />
              <Paper
                elevation={1}
                sx={{ p: 2, mt: 2, pt: 0.5, background: "#FFFDF8" }}
                square
              >
                <Body />
              </Paper>
              <Paper
                elevation={1}
                sx={{ p: 2, mt: 2, background: "#F5FFFA" }}
                square
              >
                <Grid container spacing={2}>
                  <Grid item md={9}>
                    <Final />
                  </Grid>
                  <Grid item md={3}>
                    <BottomSubmit {...props} />
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default Billing;
