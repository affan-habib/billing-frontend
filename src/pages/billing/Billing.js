import React, { Suspense, useState } from "react";
import Loader from "../../components/Loader";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Box, Dialog, Grid, Paper } from "@mui/material";
import Customer from "./Customer";
import Body from "./Body";
import Sidebar from "./Sidebar";
import SubmitBill from "./actions/SubmitBill";
import { getSchema, validator } from "./Schema";
import { callApi } from "../../reducers/apiSlice";
import { clearCart } from "../../reducers/cartSlice";
const Report = React.lazy(() => import("./components/report/Report"));

const Billing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  return (
    <Suspense fallback={<Loader />}>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <Suspense fallback={<Loader />}>
          <Report setOpen={setOpen} />
        </Suspense>
      </Dialog>

      <Formik
        initialValues={getSchema({})}
        validationSchema={validator}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            callApi({
              operationId: "api/orders",
              output: "orderSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema({ ...values, ...cart })),
              },
            })
          );
          resetForm();
          setOpen(!open);
          dispatch(clearCart());
        }}
      >
        {(props) => {
          return (
            <Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid item md={9}>
                    <Customer {...props} />
                    <Body />
                  </Grid>
                  <Grid item md={3}>
                    <Paper sx={{ p: 2 }}>
                      <Sidebar />
                      <SubmitBill {...props} />
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Suspense>
  );
};

export default Billing;
