import {
  Box,
  Dialog,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import Faq from "./Faq";
import File from "./File";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
const Bugs = React.lazy(() => import("./Bugs"));

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <Paper sx={{ my: 2, p: 2, pt: 0 }} className="animated" square>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <Suspense fallback={<Loader/>}>
          <Bugs />
        </Suspense>
      </Dialog>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item md={6}>
          <File />
          <Button onClick={() => setOpen(!open)}>See Bugs</Button>
        </Grid>
        <Grid item md={6}>
          <Paper sx={{ minHeight: 400 }} square>
            <Typography
              sx={{
                pt: 2,
                ml: 2,
                textTransform: "uppercase",
                color: "primary",
              }}
              variant="h5"
            >
              Frequently Asked Questions
            </Typography>
            <Divider sx={{ mt: 2 }} />
            <Faq />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
