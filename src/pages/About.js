import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "../components/Typography";
import DirectorsMessage from "../views/DirectorsMessage";
import MissionAndVision from "../views/MissionAndVision";
import img1 from "../assets/Screenshot_2.png";
import img2 from "../assets/Screenshot_3.png";
import img3 from "../assets/Screenshot_4.png";
import img4 from "../assets/office.JPG";
import Expertise from "../views/Expertise";
import Strategies from "../views/Strategies";
import Growth from "../views/Growth";
function About() {
  return (
    <Container sx={{ mb: 8 }} data-aos="fade-right">
      <Typography
        variant="h4"
        marked="center"
        align="center"
        component="h2"
        mb={4}
      >
        About Us
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "20px",
          marginBottom: 2,
        }}
      >
        <Grid item xs={12} md={6} data-aos="fade-right" data-aos-duration="1500">
          <Typography variant="body1" gutterBottom display="block">
            Ethics Advance Technology Limited Background Ethics Advance
            Technology Limited (EATL) is a leading private company with
            innovative ICT services and solutions provider in Bangladesh,
            established in 2000. EATL has developed partnership and
            collaborations with Bangladesh based IT companies, private sector
            organizations, NGOs, donors, Government, Universities and also some
            of the world most renowned IT expertise organization such as IBM,
            Sun Oracle (infrastructural partner), Prognoz, Six Dee Telecom
            Solutions, (business partner), Oracle (Gold Partner) and many others
            for developing technology and efficient solutions. EATL is a private
            enterprise and Social Change maker organization focused in ICT
            innovations for development and business sector. We are providing
            strategic information, technology solutions, knowledge management,
            web-based MIS & data management solution and mobile applications
            EATL has high quality professional team and partners both local &
            global.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left" data-aos-duration="1500">
          <img style={{ width: "100%", height: "300px" }} src={img4} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: 2 }} data-aos="fade-down" data-aos-duration="1000">
        <Grid item md={4} sm={12}>
          <img className="imgStyle" src={img1} />
        </Grid>
        <Grid item md={4} sm={12}>
          <img className="imgStyle" src={img2} />
        </Grid>
        <Grid item md={4} sm={12}>
          <img className="imgStyle" src={img3} />
        </Grid>
      </Grid>
      <Typography mt={2} gutterBottom>
        Our strong collaboration, strategic relationship, innovation, networking
        with higher government authorities, regulatory bodies and legislators
        differentiate us from other concerned companies operating in this
        industry of Bangladesh. Since inception, our dedication and diligence in
        remaining technically astute have been the key ingredients of EATL's
        success in several clients' engagements. We have thus been able to
        maintain long-term relationship with distinctions and pride. On the pave
        of emerging diversification of information technology, EATL's business
        strategy combines application support, system design, database
        administration, feasibility study, software development, hardware
        solution, training. Social media consultancy, mobile application
        development, Research & Development etc. EATL launched country's first
        ever mobile app store in October, 2012 branded as 'EATLApps', and most
        of the apps are in Bangla and local context based. We have payment
        integration with the three largest telecom operators (MNO) in Bangladesh
        for app purchase from mobile balance. The EATLApps store is also
        integrated with DBBL and bkash for payment processing.
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ p: 2, border: 1, mt: 3, borderColor: "primary.main" }}
      >
        <Grid item md={6} data-aos="fade-right" data-aos-duration="1500">
          <Expertise />
        </Grid>
        <Grid item md={6} data-aos="fade-left" data-aos-duration="1500">
          <Strategies />
        </Grid>
      </Grid>
      <MissionAndVision />
      <Growth />
    </Container>
  );
}

export default About;
