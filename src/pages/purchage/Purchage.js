import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Purchage = () => {
  return (
    <Paper
      p={2}
      bg="primary.main"
      sx={{ minHeight: "90vh", background: "rgba(243, 241, 189, 0.24)" }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: 500, color: "rgba(214, 71, 15, 0.6)" }}
      >
        <Typography variant="h2"> Coming Soon</Typography>
      </Stack>
    </Paper>
  );
};


export default Purchage;