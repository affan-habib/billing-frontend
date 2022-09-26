import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

function EatlEvent() {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Eatl Event Video
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center'}}>
          <ReactPlayer width={640} height={300} url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EatlEvent;
