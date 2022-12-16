import React, { useEffect } from "react";
import { FastField, Formik } from "formik";
import {
  Grid,
  InputLabel,
  Stack,
  TextField,
  Button,
  Tooltip,
  Select,
  MenuItem,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../../reducers/apiSlice";
import { RestartAlt, SaveAltOutlined } from "@mui/icons-material";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const { customerSaved = { data: { name: "" } } } = useSelector(selectApi);
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
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={6} md={3}>
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
              <Grid item sm={6} md={3}>
                <Stack spacing={0.5}>
                  <InputLabel>Contact</InputLabel>
                  <TextField
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="eg: 01798980000"
                    onBlur={handleBlur}
                    value={values.contactNumber}
                    onChange={handleChange}
                    fullWidth
                    disabled={!!customerSaved.data?._id}
                  />
                </Stack>
              </Grid>
              <Grid item sm={6} md={1.75}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="gender"
                  >
                    GENDER
                  </InputLabel>
                  <FastField
                    // disabled
                    name="gender"
                    component={Select}
                    value={values.gender}
                    onChange={(e) => {
                      setFieldValue("gender", e.target.value);
                    }}
                  >
                    <MenuItem value="MALE">MALE</MenuItem>
                    <MenuItem value="FEMALE">FEMALE</MenuItem>
                  </FastField>
                </Stack>
              </Grid>
              <Grid item sm={6} md={1.25}>
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
              <Grid item sm={6} md={3} mr={0}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="flex-end"
                  sx={{ height: "100%", width: "100%" }}
                >
                  <Tooltip title="SAVE CUSTOMER">
                    <Button
                      variant="contained"
                      endIcon={<SaveAltOutlined style={{ fontSize: 16 }} />}
                      color="info"
                      sx={{ borderRadius: 1, flexGrow: 1 }}
                      type="submit"
                    >
                      {!!customerSaved.data?._id ? "SAVED" : "SAVE"}
                    </Button>
                  </Tooltip>
                  <Tooltip title="RESET CUSTOMER INFO">
                    <Button
                      variant="outlined"
                      endIcon={<RestartAlt style={{ fontSize: 16 }} />}
                      color="error"
                      sx={{ borderRadius: 1, flexGrow: 1 }}
                      type="reset"
                      onClick={handleReset}
                    >
                      RESET
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
