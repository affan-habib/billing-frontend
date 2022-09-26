import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "../components/Typography";
import { Container, Grid, Stack } from "@mui/material";
import logo from "../assets/eatl_logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function AppFooter() {
  return (
    <Box className="custombg2">
      <Container sx={{ paddingBottom: 4 }}>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6}>
            <Stack>
              <img src={logo} style={{ width: "180px" }} />
              <Typography color="white" sx={{ marginTop: "10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}>
                <FacebookIcon sx={{color: "success.main"}} />
                <YouTubeIcon sx={{color: "success.main"}} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={5} sm={6}>
            <Stack>
              <Typography color="success.main" variant="body1" fontSize="18px" fontWeight="bold" marginBottom="20px">
                Address
              </Typography>
              <Typography variant="body1" color="white">
                Corporate Office: Rupayan Shopping Square, Level-5, Plot-2,
                Block-G, Sayem Sobhan Anvir Road, Bashundhara R/A, Dhaka-1229,
                Bangladesh.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={3} sm={6}>
            <Stack>
              <Typography color="success.main" variant="body1" fontSize="18px"  fontWeight="bold" marginBottom="20px">
                Important Links
              </Typography>
              <Typography variant="body1" color="white" display="block" gutterBottom>
                Link 1
              </Typography>
              <Typography variant="body1" color="white" display="block" gutterBottom>
                Link 1
              </Typography>
              <Typography variant="body1" color="white" display="block" gutterBottom>
                Link 1
              </Typography>
              <Typography variant="body1" color="white" display="block" gutterBottom>
                Link 1
              </Typography>
              <Typography variant="body1" color="white" display="block" gutterBottom>
                Link 1
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box>
      <Typography p={1} bgcolor="white" variant="body1" color="secondary.main" display="block" align="center" gutterBottom> &copy; {new Date().getFullYear()}, Ethics Advance Technology ltd | All rights reserved</Typography>
      </Box>
    </Box>
  );
}
