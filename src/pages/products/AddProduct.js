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
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
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
              <Grid item xs={2} sm={2}>
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
              <Grid item xs={8} sm={6}>
                <Stack spacing={0.5}>
                  <InputLabel>Product/service name</InputLabel>
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
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>BASE PRICE</InputLabel>
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

              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Discount</InputLabel>
                  <TextField
                    id="discountAmount"
                    name="discountAmount"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.discountAmount}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.discountAmount && errors.discountAmount && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.discountAmount}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Expiry Date</InputLabel>
                  <TextField
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiryDate}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.expiryDate && errors.expiryDate && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.expiryDate}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack spacing={0.5}>
                  <InputLabel>Vat Per Unit</InputLabel>
                  <TextField
                    id="vatPerUnit"
                    name="vatPerUnit"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.vatPerUnit}
                    fullWidth
                    type="number"
                    autoComplete="age"
                  />
                  {touched.vatPerUnit && errors.vatPerUnit && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.vatPerUnit}
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

export default AddProduct;
