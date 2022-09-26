import { Box, Card, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Typography from "../components/Typography";
import edutube from "../assets/products/1.jpg";
import Products from "../views/Products";
import edu1 from "../assets/edu-1.png";
import edu2 from "../assets/edu-2.png";
const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    marginTop: 60,
    padding: 40,
  },
  imgContainer: {
    width: "200px",
    position: "absolute",
    top: -50,
    left: 40,
  },
  imgStyle: {
    width: "100%",
    height: "auto",
  },
});

function AllProducts() {
  const classes = useStyles();

  return (
    <Container sx={{ mb: 8 }} data-aos="fade-down" data-aos-duration="1000">
      <Paper
        variant="outlined"
        className={classes.container}
        sx={{ boxShadow: 1 }}
      >
        <div className="custombg4">
          <Card variant="outlined" className={classes.imgContainer}>
            <img src={edutube} alt="edutube" className={classes.imgStyle} />
          </Card>
          <Typography
            sx={{ marginTop: "50px", mb: 2 }}
            variant="h3"
            color="secondary.main"
          >
            Edutube
          </Typography>
          <Typography variant="body1">
            Ethics Advanced Technology Limited (EATL) has launched Bangladesh
            First educational content sharing portal www.edutubebd.com on 11 am
            of 29 march, 2016, Tuesday at the Pan pacific hotel Sonargaon of the
            capital Dhaka, Bangladesh.
            <br />
            In this occasion honorable Education Minister of Government of
            Republic Bangladesh, Mr. Nurul Islam Nahid was present as the chief
            guest. Professor Dr. Jamilu reza Chwodhury, VC University of Asia
            Pacific was present as special guest. Mr. Jamiulr Reza Chowdhury has
            always provided his positive response, valuable advice, support and
            co-operation to every initiative of EATL. Prime Minister’s Office
            Director Nilufar Ahmed was present as Guest of Honor. MP Zunaid
            AHmed Palak, ICT Division was present as special guest. Managing
            Director, and Chairman EATL, Mr. M A Mubin Khan was also present in
            the panel.
          </Typography>
          <Grid container spacing={3} sx={{mb: 2 , mt: 2 }}>
            <Grid item md={6}>
              <img className="img-responsive" src={edu1} />
            </Grid>
            <Grid item md={6}>
              <img className="img-responsive" src={edu2} />
            </Grid>
          </Grid>
          <Typography>
            edutubebd is one of the key initiative of Ethics Advanced Technology
            Limited (EATL) for the development of country’s education sector to
            change them in a different level. It is the only education portal
            focused on local context and syllabus. In this portal anyone can
            have an account or subscribe for free. Then any student, teachers,
            parents or guardians can log in to upload their education materials
            & anyone can download to access.
            <br />
            Online learning cannot replace traditional learning system in
            Bangladesh. It requires time. As a student’s original learning
            pattern in Bangladesh is material based. Therefore sharing is very
            important to step towards the change. Adoption of online learning
            process needs to start. Majority students of Bangladesh lacks from
            many education facilities, contents, lectures, notes, demonstration
            because of proper guidance, support & infrastructure. Few affluent
            students get touch of excellent education materials mostly in urban
            areas. With the help of technology, we can build a platform where
            these facilitated students, well known teachers will provide their
            materials absolutely free just to help & enhance another student who
            couldn't access it because of location & affordability.
            <br /> At present, students of the secondary, higher secondary or
            universities attend class lectures given by their class teachers or
            they take notes from private tutors, and in urban areas sometimes
            they share their electronic version of the content through emails or
            flash-drive. The exchange of contents remain in the close circle of
            students and the life cycle of the contents ends when the students
            move to new classes. Sometimes the lecture notes or books are kept
            at family level for the younger members in the family. However,
            these notes prepared with extensive labor, care, and attention could
            serve wider audiences and help other student better prepared their
            lessons. In this era of communication technology, there have been
            couple of alternative ways to help the students with their study in
            addition to the traditional teacher driven education systems. Among
            them, there are couple of ICT based solution such as Khan Academy,
            Udemy, etc. available which are suitable mostly for the students of
            the western countries. In Bangladesh, an ICT based educational
            content sharing platform is very essential which will focus on
            students and context of Bangladesh, and deliver contents to the
            students in different academic levels.
            <br />
            Edutube comes with unlimited storage capacity for a user which is
            different than any free A drive or dropbox. It will support all
            format of a content like image, word, pdf, presentation, video file
            as long as the content in retrievable or readable by general user.
            Teachers will be able to take online classes & user students will be
            able to join the session live. Once a user has opened an account and
            wants to upload a content, first it will come to site Quality
            Assurance team just to check - Firstly, It is an educational
            content, not nudity, vulgarity to prevent hackers ill motivation,
            Secondly it’s not anything encouraging cheating or plagiarism at the
            national level. After proper evaluation & approval from quality
            assurance the content will be up & live in the site within 24 hours.
            You may also able to find hundreds of educational contents, 2016 HSC
            suggestions currently at
          </Typography>
        </div>
        <Products />
      </Paper>
    </Container>
  );
}

export default AllProducts;
