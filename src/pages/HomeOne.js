import * as React from "react";
import Header from "../views/Header";
import News from "../views/News";
import Products from "../views/Products";
import Projects from "../views/Projects";
import Services from "../views/Services";
import PartnersAndClients from "../views/PartnersAndClients";
import themeCustom from "../themeCustom";
import { ThemeProvider } from "@mui/material/styles";

function HomeOne() {
  return (
    <>
      <ThemeProvider theme={themeCustom}>
        <Header />
        <Projects />
        <Services />
        <Products />
        <PartnersAndClients />
      </ThemeProvider>
    </>
  );
}

export default HomeOne;
