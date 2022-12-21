import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";

export default function Bugs() {
  const dispatch = useDispatch();
  const { loading, images } = useSelector(selectApi);
  React.useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/images`,
          output: "images",
        })
      ),
    []
  );
  return (
    <Grid container spacing={2}>
      {images?.map((item, index) => (
        <Grid item md={4}>
          <img style={{ width: "100%", height: 200 }} src={item} />
        </Grid>
      ))}
    </Grid>
  );
}
