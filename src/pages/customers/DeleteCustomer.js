import { DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const DeleteProduct = ({ shouldDelete }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectApi);
  return (
    <IconButton
      disabled={loading}
      color="error"
      onClick={() =>
        dispatch(
          callApi({
            operationId: `api/customers/${shouldDelete}`,
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
