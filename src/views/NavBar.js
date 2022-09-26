import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Container, Stack } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function NavBar(props) {
  return (
    <>
      <Box sx={{ bgcolor: "primary.main" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <a
              className="topnavlink"
              href="https://www.facebook.com/Ethics-Advance-Technology-Ltd-431994670167861/"
              target="_blank"
            >
              <FacebookIcon
                fontSize="small"
                sx={{
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                    color: "rgb(189, 243, 158)",
                  },
                }}
              />
            </a>
            <a
              className="topnavlink"
              href="https://www.youtube.com/c/Edutubebd/"
              target="_blank"
            >
              <YouTubeIcon
                fontSize="small"
                sx={{
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                    color: "rgb(189, 243, 158)",
                  },
                }}
              />
            </a>
          </Stack>
          <Stack
            direction="row"
            spacing={6}
            justifyContent="center"
            alignItems="center"
            sx={{ height: 35 }}
          >
            <a
              className="topnavlink"
              href="https://www.edutubebd.com/"
              target="_blank"
            >
              Edutube
            </a>
            <a className="topnavlink" href="http://eihlbd.com/" target="_blank">
              Innovation Hub
            </a>
            <a
              className="topnavlink"
              href="https://eatlbd.com/webmail"
              target="_blank"
            >
              Webmail
            </a>
          </Stack>
        </Container>
      </Box>
      <ResponsiveAppBar />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
