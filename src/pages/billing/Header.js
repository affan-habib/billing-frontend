import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Autocomplete,
  Button,
  ButtonGroup,
  createFilterOptions,
  Dialog,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FastField } from "formik";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddItem from "./actions/AddItem";
import QuickRegistration from "./components/quickRegistration/QuickRegistration";

const Header = ({ values, errors, touched, handleSubmit, setFieldValue }) => {
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
        operationId: ("patient/all"),
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
  const addItemRef = useRef(null);
  const handleSearchById = () =>
    dispatch(
      callApi({
        operationId: (
          `patient/search?patientId=${inputRef.current.value}`
        ),
        output: "patientInfo",
      })
    );
  const handleSearchByMobile = () =>
    dispatch(
      callApi({
        operationId: (
          `patient/search?patientContactNo=${inputRef.current.value}`
        ),
        output: "patientInfo",
      })
    );

  useEffect(() => {
    !!patientInfo.data.length &&
      setFieldValue("patientId", patientInfo.data[0]?.patientId);
  }, [patientInfo.data]);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearchById();
                        addItemRef.current.focus();
                        e.preventDefault();
                      }
                    }}
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
                        sx={{ flex: 1.5, bgcolor: "#216b8b" }}
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
                    CUSTOMER NAME                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter Name"
                    value={patientInfo.data[0]?.firstName}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3} md={2} lg={1.75}>
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
              <Grid item xs={3} md={1.5} lg={1}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    Age
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter Name"
                    value={patientInfo.data[0]?.patientAge}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3} md={1.75}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    Gender
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Enter Name"
                    value={patientInfo.data[0]?.gender}
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
                  <AddItem addItemRef={addItemRef} values={values} />
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </LocalizationProvider>
    </>
  );
};

export default Header;
