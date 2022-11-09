import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import {
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Select,
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { getSchema } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../../reducers/apiSlice";

const QuickRegistration = () => {
  const dispatch = useDispatch();
  const {
    gender = {
      data: [],
    },
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/v1/p-code/all?codeType=Gender`,
        output: "gender",
      })
    );
  }, []);
  return (
    <div>
      <Formik
        initialValues={getSchema({})}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: "api/v1/patient/save",
              output: "patient_save",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
                hasFile: true,
              },
            })
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ maxWidth: 450, p: 2 }}>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ display: "block" }}
                  color="info.main"
                >
                  Quick Registration
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Full Name</InputLabel>
                  <TextField
                    id="firstName"
                    name="firstName"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.firstName && errors.firstName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.firstName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={6} md={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Age</InputLabel>
                  <TextField
                    id="patientAge"
                    name="patientAge"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.patientAge}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.patientAge && errors.patientAge && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.patientAge}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={6} md={6}>
                <Stack spacing={0.5}>
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Field
                    name="gender"
                    component={Select}
                    value={values.gender}
                    onChange={(e) => {
                      setFieldValue("gender", e.target.value);
                    }}
                  >
                    <MenuItem value="">Select Gender</MenuItem>
                    {gender?.data?.map((el) => (
                      <MenuItem key={el.codeId} value={el.name}>
                        {el.name}
                      </MenuItem>
                    ))}
                  </Field>
                  {touched.gender && errors.gender && (
                    <FormHelperText error>{errors.gender}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Stack spacing={0.5}>
                  <InputLabel htmlFor="patientContactNo">
                    Contact Number
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    type="text"
                    name="patientContactNo"
                    placeholder="Enter Contact Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.patientContactNo}
                  />

                  {touched.patientContactNo && errors.patientContactNo && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.patientContactNo}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="info"
                  fullWidth
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default QuickRegistration;
