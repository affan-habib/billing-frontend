import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldArray } from "formik";

const RemoveItem = ({ values, shouldDelete }) => {
  console.log(values, shouldDelete);
  return (
    <FieldArray
      name="orderDetailList"
      render={(arrayHelpers) => (
        <IconButton
        color="error"
          onClick={() =>
            arrayHelpers.remove(values.findIndex((el)=> el.id == shouldDelete))
          }
        >
          <DeleteOutlined />
        </IconButton>
      )}
    />
  );
};

export default RemoveItem;
