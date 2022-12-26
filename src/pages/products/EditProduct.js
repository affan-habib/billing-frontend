import { SaveAsOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const EditProduct = ({ shouldUpdate }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectApi);
  return (
    <IconButton
      disabled={loading}
      color="primary"
      onClick={() =>
        // console.log(shouldUpdate)
        dispatch(
          callApi({
            operationId: `api/products/${shouldUpdate._id}`,
            output: "productUpdated",
            parameters: {
              method: "PUT",
              body: JSON.stringify(shouldUpdate),
            },
          })
        )
      }
    >
      <SaveAsOutlined />
    </IconButton>
  );
};

export default EditProduct;
