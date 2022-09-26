import { Container, Grid } from "@mui/material";
import React from "react";
import Typography from "../components/Typography";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import md from "../assets/md.jpg";
function Services() {
  return (
    <>
      <Typography
        color="primary.main"
        variant="h4"
        marked="center"
        align="center"
      >
        Message from the Director
      </Typography>
      <Box
        sx={{ mt: 2, mb: 8, p: 6 }}
        className="custombg"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Avatar alt="Remy Sharp" src={md} sx={{ width: 100, height: 100 }} />
          <Typography
            color="secondary.main"
            mt={2}
            variant="h4"
            fontSize="30px"
          >
            Mubin Khan
          </Typography>
          <Typography color="black" fontWeight="bold" mb={4}>
            Managing Director, Ethics Advance Technology Ltd
          </Typography>
          <Divider />
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              color: "primary",
              ml: 10,
              mr: 10,
            }}
          >
            For any company, the drive for sustainability begins with desired
            performance and results, adhering to commitments and technological
            innovation. The last several years Ethics Advanced Technology
            Ltd.(EATL) has been working on these aspects and focusing on
            customer satisfaction. I believe in the technically qualified
            resources that we manage. I believe in the products and software
            services which we offer to meet our client needs. I believe in our
            employees, whose energy and ingenuity continue to drive our company
            forward. I believe in quality as well as approach for continous
            improvement. I honour the commitments with our partners and
            community. But belief is not enough to realize a vision. We must be
            willing and able to turn words into action and achieve results. Each
            of our divisions/Practices/teams are working on executing the tasks
            not only to complete it but also to substantially improve the
            process with more benefits to end customer We understand that
            long-term success depends on our ability to generate superior
            returns to our customers and driving thru innovations for sustained
            growth.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Services;
