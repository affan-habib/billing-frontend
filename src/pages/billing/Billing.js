import { Box, Dialog, Grid, Paper } from "@mui/material";
import { Formik } from "formik";
import { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Customer from "./Customer";
import Report from "./components/report/Report";
import { getSchema, validator } from "./Schema";
import { callApi } from "../../reducers/apiSlice";
import { clearCart } from "../../reducers/cartSlice";
import SubmitBill from "./actions/SubmitBill";

const Billing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  return (
    <Suspense fallback={Loader}>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <Report setOpen={setOpen} />
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
                body: JSON.stringify(getSchema({ values, ...cart })),
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
              <Paper sx={{ p: 2, bgcolor: "#e2ffff" }} square>
                <Grid container spacing={2}>
                  <Grid item md={9}>
                    <Customer {...props} />
                    <Body />
                  </Grid>
                  <Grid item md={3}>
                    <Paper sx={{ p: 2, bgcolor: "#f5f9f0" }}>
                      <Sidebar />
                      <SubmitBill {...props} />
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          );
        }}
      </Formik>
    </Suspense>
  );
};

export default Billing;
