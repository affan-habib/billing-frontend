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
import Loader from "../components/Loader";
import { LogoutOutlined } from "@mui/icons-material";
import Cookies from "js-cookie";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: gray;
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: red;
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
  padding: 20px 12px;
  background:  #e2ffff;
  border: 1px solid black;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: #ccf8f8;
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
          bgcolor: "#e2ffff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <img
            className="logo"
            src="https://cdn.pixabay.com/photo/2016/01/21/21/23/rose-1154830__340.png"
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
          <Paper sx={{ minHeight: "93vh", bgcolor: "#e2ffff" }}>
            <Billing />
          </Paper>
        </React.Suspense>
      </TabPanel>
      <TabPanel value={1} index={1}>
        <Paper sx={{ padding: 2, bgcolor: "#e2ffff", minHeight: "93vh" }}>
          <Sales />
        </Paper>
      </TabPanel>
      <TabPanel value={2} index={2}>
        <Paper sx={{ padding: 2, bgcolor: "#e2ffff", minHeight: "93vh" }}>
          <Customers />
        </Paper>
      </TabPanel>
      <TabPanel value={3} index={3}>
        <Paper sx={{ padding: 2, bgcolor: "#e2ffff", minHeight: "93vh" }}>
          <Products />
        </Paper>
      </TabPanel>
    </TabsUnstyled>
  );
}
