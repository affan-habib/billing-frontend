import { Box, InputLabel, Stack, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { setField } from "../../../reducers/cartSlice";

const FindCustomer = () => {
  const dispatch = useDispatch();
  const customerRef = useRef();
  const [state, setState] = useState(true);

  const {
    customers = {
      data: [],
    },
  } = useSelector(selectApi);

  useEffect(() => {
    dispatch(
      callApi({
        operationId: "api/customers",
        output: "customers",
      })
    );
  }, [dispatch]);

  const filterOptions = createFilterOptions({
    stringify: ({ name, id }) => `${name} ${id}`,
  });

  const focusAgain = () => {
    setTimeout(() => customerRef.current.focus(), 100);
  };
  return (
    <Stack sx={{ mr: 2 }}>
      <InputLabel sx={{ mb: 0.5, pt: 2 }}>SEARCH CUSTOMER</InputLabel>
      <Autocomplete
        autoFocus
        size="medium"
        disablePortal
        filterOptions={filterOptions}
        id="id"
        sx={{ width: 200 }}
        options={customers.data}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
            }}
            placeholder="SEARCH CUSTOMER"
            inputRef={customerRef}
          />
        )}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.name} ({option.id})
          </Box>
        )}
        onChange={(e, value) => {
          dispatch(setField({ field: "customerId", value: value?.id }));
          setState(!state);
          focusAgain();
        }}
      />
    </Stack>
  );
};

export default FindCustomer;
