import React from "react";
import { Button, Container, Grid, Stack, Box } from "@mui/material";
import Typography from "../components/Typography";
import { TextField } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
function Contact() {
  return (
    <Container sx={{ mb: 8 }}>
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "20px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} data-aos="fade-left" data-aos-duration="1000">
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            align="center"
          >
            <Typography variant="h4" component="h3" color="primary">
              Contact Us
            </Typography>
            <Typography fontweight="bold" variant="subtitle1">
              Ethics Advance Technology LTD
            </Typography>
            <Box>
              <Stack direction="column" spacing={2} justifyContent="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CallIcon fontSize="small" />
                  <span style={{ marginLeft: "10px" }}> +024541448</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FacebookIcon fontSize="small" />
                  <span style={{ marginLeft: "10px" }}> facebook.com/eatl</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmailIcon fontSize="small" />
                  <span style={{ marginLeft: "10px" }}> info@eatlbd.com</span>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-right" data-aos-duration="1000">
          <Stack direction="column" spacing={2}>
            <Typography fontSize="30px" color="primary.main" variant="h3">
              Send us a message
            </Typography>
            <Typography variant="body1" display="block">
              We will contact you as soon as possible.
            </Typography>
            <TextField
              id="filled-required"
              label="Your Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="filled-required"
              label="Your Email"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="filled-required"
              label="Your Message"
              variant="outlined"
              fullWidth
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 5, borderRadius: 0, elevation: 0 }}
            >
              Send
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={12} data-aos="fade-down" data-aos-duration="1000">
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.853328729751!2d90.4274046147697!3d23.82381408455325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79e609ca88b%3A0xfb4ce8cee33a3173!2sEthics%20Advance%20Technology%20Limited!5e0!3m2!1sen!2sbd!4v1648550161706!5m2!1sen!2sbd"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
