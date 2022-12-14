import { DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../reducers/cartSlice";

const RemoveItem = ({ shouldDelete }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      color="error"
      size="small"
      onClick={() => dispatch(removeItem(shouldDelete))}
    >
      <DeleteOutlined />
    </IconButton>
  );
};

export default RemoveItem;
