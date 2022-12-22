import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Faq from "./Faq";
import File from "./File";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import Bugs from "./Bugs";
const About = () => {
  const dispatch = useDispatch();
  const { loading, images } = useSelector(selectApi);
  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/images`,
          output: "images",
        })
      ),
    []
  );

  console.log(images, loading);
  return (
    <Paper sx={{ my: 2, p: 2, pt: 0 }} className="animated" square>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item md={6}>
          <File />
        </Grid>
        <Grid item md={6}>
          <Bugs data={images} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
