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
            <Box>
              <TopHeader />
              <Header {...props} />
              <Paper
                elevation={1}
                sx={{ p: 2, mt: 2, pt: .5, background: "#FFFDF8" }}
                square
              >
                {/* <AddItem {...props} /> */}
                <Body {...props} />
              </Paper>
              <Paper
                elevation={1}
                sx={{ p: 2, mt: 2, background: "#F5FFFA" }}
                square
              >
                <Grid container spacing={2}>
                  <Grid item md={10}>
                    <Final {...props} />
                  </Grid>
                  <Grid item md={2}>
                    <Remarks {...props} />
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
