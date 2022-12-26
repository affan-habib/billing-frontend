import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearCart, setField } from "../../../reducers/cartSlice";
import { Button, ButtonGroup } from "@mui/material";
import { Print, ResetTvOutlined, SaveOutlined } from "@mui/icons-material";

export default function SubmitBill({ handleSubmit, handleReset }) {
  const dispatch = useDispatch();
  const [discountVal, setDiscountVal] = React.useState(0);
  const [givenAmount, setGivenAmount] = React.useState(null);
  const { itemList, discountAmount } = useSelector((state) => state.cart);

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
  }, [itemTotal, discountAmount, givenAmount]);

  return (
    <Box sx={{ Width: "100%" }}>
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        disableElevation
      >
        <Button
          color="primary"
          variant="contained"
          startIcon={<Print style={{ fontSize: 16 }} />}
          onClick={() => handleSubmit()}
          type="submit"
          sx={{ mt: 2, borderRadius: 10 }}
        >
          SAVE
        </Button>
        <Button
          startIcon={<SaveOutlined style={{ fontSize: 16 }} />}
          
          onClick={() => handleSubmit()}
          // disabled={!itemList.length}
          type="submit"
          sx={{ mt: 2 }}
        >
          DRAFT
        </Button>
        <Button
          startIcon={<ResetTvOutlined style={{ fontSize: 16 }} />}
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
