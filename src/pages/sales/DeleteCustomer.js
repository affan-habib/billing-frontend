import { DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { callApi } from "../../reducers/apiSlice";

const DeleteProduct = ({ shouldDelete }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      color="error"
      onClick={() =>
        dispatch(
          callApi({
            operationId: `api/orders/${shouldDelete}`,
            output: "customerDeleted",
            parameters: {
              method: "DELETE",
            },
          })
        )
      }
    >
      <DeleteOutlined />
    </IconButton>
  );
};

export default DeleteProduct;
