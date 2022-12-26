import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Box, Button, Paper } from "@mui/material";
import Billing from "../pages/billing/Billing";
import Sales from "../pages/sales/Sales";
import Customers from "../pages/customers/Customers";
import Products from "../pages/products/Products";
import About from "../pages/about/About";
import Loader from "../components/Loader";
import { LogoutOutlined } from "@mui/icons-material";
import Cookies from "js-cookie";
import { blueGrey } from "@mui/material/colors";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: ${blueGrey[600]};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  &:hover {
    background-color: ${blueGrey[300]};
    color: #fff;
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blueGrey[600]};
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  max-width: 600px;
  `
);

export default function UnstyledTabsIntroduction() {
  return (
    <TabsUnstyled defaultValue={0}>
      <Box
        sx={{
          mx: "auto",
          width: "100%",
          py: 1,
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            className="logo"
            src="https://res.cloudinary.com/dhijllt3x/image/upload/v1672038338/gjqpp8bfqtzlh2ydnvlb.png"
          />
        </Box>
        <TabsList sx={{ flex: 8 }}>
          <Tab>Billing</Tab>
          <Tab>Sales</Tab>
          <Tab>Customers</Tab>
          <Tab>Items</Tab>
          <Tab>About</Tab>
        </TabsList>
        <Box sx={{ flex: 1 }}>
          <Button
            startIcon={<LogoutOutlined />}
            variant="outlined"
            color="error"
            sx={{
              height: 30,
              my: "auto",
              borderRadius: 10,
              float: "right",
            }}
            onClick={() => {
              Cookies.remove("accessToken");
              window.location.reload();
            }}
          >
            LOGOUT
          </Button>
        </Box>
      </Box>
      <TabPanel value={0} index={0}>
        <React.Suspense fallback={<Loader />}>
          <Paper>
            <Billing />
          </Paper>
        </React.Suspense>
      </TabPanel>
      <TabPanel value={1} index={1}>
        <Paper sx={{ padding: 2 }}>
          <Sales />
        </Paper>
      </TabPanel>
      <TabPanel value={2} index={2}>
        <Paper sx={{ padding: 2 }}>
          <Customers />
        </Paper>
      </TabPanel>
      <TabPanel value={3} index={3}>
        <Paper sx={{ padding: 2 }}>
          <Products />
        </Paper>
      </TabPanel>
      <TabPanel value={4} index={4}>
        <Paper sx={{ padding: 2 }}>
          <About />
        </Paper>
      </TabPanel>
    </TabsUnstyled>
  );
}
