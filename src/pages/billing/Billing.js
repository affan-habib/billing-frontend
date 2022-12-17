import { Box, Dialog, Grid, Paper } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Report from "./components/report/Report";
import { getSchema, validator } from "./Schema";
import { callApi } from "../../reducers/apiSlice";
import { clearCart } from "../../reducers/cartSlice";

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
        onSubmit={(values, { resetForm }) => {
          dispatch(
            callApi({
              operationId: "api/orders",
              output: "orderSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
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
              <Paper outlined sx={{ p: 2, bgcolor: "#e2ffff" }} square>
                <Grid container spacing={2}>
                  <Grid item md={9}>
                    <Header {...props} />
                    <Body />
                  </Grid>
                  <Grid item md={3}>
                    <Paper sx={{ p: 2, bgcolor: "#f5f9f0" }}>
                      <Sidebar {...props} />
                    </Paper>
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
