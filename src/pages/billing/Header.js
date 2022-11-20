import {
  PlusCircleFilled,
  PlusCircleOutlined,
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
  ButtonGroup,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FastField } from "formik";
import { useEffect, useRef, useState } from "react";
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
    patientInfo = {
      data: [],
    },
  } = useSelector(selectApi);
  const [addedItem, setAddedItem] = useState({});
  useEffect(() => {
    dispatch(
      callApi({
        operationId: `api/v1/patient/all`,
        output: "patient",
      })
    );
  }, [dispatch]);
  //dialog
  const filterOptions = createFilterOptions({
    stringify: ({ patientId, firstName }) => `${patientId} ${firstName}`,
  });
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const handleSearchById = () =>
    dispatch(
      callApi({
        operationId: `api/v1/patient/search?patientId=${inputRef.current.value}`,
        output: "patientInfo",
      })
    );
  const handleSearchByMobile = () =>
    dispatch(
      callApi({
        operationId: `api/v1/patient/search?patientContactNo=${inputRef.current.value}`,
        output: "patientInfo",
      })
    );

  useEffect(() => {
    !!patientInfo.data.length &&
      setFieldValue("patientId", patientInfo.data[0]?.patientId);
    // !!patientInfo.data.length || setFieldValue("patientId", null )
  }, [patientInfo.data]);
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
                  <FastField
                    name="billFrom"
                    disabled
                    component={Select}
                    value={values.billFrom}
                    onChange={(e) => setFieldValue("billFrom", e.target.value)}
                  >
                    <MenuItem value="OPD">OPD</MenuItem>
                    <MenuItem value="IPD">IPD</MenuItem>
                  </FastField>
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
            sx={{ p: 2, background: "#F5FFFA", pt: 0, mt: 4 }}
            square
          >
            <Grid container spacing={2}>
              <Grid item xs={3} md={1.5}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="search"
                  >
                    Search
                  </InputLabel>
                  <TextField
                    autoFocus
                    fullWidth
                    type="search"
                    inputRef={inputRef}
                    placeholder="Enter id"
                  />
                </Stack>
              </Grid>
              <Grid item xs={2} md={3} lg={2.5}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  <ButtonGroup
                    variant="outlined"
                    sx={{ height: 35, width: "100%", mt: 3 }}
                    aria-label="outlined button group"
                  >
                    <Tooltip title="Search By id" arrow>
                      <Button
                        sx={{ flex: 1 }}
                        variant="contained"
                        color="primary"
                        onClick={handleSearchById}
                        endIcon={<SearchOutlined />}
                      >
                        Id
                      </Button>
                    </Tooltip>

                    <Tooltip title="Search By Mobile" arrow>
                      <Button
                        sx={{ flex: 1.5, bgcolor: "#029889" }}
                        variant="contained"
                        onClick={handleSearchByMobile}
                        endIcon={<SearchOutlined />}
                      >
                        Mobile
                      </Button>
                    </Tooltip>
                    <Dialog open={open} onClose={() => setOpen(!open)}>
                      <QuickRegistration setOpen={setOpen} />
                    </Dialog>
                    <Tooltip title="Add New Patient/Payer" arrow>
                      <Button
                        color="success"
                        sx={{ flex: 1 }}
                        onClick={() => setOpen(!open)}
                        variant="contained"
                        endIcon={<PlusCircleOutlined />}
                      >
                        New
                      </Button>
                    </Tooltip>
                  </ButtonGroup>
                </Stack>
              </Grid>
              <Grid item xs={3} md={1.75}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    Patient/Payer Name
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter Name"
                    value={patientInfo.data[0]?.firstName}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3} md={1.75}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    Mobile
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter Name"
                    value={patientInfo.data[0]?.patientContactNo}
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
              <Grid item xs={3} md={5}>
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
