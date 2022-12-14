import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item md={2.2}>
          <img
            className="imgStyle"
            src="https://img.icons8.com/officel/512/withdrawal.png"
          />
        </Grid>
        <Grid item md={9}>
          <Typography variant="caption" sx={{ fontWeight: 600, mt: 2 }}>
            ABC GENERAL HOSPITAL
          </Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Typography sx={{ fontWeight: 500 }} variant="p">
              Link road, Dhaka-1206
            </Typography>
            <Typography sx={{ fontWeight: 500 }} variant="p">
              Contact : 0177777461
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
