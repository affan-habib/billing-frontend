import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearCart, setField } from "../../reducers/cartSlice";
import {
  Button,
  ButtonGroup,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { selectApi } from "../../reducers/apiSlice";

export default function Sidebar({ handleSubmit, values, handleReset }) {
  const dispatch = useDispatch();
  const [discountVal, setDiscountVal] = React.useState(null);
  const [givenAmount, setGivenAmount] = React.useState(null);
  const { itemList, discount } = useSelector((state) => state.cart);
  const { customerSaved = { data: {} } } = useSelector(selectApi);
  let itemTotal = itemList.reduce(
    (a, b) => a + b.basePrice * b.quantityOrdered,
    0
  );

  useEffect(() => {
    dispatch(
      setField({
        field: "total",
        value: itemTotal - discountVal - givenAmount,
      })
    );
  }, [itemTotal, discount, givenAmount]);

  return (
    <Box sx={{ Width: "100%" }}>
      <p>
        Customer Name: <span> {customerSaved.data?.name || "not found"} </span>
      </p>
      <p>
        Payment Status : <span> Paid </span>
      </p>
      <p>
        Bill No : <span> 134555411 </span>
      </p>

      <InputLabel>ITEM TOTAL</InputLabel>
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        disabled
        fullWidth
        sx={{ mb: 1, bgcolor: "white", color: "blue" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal}
      />

      <InputLabel>Discount</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        disabled={!itemTotal}
        value={discountVal}
        onChange={(e) => setDiscountVal(e.target.value)}
        obBlur={(e) =>
          dispatch(setField({ field: "discountAmount", value: e.target.value }))
        }
      />

      <InputLabel>DUE AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal - discountVal}
      />

      <InputLabel>GIVEN AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        color="error"
        size="small"
        hiddenLabel
        type="number"
        value={givenAmount}
        onChange={(e) => setGivenAmount(e.target.value)}
      />

      <InputLabel>RETURN AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1, bgcolor: "white" }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal - discountVal - givenAmount}
      />

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        disableElevation
      >
        <Button
          color="primary"
          variant="contained"
          // startIcon={<PrinterOutlined style={{ fontSize: 16 }} />}
          onClick={() => handleSubmit()}
          type="submit"
          sx={{ mt: 2, borderRadius: 10 }}
        >
          SAVE
        </Button>
        <Button
          startIcon={<SaveOutlined style={{ fontSize: 16 }} />}
          color="info"
          onClick={() => handleSubmit()}
          // disabled={!itemList.length}
          type="submit"
          sx={{ mt: 2 }}
        >
          DRAFT
        </Button>
        <Button
          // startIcon={<ReloadOutlined style={{ fontSize: 16 }} />}
          color="error"
          variant="outlined"
          sx={{ mt: 2, borderRadius: 10 }}
          onClick={() => {
            handleReset();
            dispatch(clearCart());
            setDiscountVal(0);
            setGivenAmount(0);
          }}
        >
          RESET
        </Button>
      </ButtonGroup>
    </Box>
  );
}
