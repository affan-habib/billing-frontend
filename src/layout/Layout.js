import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Box } from "@mui/material";
import Billing from "../pages/billing/Billing";
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
  background:  #fff;
  border: 1px solid black;
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: tomato;
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
      <Box sx={{ mx: "auto", width: "100%", py: 1, bgcolor: "green" }}>
        <TabsList sx={{ mx: "auto" }}>
          <Tab>Billing</Tab>
          <Tab>Sales</Tab>
          <Tab>Customers</Tab>
          <Tab>Items</Tab>
          <Tab>About</Tab>
        </TabsList>
      </Box>
      <TabPanel value={0}>
        <Billing />
      </TabPanel>
      <TabPanel value={1}>Profile page</TabPanel>
      <TabPanel value={2}>Language page</TabPanel>
    </TabsUnstyled>
  );
}
