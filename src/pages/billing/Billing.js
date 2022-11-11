import { Box, Grid, Paper } from "@mui/material";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { callApi } from "../../reducers/apiSlice";
import AddItem from "./actions/AddItem";
import Header from "./Header";
import Final from "./Final";
import Remarks from "./actions/remarks/Remarks";
import { getSchema, validator } from "./Schema";
import "./styles/index.css";
import TopHeader from "./components/TopHeader";
import Body from "./Body";
const Billing = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) =>
    dispatch(
      callApi({
        operationId: "api/v1/order-details/save",
        output: "orderDetails",
        parameters: {
          method: "POST",
          body: JSON.stringify(values),
        },
      })
    );
  return (
    <>
      <Formik
        initialValues={getSchema({})}
        validationSchema={validator}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            callApi({
              operationId: "api/v1/order-details/save",
              output: "orderDetails",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
              },
            })
          );
        }}
      >
        {(props) => {
          return (
            <Paper elevation={1} sx={{ background: "rgba(243, 241, 189, 0.24)", p: 2 }} square>
              <Header {...props} />
              <Grid container columnSpacing={2} mt={2}>
                <Grid item md={8}>
                  <Body {...props} />
                </Grid>
                <Grid item md={4}>
                  <Final {...props} />
                </Grid>
              </Grid>
              {/* <AddItem {...props} /> */}
            </Paper>
          );
        }}
      </Formik>
    </>
  );
};

export default Billing;
