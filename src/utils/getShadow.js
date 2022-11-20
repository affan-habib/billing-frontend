import PropTypes from "prop-types";

// ==============================|| CUSTOM FUNCTION - COLOR SHADOWS ||============================== //

const getShadow = (theme, shadow) => {
  switch (shadow) {
    case "secondary":
      return theme.customShadows.secondary;
    case "error":
      return theme.customShadows.error;
    case "warning":
      return theme.customShadows.warning;
    case "info":
      return theme.customShadows.info;
    case "success":
      return theme.customShadows.success;
  }
};

getShadow.propTypes = {
  theme: PropTypes.object,
  shadow: PropTypes.string,
};

export default getShadow;
