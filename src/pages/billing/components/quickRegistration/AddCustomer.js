import React, { useEffect } from "react";
import { Formik } from "formik";
import {
  Grid,
  InputLabel,
  Stack,
  TextField,
  Button,
  Tooltip,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../../../reducers/apiSlice";
import { RestartAlt, SaveAltOutlined } from "@mui/icons-material";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const { customerSaved = { data: { name: "" } } } = useSelector(selectApi);
  const handleReset = (param) => {
    if (param) {
      dispatch(
        clearState({
          output: "customerSaved",
        })
      );
    }
  };
  return (
    <div>
      <Formik
        initialValues={getSchema({})}
        enableReinitialize
        validationSchema={validator}
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: "api/customers",
              output: "customerSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
              },
            })
          );
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ p: 2, pl: 0 }}>
              <Grid item md={3}>
                <Stack spacing={0.5}>
                  <InputLabel>Full Name</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="name"
                    name="name"
                    placeholder="eg : John Doe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    disabled={!!customerSaved.data?._id}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item md={3}>
                <Stack spacing={0.5}>
                  <InputLabel>Mobile Number</InputLabel>
                  <TextField
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="eg: 01798980000"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNumber}
                    fullWidth
                    disabled={!!customerSaved.data?._id}
                  />
                </Stack>
              </Grid>
              <Grid item md={1.5}>
                <Stack spacing={0.5}>
                  <InputLabel>Gender</InputLabel>
                  <TextField
                    id="gender"
                    name="gender"
                    placeholder="GENDER"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    disabled={!!customerSaved.data?._id}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item md={1.5}>
                <Stack spacing={0.5}>
                  <InputLabel>AGe</InputLabel>
                  <TextField
                    id="age"
                    name="age"
                    placeholder="AGE"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    disabled={!!customerSaved.data?._id}
                    fullWidth
                    type="number"
                  />
                </Stack>
              </Grid>

              <Grid item md={3} mr={0}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  sx={{ height: "100%", width: "100%" }}
                >
                  <Tooltip title="SAVE CUSTOMER">
                    <Button
                      variant="contained"
                      endIcon={
                        !!customerSaved.data?._id ? (
                          <RestartAlt style={{ fontSize: 16 }} />
                        ) : (
                          <SaveAltOutlined style={{ fontSize: 16 }} />
                        )
                      }
                      color="info"
                      sx={{ height: 35, borderRadius: 10 }}
                      type="submit"
                    >
                      {!!customerSaved.data?._id ? "RESET" : "SAVE"}
                    </Button>
                  </Tooltip>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddCustomer;
