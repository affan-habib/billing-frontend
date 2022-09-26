import React from "react";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img1 from "../assets/news/1.jpg";
import img2 from "../assets/news/2.jpg";
import img3 from "../assets/news/3.jpg";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
function NewsSection() {
  return (
    <Container sx={{ mt: 8, mb: 4 }} >
       <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
      >
        Latest News
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h4" gutterBottom>
            We help more than 1500 <span>companies from all sectors</span>
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
            commodo suscipit tellus et pellentesque.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={4}>
            <Grid md={4} sm={12} item>
              <img
                style={{ maxWidth: "100%", borderRadius: 10 }}
                src={img2}
                alt="something"
              />
              <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
                Business strategy
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid md={4} sm={12} item>
              <img
                style={{ maxWidth: "100%", borderRadius: 10 }}
                src={img2}
                alt="something"
              />{" "}
              <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
                Business strategy
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid md={4} sm={12} item>
              <img
                style={{ maxWidth: "100%", borderRadius: 10 }}
                src={img2}
                alt="something"
              />{" "}
              <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
                Business strategy
              </Typography>
              <Typography variant="body1" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et,{" "}
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "capitalize" }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default NewsSection;
