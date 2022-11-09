import {
  PlusCircleFilled,
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
          <Paper
            elevation={1}
            sx={{ p: 2, background: "#FFFEFA", pt: 0 }}
            square
          >
            <Grid container spacing={2} mt={0.5} sx={{ mb: 1 }}>
              <Grid item xs={12} md={2}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="billFrom"
                  >
                    Bill From
                  </InputLabel>
                  <Field
                    name="billFrom"
                    disabled
                    component={Select}
                    value={values.billFrom}
                    onChange={(e) => setFieldValue("billFrom", e.target.value)}
                  >
                    <MenuItem value="OPD">OPD</MenuItem>
                    <MenuItem value="IPD">IPD</MenuItem>
                  </Field>
                  {touched.billFrom && errors.billFrom && (
                    <FormHelperText error>{errors.billFrom}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={2}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="term"
                  >
                    Terms
                  </InputLabel>
                  <FastField
                    // disabled
                    name="term"
                    component={Select}
                    value={values.term}
                    onChange={(e) => {
                      setFieldValue("term", e.target.value);
                    }}
                  >
                    <MenuItem value="1">Cash</MenuItem>
                    <MenuItem value="2">Credit Card</MenuItem>
                  </FastField>
                  {touched.term && errors.term && (
                    <FormHelperText error>{errors.term}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={2}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                  >
                    Date
                  </InputLabel>
                  <DatePicker
                    disabled
                    value={values.date}
                    onChange={(newValue) =>
                      setFieldValue("date", newValue.toString())
                    }
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                    inputFormat="dd-MM-yyyy"
                  />
                </Stack>
              </Grid>

              <Grid item xs={3} md={2}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="billNo"
                  >
                    Bill No
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    name="billNo"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.billNo}
                  />

                  {touched.billNo && errors.billNo && (
                    <FormHelperText error>{errors.billNo}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={3} md={2.5}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="agent"
                  >
                    Agent
                  </InputLabel>
                  <Autocomplete
                  noOptionsText="No Match Found"
                    id="id"
                    sx={{ width: "100%", height: 25, p: 0 }}
                    options={patient?.data}
                    filterOptions={filterOptions}
                    autoHighlight
                    // filterSelectedOptions
                    autoSelect
                    getOptionLabel={(option) => option.firstName}
                    renderInput={(params) => (
                      <TextField
                        size="small"
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
            </Grid>
            <Grid />
          </Paper>
          <Paper
            elevation={1}
            sx={{ p: 2, background: "#F5FFFA", pt: 0,mt:4 }}
            square
          >
            <Grid container spacing={2}>
              <Grid item xs={3} md={2.25}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="payer"
                  >
                    Patient/Payer's Name
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
              <Grid item xs={2} md={1} lg={0.7}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={4}
                  mx={1}
                >
                  <Tooltip title="Add New Patient/Payer" arrow>
                    <IconButton color="success" onClick={() => setOpen(!open)}>
                      <PlusCircleFilled style={{ fontSize: "20px" }} />
                    </IconButton>
                  </Tooltip>
                  <Dialog open={open} onClose={() => setOpen(!open)}>
                    <QuickRegistration />
                  </Dialog>
                  <Tooltip title="List of patients" arrow>
                    <IconButton color="warning">
                      <UnorderedListOutlined style={{ fontSize: "20px" }} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Grid>
              <Grid item xs={3} md={1.75}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    Mobile Number
                  </InputLabel>
                  <Autocomplete
                    id="id"
                    noOptionsText="No Match Found"
                    sx={{ width: "100%" }}
                    options={patient?.data}
                    filterOptions={createFilterOptions({
                      stringify: ({ patientContactNo, id }) =>
                        `${patientContactNo} ${id}`,
                    })}
                    autoHighlight
                    // filterSelectedOptions
                    autoSelect
                    getOptionLabel={(option) => option.patientContactNo}
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
              <Grid item xs={3} md={2}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    Referred By
                  </InputLabel>
                  <Autocomplete
                    id="id"
                    noOptionsText="No Match Found"
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
              <Grid item xs={3} md={2}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="agent"
                  >
                    Agent
                  </InputLabel>
                  <Autocomplete
                    id="id"
                    noOptionsText="No Match Found"
                    sx={{ width: "100%", height: 25, p: 0 }}
                    options={patient?.data}
                    filterOptions={filterOptions}
                    autoHighlight
                    // filterSelectedOptions
                    autoSelect
                    getOptionLabel={(option) => option.firstName}
                    renderInput={(params) => (
                      <TextField
                        size="small"
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
              <Grid item xs={3} md={3}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="agent"
                  >
                    Add Service
                  </InputLabel>
                  <AddItem values={values} />
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </form>
        {/* </fieldset> */}
      </LocalizationProvider>
    </>
  );
};

export default Header;
