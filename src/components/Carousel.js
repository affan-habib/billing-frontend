import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Typography, Stack } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={true}
        navigation={true} modules={[Navigation]} className="mySwiper"
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
       
      >
        <SwiperSlide>
          <Stack
            sx={{ bgcolor: "white", width: "100%", height: 100, color: "secondary.light" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AcUnitIcon color="#fba500"/>
            <Typography variant="h6" color="#fba500" gutterBottom>
              World Bank
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            sx={{ bgcolor: "white", width: "100%", height: 100, color: "white" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AcUnitIcon color="#fba500"/>
            <Typography variant="h6" color="#fba500" gutterBottom>
              Health Ministry
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            sx={{ bgcolor: "white", width: "100%", height: 100, color: "white" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AcUnitIcon color="#fba500"/>
            <Typography variant="h6" color="#fba500" gutterBottom>
              Invoice
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            sx={{ bgcolor: "white", width: "100%", height: 100, color: "white" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AcUnitIcon color="#fba500"/>
            <Typography variant="h6" color="#fba500" gutterBottom>
              Invoice
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            sx={{ bgcolor: "white", width: "100%", height: 100, color: "white" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AcUnitIcon color="#fba500"/>
            <Typography variant="h6" color="#fba500" gutterBottom>
              Invoice
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            sx={{ bgcolor: "white", width: "100%", height: 100, color: "white" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <AcUnitIcon color="#fba500"/>
            <Typography variant="h6" color="#fba500" gutterBottom>
              Invoice
            </Typography>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
