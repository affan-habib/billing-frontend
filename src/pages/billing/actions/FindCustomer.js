import { Box, Stack, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { setField } from "../../../reducers/cartSlice";

const FindCustomer = ({ addItemRef }) => {
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

  const focusItem = () => {
    setTimeout(() => addItemRef.current.focus(), 100);
  };
  return (
    <Autocomplete
      fullWidth
      autoFocus
      size="medium"
      disablePortal
      filterOptions={filterOptions}
      id="id"
      options={customers.data}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
          placeholder="type..."
          label="Find Customer"
          InputLabelProps={{
            shrink: true,
          }}
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
      }}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          focusItem();
          e.preventDefault();
        }
      }}
    />
  );
};

export default FindCustomer;
