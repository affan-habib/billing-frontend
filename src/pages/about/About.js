import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Faq from "./Faq";

const About = () => {
  return (
    <Paper sx={{ my: 2, p: 2, pt: 0 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item md={6}>
          <Paper sx={{ minHeight: 400, bgcolor: "#f5f9f0" }} square>
            <Typography
              sx={{ pt: 2, ml:2, textTransform: "uppercase" }}
              variant="h5"
            >
              About this sofware
            </Typography>
            <Divider sx={{ mt: 2 }} />
            <Typography sx={{ p: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              volutpat varius leo. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi quis ultricies nisi. Morbi sit amet erat
              dui. Nunc sit amet tincidunt felis. Sed porttitor quam eu
              elementum fringilla. Donec tempus finibus sodales. Quisque laoreet
              tellus feugiat vestibulum facilisis. Mauris eleifend lorem
              imperdiet, feugiat purus non, sodales elit. Aliquam vitae orci
              ipsum. Nunc sed est eget mauris fermentum blandit sit amet eu
              sapien. Suspendisse potenti. Mauris tincidunt nisi sed neque
              vestibulum, et ornare erat molestie. Donec nec varius odio. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Phasellus mi mauris, convallis ut aliquam vitae,
              semper vitae augue. Aliquam quis tincidunt mi. Morbi ante nulla,
              faucibus ut blandit non, hendrerit pellentesque sapien. Praesent
              scelerisque venenatis erat. Vestibulum vitae felis condimentum,
              elementum ipsum id, tempor augue. Quisque eget erat velit. Mauris
              id porttitor leo. Vestibulum nec ipsum commodo, dignissim neque
              at, sodales nulla. Donec rhoncus hendrerit turpis, laoreet dictum
              elit iaculis quis. Etiam lectus purus, mollis sit amet consequat
              ac, fermentum et ante. In euismod ligula in feugiat dictum. Nam
              iaculis, tellus vitae consequat euismod, ligula massa consectetur
              lorem, eu porttitor mi ex dignissim augue. Donec quis quam sit
              amet nulla sagittis finibus. Curabitur vel lacinia ex. Sed at ante
              sit amet metus venenatis placerat a in turpis. Pellentesque
              finibus magna varius elit fringilla, vitae scelerisque dui
              hendrerit.
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper sx={{ minHeight: 400, bgcolor: "#f5f9f0" }} square>
            <Typography
              sx={{ pt: 2, ml:2, textTransform: "uppercase" }}
              variant="h5"
            >
              Frequently Asked Questions
            </Typography>
            <Divider sx={{ mt: 2 }} />
            <Faq />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
