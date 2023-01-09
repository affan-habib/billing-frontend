import { Assessment, Business, Menu, TrackChanges } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Settings = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2} direction="row">
        <Stack
          width={200}
          height={100}
          alignItems="center"
          justifyContent="center"
          bgcolor="lightgrey"
        >
          <Assessment color="primary" fontSize="large" />
          <Typography variant="h5" sx={{ mt: 1, color: "primary.main" }}>
            Dashboard Settings
          </Typography>
        </Stack>
        <Stack
          width={200}
          height={100}
          alignItems="center"
          justifyContent="center"
          bgcolor="lightgrey"
        >
          <Business color="info" fontSize="large" />
          <Typography variant="h5" sx={{ mt: 1, color: "primary.main" }}>
            Business Settings
          </Typography>
        </Stack>
        <Stack
          width={200}
          height={100}
          alignItems="center"
          justifyContent="center"
          bgcolor="lightgrey"
        >
          <TrackChanges color="info" fontSize="large" />
          <Typography variant="h5" sx={{ mt: 1, color: "primary.main" }}>
            Goal Settings
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Settings;
