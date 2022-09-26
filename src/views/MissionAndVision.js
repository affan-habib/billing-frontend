import React from "react";
import Typography from "../components/Typography";

function MissionAndVision() {
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Typography fontSize={35} variant="h4"  mt={2} color="primary.main">
        Our Mission
      </Typography>
      <Typography gutterBottom>
        Vision To create a more productive, efficient and environment-friendly
        society by leveraging Information Technology and Software Engineering
        tools
      </Typography>
      
      <Typography fontSize={35} variant="h4" mt={2} color="primary.main">
        Our Vision
      </Typography>
      <ul>
        <li>
          To utilize our resources for building innovative solutions using web
          and mobile technology for growth sectors that have direct impact on
          development;
        </li>
        <li>
          To constantly explore and examine cutting-edge technology and tools
          for developing solutions to respond to customer's needs in an
          effective and efficient way;
        </li>
        <li>
          To broaden our customer base globally specially in the neighboring
          countries through continuous product development, quality improvement
          and technical excellence
        </li>
      </ul>
    </div>
  );
}

export default MissionAndVision;
