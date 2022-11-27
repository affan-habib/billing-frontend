import { DeleteOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../reducers/cartSlice";

const RemoveItem = ({ shouldDelete }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      color="error"
      onClick={() => dispatch(removeItem(shouldDelete))}
    >
      <DeleteOutlined />
    </IconButton>
  );
};

export default RemoveItem;
