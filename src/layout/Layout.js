import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Billing from "../pages/billing/Billing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import PrivateOutlet from "../components/PrivateOutlet";
import Sales from "../pages/sales/Sales";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Customers from "../pages/customers/Customers";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Settings from "../pages/settings/Settings";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 20,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MuiAppBar position="fixed" open={open}>
        <Toolbar sx={{ flexDirection: "row" }}>
          <Box sx={{ marginLeft: open ? `${drawerWidth}px` : 0, flex: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1, alignItem: "right" }}>
            <Button
              startIcon={<LogoutOutlined />}
              variant="outlined"
              sx={{
                alignSelf: "flex-right",
                height: 30,
                borderRadius: 10,
                color: "white",
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
        </Toolbar>
      </MuiAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ flex: 1, ml: 4 }}>
            <img
              className="logo"
              src="https://res.cloudinary.com/dhijllt3x/image/upload/v1673153134/g5qlasljhnnj4ks8jmam.png"
            />
          </Box>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/billing" element={<PrivateOutlet />}>
            <Route path="" element={<Billing />} />
          </Route>
          <Route path="/sales" element={<PrivateOutlet />}>
            <Route path="" element={<Sales />} />
          </Route>
          <Route path="/customers" element={<PrivateOutlet />}>
            <Route path="" element={<Customers />} />
          </Route>
          <Route path="/products" element={<PrivateOutlet />}>
            <Route path="" element={<Products />} />
          </Route>
          <Route path="/about" element={<PrivateOutlet />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/settings" element={<PrivateOutlet />}>
            <Route path="" element={<Settings />} />
          </Route>
        </Routes>
      </Main>
    </Box>
  );
}

var routes = ["billing", "sales", "products", "customers", "about", "settings"];
