import { Container } from "@mui/material";
import React from "react";
import News from "../views/News";
function LatestUpdate() {
  return (
    <Container sx={{ mb: 8 }}>
      <News />
    </Container>
  );
}

export default LatestUpdate;
