import { Card, Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const partners = [
  "Ministry of Health",
  "BGC trust college",
  "National board of Revenue",
  "Dhaka WASA",
  "Desco",
  "SEQAEP",
];

function PartnersAndClients() {
  return (
    <Container
      sx={{ mt: 8, mb: 8 }}
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        sx={{ mb: 4 }}
        color="secondary.main"
      >
        Partners and Clients
      </Typography>
      <Typography variant="body1" align="center">
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Typography>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Card
              data-aos="flip-left"
              data-aos-duration="1500"
              variant="outlined"
              sx={{
                height: 100,
                width: "100%",
                marginBottom: 4,
                marginTop: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                bgcolor: "secondary.main",
                padding: "10px",
                borderRadius: "0",
                "&:hover": {
                  cursor: "pointer",
                  bgcolor: "primary.main",
                  boxShadow: 3,
                },
              }}
            >
              <Typography
                p={2}
                sx={{
                  fontweight:"regular",
                  "&:hover": {
                    border: "2px solid white",
                  },
                }}
              >
                {partner}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default PartnersAndClients;
