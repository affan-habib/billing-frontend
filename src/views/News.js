import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Typography from "../components/Typography";
import "swiper/css/navigation";
import news1 from "../assets/news/1.jpg";
import news2 from "../assets/news/2.jpg";
import news3 from "../assets/news/3.jpg";

const news = [
  {
    title: "Eatl Event Title Goes here",
    detail:
      "Here is the little details about the recent event from eatl.We are making things better",
    img: { news1 },
  },
  {
    title: "News title",
    detail: "si fhuhfue feigig negiha eg iauheigu aeugh iaeg",
    img: { news2 },
  },
  {
    title: "News title",
    detail: "si fhuhfue feigig negiha eg iauheigu aeugh iaeg",
    img: { news3 },
  },
];

export default function News() {
  return (
    <Container
      sx={{ mt: 2, mb: 4 }}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        mb={4}
        color="secondary.main"
      >
        Latest News
      </Typography>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
        <Grid item md={4} sm={6}>
          <SlideCard />
        </Grid>
      </Grid>
    </Container>
  );
}

const SlideCard = ({ img, title, detail }) => {
  return (
    <Box mb={4} sx={{ bgcolor: "primary.light" }}>
      <Card variant="outlined" sx={{ boxShadow: 0 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src={news3}
        />
        <CardContent>
          <Typography color="secondary.main" gutterBottom variant="h5" fontWeight={500} component="h3" align="left">
            {news[0].title}
          </Typography>
          <Typography variant="body1" align="left">
            {news[0].detail}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            href='/news-details'
            sx={{
              textTransform: "capitalize",
              mb: 2,
              ml: 1,
              borderRadius: 0,
              boxShadow: 0,
            }}
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
