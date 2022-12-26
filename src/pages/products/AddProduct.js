import React from "react";
import { Formik } from "formik";
import {
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Button,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch } from "react-redux";
import { callApi } from "../../reducers/apiSlice";
import { CloseCircleFilled } from "@ant-design/icons";

const AddProduct = ({ setOpen }) => {
  const dispatch = useDispatch();

  const CloseButton = () => {
    return (
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", right: 15, top: 15 }}
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
              operationId: "api/products",
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
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ maxWidth: 600, p: 2 }}>
              <CloseButton />
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ display: "block" }}
                >
                  ADD PRODUCT / SERVICE
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2}>
                <Stack spacing={0.5}>
                  <TextField
                    label="ID"
                    autoFocus={true}
                    id="id"
                    name="id"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id}
                    fullWidth
                  />
                  {touched.id && errors.id && (
                    <FormHelperText error>{errors.id}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    label="CATEGORY"
                    autoFocus={true}
                    id="category"
                    name="category"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                    fullWidth
                  />
                  {touched.category && errors.category && (
                    <FormHelperText error>{errors.category}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Item Name"
                    autoFocus={true}
                    id="serviceName"
                    name="serviceName"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.serviceName}
                    fullWidth
                  />
                  {touched.serviceName && errors.serviceName && (
                    <FormHelperText error>{errors.serviceName}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={3}>
                <Stack spacing={0.5}>
                  <TextField
                    label="PRICE"
                    id="basePrice"
                    name="basePrice"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.basePrice}
                    fullWidth
                    type="number"
                  />
                  {touched.basePrice && errors.basePrice && (
                    <FormHelperText error>{errors.basePrice}</FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={4} md={3}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Discount"
                    id="discountPerUnit"
                    name="discountPerUnit"
                    placeholder="Discount Per Unit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.discountPerUnit}
                    fullWidth
                    type="number"
                  />
                  {touched.discountPerUnit && errors.discountPerUnit && (
                    <FormHelperText error>
                      {errors.discountPerUnit}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={3}>
                <Stack spacing={0.5}>
                  <TextField
                    label="AVAILABLE STOCKS"
                    id="stock"
                    name="stock"
                    placeholder="Enter available Stock"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.stock}
                    fullWidth
                    type="number"
                  />
                  {touched.stock && errors.stock && (
                    <FormHelperText error>{errors.stock}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={3}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Expiry Date"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiryDate}
                    fullWidth
                    type="number"
                  />
                  {touched.expiryDate && errors.expiryDate && (
                    <FormHelperText error>{errors.expiryDate}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={4} md={3}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Vat Per Unit"
                    id="vatPerUnit"
                    name="vatPerUnit"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.vatPerUnit}
                    fullWidth
                    type="number"
                  />
                  {touched.vatPerUnit && errors.vatPerUnit && (
                    <FormHelperText error>{errors.vatPerUnit}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <ButtonGroup>
                  <Button variant="contained"  type="submit">
                    Submit
                  </Button>
                  <Button variant="outlined" color="error" type="reset">
                    Reset
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
