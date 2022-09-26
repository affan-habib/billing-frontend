import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
export default function Header() {
  const banners = [banner1, banner2, banner3];
  return (
    <Carousel indicators={true} animation="fade" slide={1000}>
      {banners.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "grey"
      }}
    >
      <img
        alt={props.item.title}
        src={props.item}
        style={{ width: "100%", height: "450px", opacity: 0.9 }}
      />
      <Typography align="right"  variant="h2" color="warning.main" sx={{ position: "absolute", bottom:40, right: 70 }}>
        Business Heading 
        <span style={{display: "block", align: "right"}}>appear with a subheading</span>
      </Typography>
    </Box>
  );
}
