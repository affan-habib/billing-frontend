import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApi } from "../../reducers/apiSlice";
import AddCustomer from "./components/quickRegistration/AddCustomer";

const Header = ({ handleChange, handleBlur, values, setFieldValue }) => {
  // console.log(props);
  const dispatch = useDispatch();

  const {
    customerSaved = {
      data: [],
    },
    customers = {
      data: [],
    },
  } = useSelector(selectApi);

  //dialog

  const addItemRef = useRef(null);

  // useEffect(() => {
  //   !!customerSaved.data &&
  //     props.setFieldValue("patientId", customerSaved.data[0]?._id);
  // }, [customerSaved.data]);
  return (
    <>
      <Paper elevation={1} sx={{ background: "#F5FFFA", pt: 0, mt: 4 }} square>
        <Stack direction="row">
          <Autocomplete
            autoFocus
            size="medium"
            disablePortal
            noOptionsText="No Match Found"
            clearOnEscape
            id="id"
            sx={{ width: 300 }}
            options={customers.data}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
                placeholder="Add Service by Id/Name"
                inputRef={addItemRef}
              />
            )}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.name} ({option._id})
              </Box>
            )}
            onChange={(e, value) => {
              setFieldValue("patientId", value._id)
            }}
          />
        </Stack>
        {/* <AddCustomer /> */}
      </Paper>
    </>
  );
};

export default Header;
