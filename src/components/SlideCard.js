import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SlideCard({imgsrc}) {
  return (
    <Box boxShadow={5} mb={4} sx={{bgcolor: "primary.light"}}>
      <Card sx={{ maxWidth: 350, boxShadow: 0 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={imgsrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="left">
          Business strategy{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "capitalize" ,mb:2, ml:1}}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}
