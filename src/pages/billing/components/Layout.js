import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Billing from "../Billing";
import { Purchage } from "./purchage/Purchage";
import Products from "./products/Products";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            background: "#FDE0D9",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="NEW BILL" {...a11yProps(0)} />
            <Tab label="SALES" {...a11yProps(1)} />
            <Tab label="PURCHAGE" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Billing />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Purchage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Products />
        </TabPanel>
      </Box>
    </Box>
  );
}
