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
        operationId: "patient/all",
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
        operationId: `patient/search?patientId=${inputRef.current.value}`,
        output: "patientInfo",
      })
    );
  const handleSearchByMobile = () =>
    dispatch(
      callApi({
        operationId: `patient/search?patientContactNo=${inputRef.current.value}`,
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
              <Grid item lg={0.75}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  sx={{ height: "100%" }}
                >
                  <Button
                    sx={{ flex: 1, borderRadius: 10 }}
                    variant="outlined"
                    color="primary"
                    onClick={handleSearchById}
                    startIcon={<SearchOutlined />}
                  >
                    Search
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={3} md={1.75}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="referredBy"
                  >
                    CUSTOMER NAME
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="FULL NAME"
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
                    placeholder="MOBILE NUMBER"
                    value={patientInfo.data[0]?.patientContactNo}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3} md={1.5} lg={1}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="AGE"
                  >
                    Age
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="AGE"
                    value={patientInfo.data[0]?.patientAge}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3} md={1}>
                <Stack spacing={0.5}>
                  <InputLabel
                    sx={{ fontWeight: 500, textTransform: "uppercase" }}
                    htmlFor="gender"
                  >
                    Gender
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Gender"
                    value={patientInfo.data[0]?.gender}
                  />
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
