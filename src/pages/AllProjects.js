import * as React from "react";
import { Container, Box, Divider } from "@mui/material";
import Typography from "../components/Typography";

const Projects = [
  {
    name: "Support conducting online teaching-learning of undergraduate students of the Government Medical Colleges in Bangladesh",
    client: "World Health Organization (WHO), Bangladesh",
  },
];

function AllProjects() {
  return (
    <Container sx={{ mb: 8 }}>
      <Typography variant="h4" color="secondary">Our Projects</Typography>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4, borderColor: 'primary.main'}} data-aos="fade-down" data-aos-duration="1000">
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Support conducting online teaching-learning of undergraduate students
          of the Government Medical Colleges in Bangladesh
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>World Health Organization
          (WHO), Bangladesh
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          The main purpose of WHO funded Centre for MEdical Education (CME)'s
          assignment is to facilitate online teaching-learning for the
          undergraduate medical college students. 4000 students may join an
          online class as there are this number of students at each year in the
          public medical colleges. The functionalities are (i) Regular and
          real-time technical support to the officials, teachers and CME, (ii)
          User-friendly access to online class for the teacher and students,
          (iii) Class routine dissemination and online writing of examinations
          are performed in the system, (iv) Four classes of 1.5-hour duration
          may be held with around 4000 students, (v) Class end report,
          attendance report of teacher and students are shared with CME and WHO,
          (vi) Installation and configuration of the LMS, (vii) Technical
          support (remote or on-spot) to the teachers, and (viii) Archiving
          course materials to make them available to the students.
        </Typography>
      </Box>

      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4, borderColor: 'secondary.main'}}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Learning Management System (LMS) with online Class
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>BGC Trust Medical College
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          Edutube E-Learning Content Portal and Learning Management System (LMS)
          EATL launched country’s first e-learning web portal edutubebd.com in
          April 2015 where students of different academic levels and candidates
          of competitive examinations find supplementary educational contents.
          Laster on, we have integrated learning management system (LMS) with
          it. Edutube LMS enables taking online classes and recording attendance
          during the online classes.
        </Typography>
        <Typography>
          The following are the major features of Edutube platform: Teacher,
          student and management staff profile information Course and offered
          class information Sharing of course material with students along with
          hosting and download option Assignment upload and submission facility
          Real-time online quiz (MCQ or Question based) option Evaluation of
          assignment and quiz with marks recording Virtual classroom with
          moderation facility and class recording Attendance tracking based on
          students' virtual classroom presence Result processing with detail
          marks distribution in different components Performance Tracking of
          students Routine, online class scheduling and other material sharing
          Dashboard for different groups of users, secure, privacy preserving
          and customizable SMS and Email Notifications Bangla and English
          language support Availability of local support and maintenance service
          Already 7 medical colleges are using our LMS solution during this
          pandemic situation.
        </Typography>
      </Box>

      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4 ,borderColor: 'primary.main'}}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Development & Implementation of Examination Management System for
          National University
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>National University
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          The goal of the proposed Examination Management System (EMS) is to
          automate the entire process of the Examination Division to provide
          better services in a paperless environment to serve the students,
          staff and stakeholders of the University. It will reduce the result
          processing time to a minimum level and ensure transparency and
          accountability in the process through introduction of state-of-the-art
          data logging at all event points. The main parts of the EMS is to,
        </Typography>
        <Typography>
          Integrate the hall attendance & verification of examinee in a near
          real-time system; Make the process real time at site and to automate
          the script distribution to reduce current logistics and resources
          pressure; Automated result processing; Implement the result approval
          and correction system with highest level of security; Utilize the
          power of mobile application to collect data from remote locations and
          then store the data to the NU EMS server.
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4,borderColor: 'secondary.main' }}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Establish e-Library Management and Set up web based Medical Student
          Facilities Management
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>Directorate General of Medical
          Education (DGME), MoHFW
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          The aim of this project is to develop a (i) e-Library Management
          System (LMS) that can handle & manage the activities involved in a
          library in an efficient & reliable way and also develop a web-based
          (ii). Medical Student Facility Management System for all Public
          Medical Colleges and Dental Colleges to manage & monitor academic
          activities effectively. Both the system developed for 37 Medical
          Colleges and 8 Dental Unit. The following services included, (i)
          Design, development and implementation of Dynamic Web Portal, (ii)
          Mobile Application Development (Android and iOS), (iii) Design,
          development and implementation of Dashboard, (iv) Design & Development
          of a Medical Student Facility Management System, (v) Design &
          Development of a e-Library Management System, (vi) Supply and
          Delivered related hardware, (vii) Medical eBook & eJournal resource
          availability, (viii) Organize Workshop & Training, (ix) Provide 24
          months support services, and (x) SMS services possessing.
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4, borderColor: 'primary.main' }}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Software design and development for Educational Information Management
          to be used by MOE, BANBEIS, DSHE, DTE, DME, NTRCA and others with
          maintenance support for 3 (three) years
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>IEIMS, Bangladesh Bureau of
          Educational Information & Statistics (BANBEIS)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          BANBEIS, being a government organization in the education sector, has
          a mandate of establishing Integrated EIMS (IEIMS) through integration
          and storing of data of all stakeholders in the education sector. The
          project outlined for establishing an online automated and integrated
          education management system for Ministry of Education (Secondary and
          Higher Education Division and Madrasah and Technical Education
          Division), Directorate of Secondary and Higher Education (DSHE),
          Directorate of Technical Education (DTE), Directorate of Madrasah
          Education (DME), Directorate of Inspection & Audit (DIA), Bangladesh
          Bureau of Educational Information and Statistics (BANBEIS), nine
          general Boards of Intermediate and Secondary Education (BISEs),
          Bangladesh Madrasah Education board (BMEB), Bangladesh Technical
          Education Board (BTEB), District level and Upazila level Education
          Offices, Schools, Colleges, Madrasahs and Technical Education
          Institutions. There are 34 modules in IEIMS project and EATL is
          developing 13 modules that is known as Lot 3. The main objectives of
          the project are,
        </Typography>
        <Typography>
          Facilitate data collection from educational institutions under the
          organization mentioned above Manage overall activities of the
          institutions such as attendance and result processing Summary data and
          analytics generation for the education managers Data exchange among
          the stakeholders Creating a central repository of data at BANBEIS
          Every concerned organizations and users will have one-stop services of
          education information from BANBEIS
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4,borderColor: 'secondary.main'}}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Contract for Consultant’s Services For The Development Of E-Learning
          Modules For Six Subjects
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>Secondary Education Sector
          Investment Program (SESIP)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          Development of E-Learning Modules for Six Subjects for each class of
          VII and VIII This platform is accessible from any device including
          windows, android and IOS. The developed contents were installed
          locally in 640 ILC (IT Learning Center) throughout the country This
          project also includes training of the project staff and stakeholders
          EATL in house technical team developed the e-learning content.
        </Typography>
        <Typography>
          Facilitate data collection from educational institutions under the
          organization mentioned above Manage overall activities of the
          institutions such as attendance and result processing Summary data and
          analytics generation for the education managers Data exchange among
          the stakeholders Creating a central repository of data at BANBEIS
          Every concerned organizations and users will have one-stop services of
          education information from BANBEIS
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4 ,borderColor: 'primary.main'}}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Development of E-learning Campaign
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>Secondary Education Sector
          Investment Program (SESIP)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          The task was to aware the students, teachers, parents and broader
          public about the e-learning material development and plan, so that
          they visit the web-portal containing the developed e-learning contents
          under the SESIP project and use the content. A campaign throughout the
          country among the students, teachers and other stakeholders will
          ensure dissemination of the e-learning materials among them.
          Considering the audience, the campaign strategy must include all sorts
          of available channel such as event hosting, traditional marketing,
          social media ads and targeted marketing. Naturally the process will
          start with design and development of content, digitized campaign
          management platform and sustainability plan.
        </Typography>
        <Typography>
          Facilitate data collection from educational institutions under the
          organization mentioned above Manage overall activities of the
          institutions such as attendance and result processing Summary data and
          analytics generation for the education managers Data exchange among
          the stakeholders Creating a central repository of data at BANBEIS
          Every concerned organizations and users will have one-stop services of
          education information from BANBEIS
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4, borderColor: 'secondary.main' }}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Procurement of Development and supply of e-Manuals in Physics,
          Chemistry and Bangladesh & Global Studies
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>TQI-II Project of Directorate
          of Secondary and Higher Education, Ministry of Education
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          T Development of e-learning contents such as simulation, videos,
          animations, images, diagrams and interactive test for some selected
          chapters of 3 subject of class 9-10. Development and deployment of a
          web based e-learning platform to host the e-learning contents. This
          platform will be accessible from any platform including windows,
          android and IOS. This project also includes training of the project
          staff EATL in house technical team developing the e-learning content.
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4 ,borderColor: 'primary.main'}}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Procurement of Contextualization and Supply of e-Learning Resources
          for Grade 9-10 Subjects Physics, Chemistry and Biology
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>TQI-II Project of Directorate
          of Secondary and Higher Education, Ministry of Education
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          T Development of e-learning contents such as simulation, videos,
          animations, images, diagrams and interactive test for some selected
          chapters of 3 subject of class 9-10. Development and deployment of a
          web based e-learning platform to host the e-learning contents. This
          platform will be accessible from any platform including windows,
          android and IOS. This project also includes training of the project
          staff EATL in house technical team developing the e-learning content.
        </Typography>
      </Box>
      <Box data-aos="fade-down" data-aos-duration="1000" sx={{ p: 4, borderLeft: 10, mb: 4 ,borderColor: 'secondary.main'}}>
        <Typography
          variant="h4"
          color="primary.main"
          fontSize="35px"
          gutterBottom
        >
          Development of Web Based Automation System for the Educational
          Institutions & Directorate of Inspection and Audit (DIA)
        </Typography>
        <Typography fontWeight="bold" mb={2}>
          <span className="span">Client : </span>Directorate of Inspection and
          Audit (DIA)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography>
          T The purpose of the development of Web Based Automation System which
          is the electronic processing of the DIA’s overall inspection and audit
          activities allows to publish, communicate, access, receive and submit
          all related information and documentation via Internet. Through this
          automated system DIA can monitor the overall activities of the 36000
          institutions centrally and abiding of the government rules and
          regulations, proper utilization of government fund and improvement of
          the quality education.
        </Typography>
      </Box>
    </Container>
  );
}

export default AllProjects;
