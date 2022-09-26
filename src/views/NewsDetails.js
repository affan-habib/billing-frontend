import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import news3 from "../assets/news/3.jpg";
import news2 from "../assets/news/2.jpg";
function NewsDetails() {
  return (
    <Container sx={{ mb: 8, mt: 2 }}>
      <Typography variant="h3" color="secondary.main" mb={4}>
        Ethics Advanced Technology Limited (EATL) has launched Bangladesh First
        educational content sharing portal
      </Typography>
      <Grid container spacing={4}>
        <Grid item md={6} sm={12}>
          <Typography>
            In this occasion honorable Education Minister of Government of
            Republic Bangladesh, Mr. Nurul Islam Nahid was present as the chief
            guest. Professor Dr. Jamilu reza Chwodhury, VC University of Asia
            Pacific was present as special guest. Mr. Jamiulr Reza Chowdhury has
            always provided his positive response, valuable advice, support and
            co-operation to every initiative of EATL. Prime Minister’s Office
            Director Nilufar Ahmed was present as Guest of Honor. MP Zunaid
            AHmed Palak, ICT Division was present as special guest. Managing
            Director, and Chairman EATL, Mr. M A Mubin Khan was also present in
            the panel
            <br />
            edutubebd is one of the key initiative of Ethics Advanced Technology
            Limited (EATL) for the development of country’s education sector to
            change them in a different level. It is the only education portal
            focused on local context and syllabus. In this portal anyone can
            have an account or subscribe for free. Then any student, teachers,
            parents or guardians can log in to upload their education materials
            & anyone can download to access.
            <br />
            EATL is one of the country’s leading ICT Company. It does enormous
            innovation in case of technology based projects, products, solutions
            and services. It has launched country’s first mobile apps store in
            Bangladesh named eatlapps.com. In 2016 it is going to launch,
            country’s first Bangladeshi educational content sharing portal named
            ‘edutube’ at www.edutubebd.com.
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <img className="img-responsive" src={news2} />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt: 2}}>
        <Grid item md={6} sm={12}>
          <img className="img-responsive" src={news3} />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography>
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
            <br />
            At present, students of the secondary, higher secondary or
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default NewsDetails;
