import { TocOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputLabel,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { addToCart } from "../../../reducers/cartSlice";
import ServiceList from "../components/ServiceList";

const AddItem = ({ addItemRef }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [state, setState] = useState(true);

  const {
    items = {
      data: [],
    },
  } = useSelector(selectApi);
  const itemList = useSelector((state) => state.cart.itemList);
  useEffect(() => {
    dispatch(
      callApi({
        operationId: "api/products",
        output: "items",
      })
    );
  }, [dispatch]);

  let alreadySelectedOptions = itemList.map((el) => el.id);
  let filterSelectedOptions = items?.data?.filter(
    (el) => alreadySelectedOptions.indexOf(el.id) == -1
  );
  const filterOptions = createFilterOptions({
    stringify: ({ serviceName, id }) => `${serviceName} ${id}`,
  });
  // console.log({ filterSelectedOptions }, { alreadySelectedOptions });
  const focusAgain = () => {
    setTimeout(() => addItemRef.current.focus(), 100);
  };
  return (
    <Box maxWidth="100%">
      <Stack direction="row" alignItems="flex-end">
        <Stack>
          <InputLabel sx={{ mb: 0.5, pt: 2 }}>SEARCH ITEM</InputLabel>
          <Autocomplete
            autoFocus
            key={state}
            size="medium"
            disablePortal
            noOptionsText="No Match Found"
            filterOptions={filterOptions}
            clearOnEscape
            id="id"
            sx={{ width: 200 }}
            options={filterSelectedOptions || []}
            autoHighlight
            getOptionLabel={(option) => option.serviceName}
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
                {option.serviceName} ({option.id})
              </Box>
            )}
            onChange={(e, value) => {
              dispatch(addToCart(value));
              setState(!state);
              focusAgain();
            }}
            onDoubleClick={() => console.log("double click")}
          />
        </Stack>
        <Tooltip title="SEE ALL SERVICES" arrow>
          <Button
            sx={{ ml: 2, mt: 0.5, width: 100, borderRadius: 1 }}
            variant="contained"
            color="primary"
            type="button"
            onClick={() => setOpen(!open)}
            startIcon={<TocOutlined style={{ fontSize: "20px" }} />}
          >
            LIST
          </Button>
        </Tooltip>
      </Stack>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth>
        <ServiceList />
      </Dialog>
    </Box>
  );
};

export default AddItem;
