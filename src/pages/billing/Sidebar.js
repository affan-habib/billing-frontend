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
  Stack,
  TextField,
} from "@mui/material";
import { AccountCircle, SaveOutlined } from "@mui/icons-material";

export default function Sidebar({ handleSubmit, values, handleReset }) {
  const dispatch = useDispatch();
  const [discountVal, setDiscountVal] = React.useState(null);
  const [givenAmount, setGivenAmount] = React.useState(null);
  const { orderDetailList, discount } = useSelector((state) => state.cart);
  let itemTotal = orderDetailList.reduce(
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
        Customer Name: <span> Affan Habib </span>
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
        fullWidth
        sx={{ mb: 1 }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        value={itemTotal}
      />

      <InputLabel>Discount</InputLabel>
      <TextField
        inputProps={{ min: 0, style: { textAlign: "right", padding: 4 } }}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Discount</InputAdornment>
          ),
        }}
        sx={{ mb: 1 }}
        variant="filled"
        size="small"
        hiddenLabel
        type="number"
        disabled={!itemTotal}
        value={discountVal}
        onChange={(e) => setDiscountVal(e.target.value)}
        obBlur={(e) =>
          dispatch(setField({ field: "discount", value: e.target.value }))
        }
      />

      <InputLabel>DUE AMOUNT</InputLabel>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">৳</InputAdornment>,
        }}
        sx={{ mb: 1 }}
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
        sx={{ mb: 1 }}
        variant="filled"
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
        sx={{ mb: 1 }}
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
          disabled={!values.customerId || !orderDetailList.length}
        >
          SAVE
        </Button>
        <Button
          startIcon={<SaveOutlined style={{ fontSize: 16 }} />}
          color="info"
          onClick={() => handleSubmit()}
          // disabled={!orderDetailList.length}
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
          }}
        >
          RESET
        </Button>
      </ButtonGroup>
    </Box>
  );
}
