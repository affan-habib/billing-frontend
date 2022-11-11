import {
  PlusCircleFilled,
  PrinterOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Stack,
  Paper,
  Autocomplete,
  IconButton,
  Dialog,
  Tooltip,
  createFilterOptions,
  Button,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FastField, Field } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddItem from "./actions/AddItem";
import QuickRegistration from "./actions/quickRegistration/QuickRegistration";
console.log("billing form");
const Header = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  viewMode,
}) => {
  const dispatch = useDispatch();

  const {
    patient = {
      data: [],
    },
  } = useSelector(selectApi);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/v1/patient/all`,
        output: "patient",
      })
    );
  }, [dispatch]);
  const [addedItem, setAddedItem] = useState({});

  //dialog
  const filterOptions = createFilterOptions({
    stringify: ({ patientId, firstName }) => `${patientId} ${firstName}`,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <fieldset disabled={viewMode} style={{ border: 0 }}> */}
        <form onSubmit={handleSubmit}>
          <Paper elevation={1} sx={{ p: 2, background: "#F5FFFA" }} square>
            <Grid container spacing={2}>
              <Grid item xs={3} md={2.25}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="payer"
                  >
                    CUSTOMER NAME
                  </InputLabel>
                  <Autocomplete
                    noOptionsText="No Match Found"
                    size="medium"
                    id="id"
                    sx={{ width: "100%" }}
                    options={patient?.data}
                    filterOptions={filterOptions}
                    autoHighlight
                    // filterSelectedOptions
                    autoSelect
                    getOptionLabel={(option) => option.firstName}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        // label="Select an item"
                        inputProps={{
                          ...params.inputProps,
                        }}
                        placeholder="Enter id/name"
                      />
                    )}
                    onChange={(e, value) => setAddedItem(value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={0.5}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                  >
                    Age
                  </InputLabel>
                  <TextField
                    id="age"
                    name="age"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    fullWidth
                    autoComplete="age"
                  />
                  {touched.age && errors.age && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.age}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={1.5}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                  >
                    Mobile
                  </InputLabel>
                  <TextField
                    id="patientContactNo"
                    name="patientContactNo"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.patientContactNo}
                    fullWidth
                    autoComplete="patientContactNo"
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

              <Grid item xs={12} md={1}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="gender"
                  >
                    Gender
                  </InputLabel>
                  <Field
                    name="gender"
                    component={Select}
                    value={values.gender}
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                  >
                    <MenuItem value="Male">MALE</MenuItem>
                    <MenuItem value="Female">FEMALE</MenuItem>
                  </Field>
                  {touched.gender && errors.gender && (
                    <FormHelperText error>{errors.gender}</FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={3} md={3}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="agent"
                  >
                    Select Item
                  </InputLabel>
                  <AddItem values={values} />
                </Stack>
              </Grid>
              <Stack
                spacing={1}
                direction="row"
                justifyContent="right"
                alignItems="center"
              >
                <Button
                  size="sm"
                  color="warning"
                  sx={{ height: 30 }}
                  variant="contained"
                  startIcon={
                    <PlusCircleFilled
                      color="#205081"
                      style={{ fontSize: "16px" }}
                    />
                  }
                >
                  ADD NEW
                </Button>
                <Button
                  size="sm"
                  sx={{ height: 30 }}
                  variant="contained"
                  color="success"
                  type="submit"
                  onSubmit={() => handleSubmit()}
                  // onClick={() => handleSubmit(props.values)}
                  startIcon={
                    <PrinterOutlined
                      color="#205081"
                      style={{ fontSize: "16px" }}
                    />
                  }
                >
                  SAVE AND PRINT
                </Button>
              </Stack>
            </Grid>
          </Paper>
        </form>
        {/* </fieldset> */}
      </LocalizationProvider>
    </>
  );
};

export default Header;
