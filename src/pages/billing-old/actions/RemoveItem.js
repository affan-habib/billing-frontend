import { DeleteOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { removeItem } from "../../../reducers/cartSlice";
import { useDispatch } from "react-redux";

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
