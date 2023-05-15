import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { setMode, setSearchInput } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const Navbar = ({ setisMenuBarOpen, setIsCartBarOpen }) => {
  // console.log("Navbar function called");
  const productsQuantity = useSelector((store) => store.state.cart.length);
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchInput = (e) => {
    dispatch(setSearchInput(e.target.value));
    navigate("./products");
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Toolbar>
          <Box
            display="flex"
            width="50%"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "70%",
              },
            }}
          >
            <IconButton
              aria-label="menu"
              sx={{ color: theme.palette.primary.main }}
              onClick={() => setisMenuBarOpen(true)}
            >
              <MenuIcon
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.2rem",
                  },
                }}
              />
            </IconButton>
            <InputBase
              sx={{
                ml: "5px",
                backgroundColor: theme.palette.background.main,
                flexGrow: "1",
                "& > input": {
                  padding: "0 10px",
                },
              }}
              placeholder="Search for products"
              onChange={searchInput}
            />
          </Box>
          <Box
            textAlign="right"
            width="50%"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "30%",
              },
            }}
          >
            <IconButton onClick={() => dispatch(setMode())} sx={{
                color: theme.palette.primary.main,
                [theme.breakpoints.down("sm")]: {
                  padding: "3px",
                },
              }}>
              {theme.palette.mode === "dark" ? (
                <LightModeOutlined  />
              ) : (
                <DarkModeOutlined  />
              )}
            </IconButton>

            <IconButton
              onClick={() => setIsCartBarOpen(true)}
              sx={{
                color: theme.palette.primary.main,
                [theme.breakpoints.down("sm")]: {
                  padding: "3px",
                },
              }}
            >
              <Badge
                badgeContent={productsQuantity}
                color="primary"
                invisible={productsQuantity === 0 ? true : false}
                sx={{
                  "& > .css-wde3ga-MuiBadge-badge": {
                    color: "#fff",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1.2rem",
                    },
                  }}
                />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
