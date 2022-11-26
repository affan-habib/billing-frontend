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
  IconButton,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../../../reducers/apiSlice";
import { CloseCircleFilled } from "@ant-design/icons";

const QuickRegistration = ({ setOpen }) => {
  const dispatch = useDispatch();
  const {
    gender = {
      data: [],
    },
    quick_registration,
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/v1/p-code/all?codeType=Gender`,
        output: "gender",
      })
    );
  }, []);
  useEffect(() => {
    if (quick_registration?.status == "success") {
      setOpen(false);
      dispatch(
        clearState({
          output: "quick_registration",
        })
      );
    }
  }, [quick_registration]);
  const CloseButton = () => {
    return (
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: 15, top: 15, color: "#029889" }}
      >
        <CloseCircleFilled style={{ fontSize: "20px" }} />
      </IconButton>
    );
  };
  return (
    <div>
      <Formik
        initialValues={getSchema({})}
        enableReinitialize
        validationSchema={validator}
        onSubmit={(values) => {
          let request = new FormData();
          request.append("patientId", values.patientId);
          request.append("customerId", values.customerId);
          request.append("facilityId", values.facilityId);
          request.append("firstName", values.firstName);
          request.append("patientAge", values.patientAge);
          request.append("patientContactNo", values.patientContactNo);

          dispatch(
            callApi({
              operationId: "api/v1/patient/save",
              output: "quick_registration",
              parameters: {
                method: "POST",
                body: request,
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
              <CloseButton />
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ display: "block" }}
                  color="#029889"
                >
                  Quick Registration
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Full Name</InputLabel>
                  <TextField
                    autoFocus={true}
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
                  sx={{ bgcolor: "#029889" }}
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
