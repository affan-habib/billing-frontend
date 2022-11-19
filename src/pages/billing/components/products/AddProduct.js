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

const AddProduct = ({ setOpen }) => {
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
          dispatch(
            callApi({
              operationId: "api/v1/service-master/items",
              output: "itemSaved",
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
                  Add New Product
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Id</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="id"
                    name="id"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.id && errors.id && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.id}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Stack spacing={0.5}>
                  <InputLabel>Full Name</InputLabel>
                  <TextField
                    autoFocus={true}
                    id="masterServiceName"
                    name="masterServiceName"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.masterServiceName}
                    fullWidth
                    autoComplete="first-name"
                  />
                  {touched.masterServiceName && errors.masterServiceName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.masterServiceName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={6} md={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Age</InputLabel>
                  <TextField
                    id="tariffBaseAmount"
                    name="tariffBaseAmount"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tariffBaseAmount}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.tariffBaseAmount && errors.tariffBaseAmount && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.tariffBaseAmount}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {/* <Grid item xs={6} md={6}>
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
              </Grid> */}
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

export default AddProduct;
