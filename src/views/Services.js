import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
const services = [
  {
    name: "Web Applications",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055666.png",
  },
  {
    name: "Location Based Services",
    icon: "https://cdn-icons-png.flaticon.com/128/2928/2928883.png",
  },
  {
    name: "IT consulting Services",
    icon: "https://cdn-icons-png.flaticon.com/128/6802/6802091.png",
  },
  {
    name: "Graphic Design",
    icon: "https://cdn-icons-png.flaticon.com/128/2779/2779775.png",
  },
  {
    name: "Mobile Applications",
    icon: "https://cdn-icons-png.flaticon.com/128/3437/3437364.png",
  },
  {
    name: "SMS gateway",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733533.png",
  },
  {
    name: "Call Center Setup",
    icon: "https://cdn-icons-png.flaticon.com/128/4789/4789117.png",
  },
  {
    name: "Dynamic Website",
    icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-website-resume-flaticons-lineal-color-flat-icons-2.png",
  },
];
function Services() {
  return (
    <Container sx={{ mt: 8, mb: 4 }} data-aos="fade-right" data-aos-duration="1500">
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
        color="secondary.main"
      >
        Services We Provide
      </Typography>
      <Typography
        variant="subtitle1"
        color="secondary.main"
        gutterBottom
        align="center"
      >
        We are building software solution that solves your business challenges
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </Grid>
    </Container>
  );
}

const ServiceCard = ({ service }) => {
  return (
    <Grid item md={3} xs={12}>
      <Box
        sx={{
          bgcolor: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
          transition: 1,
          color: "secondary.dark",
          "&:hover": {
            cursor: "pointer",
            bgcolor: "secondary.main",
            color: "white",
            transition: "smooth",
            boxShadow: 4,
          },
        }}
      >
        <img style={{ width: "50px", height: "auto" }} src={service.icon} />
        <Typography
          color="white"
          align="center"
          variant="body1"
          gutterBottom
          mt={2}
        >
          {service.name}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Services;
