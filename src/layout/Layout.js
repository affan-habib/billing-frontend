import * as React from "react";
import Cookies from "js-cookie";
import useAuth from "../hooks/useAuth";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { styled, useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItemText,
  Divider,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import IconButton from "@mui/material/IconButton";
import { LogoutOutlined } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import Billing from "../pages/billing/Billing";
import PrivateOutlet from "../components/PrivateOutlet";
import Register from "../pages/register/Register";
const Home = React.lazy(() => import("../pages/home/Home"));
const Settings = React.lazy(() => import("../pages/settings/Settings"));
const Sales = React.lazy(() => import("../pages/sales/Sales"));
const About = React.lazy(() => import("../pages/about/About"));
const Products = React.lazy(() => import("../pages/products/Products"));
const Customers = React.lazy(() => import("../pages/customers/Customers"));
const Login = React.lazy(() => import("../pages/login/Login"));
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
  const auth = useAuth();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
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
          {auth && (
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
          )}
        </Toolbar>
      </AppBar>
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
          <Box sx={{ flex: 1, ml: 4 }} component={Link} to="/">
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
              <ListItemButton component={Link} to={text}>
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
      <React.Suspense fallback={Loader}>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
            <Route path="dashboard" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateOutlet />}>
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
      </React.Suspense>
    </Box>
  );
}

var routes = ["billing", "sales", "products", "customers", "about", "settings"];
