import * as React from "react";
import { IconButton, Paper, Stack, Typography } from "@mui/material";

export default function Card({ label, icon }) {
  return (
    <Stack
      width={200}
      height={100}
      alignItems="center"
      component={Paper}
      justifyContent="center"
      sx={{
        backgroundColor: "white",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white",
        },
        cursor: "pointer",
      }}
    >
      {icon}
      <Typography
        variant="p"
        fontWeight={600}
        sx={{
          mt: 1,
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}
