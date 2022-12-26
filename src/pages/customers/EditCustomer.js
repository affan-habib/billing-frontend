import { SaveAsOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

const EditCustomer = ({ shouldUpdate }) => {
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
            operationId: `api/customers/${shouldUpdate._id}`,
            output: "customerUpdated",
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

export default EditCustomer;
