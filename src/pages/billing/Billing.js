import { Box, Dialog, Grid, Paper } from "@mui/material";
import { Formik } from "formik";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { callApi } from "../../reducers/apiSlice";
import BottomSubmit from "./actions/BottomSubmit";
import Body from "./Body";
import TopHeader from "./actions/TopHeader";
import Final from "./Final";
import Header from "./Header";
import Report from "./components/report/Report";
import { getSchema, validator } from "./Schema";
import "./style.css";
import { callApi } from "../../reducers/apiSlice";
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
              operationId: ("api/orders"),
              output: "orderSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema({ ...values, ...cart })),
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
                    <Final {...props} />
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
