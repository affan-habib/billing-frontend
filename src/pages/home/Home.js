import { Box, Stack } from "@mui/material";
import React from "react";
import Steps from "./Steps";
import Contacts from "./Contacts";
import Clues from "./Clues";
const Home = () => {
  return (
    <Box>
      <Stack flexDirection="row">
        <Steps />
        <Contacts />
        <Clues />
      </Stack>
    </Box>
  );
};

export default Home;
