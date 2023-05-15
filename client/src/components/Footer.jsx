import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { memo } from "react";
// import { Link, Navigate } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4,1fr)"
      padding="0rem 3rem"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color:theme.palette.mode==="dark"?"#fff !important":"black",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns:"repeat(2,1fr)"
        },
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns:"repeat(1,1fr)"
        },
      }}
    >
      <Box>
        <List>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>Contact Us</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>FAQ</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>Blogs</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>
                Terms & Conditions
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>
                PLACE RETURNS/EXCHANGE RATE
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>
                RETURNS & EXCHANGE POLICY
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px" }}>
                TRACK YOUR ORDER
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px", letterSpacing: "8px" }}>
                CUSTOMER CARE
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pb: 0 }}>
            <ListItemText>
              <Typography sx={{ fontSize: "13px" }}>
                Timings:10 AM -6.00 PM(Mon-sat)
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ pt: 0 }}>
            <ListItemText>
              <Typography sx={{ fontSize: "13px" }}>
                Call: +91 5656565656
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "12px" }}>
                Email: support@gmail.com
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "14px", letterSpacing: "8px" }}>
                SIGNUP AND SAVE
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography sx={{ fontSize: "12px" }}>
                Sign up now and be the first to know latest exclusive
                offers,latest fashion trends,style tips!
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: "14px",
                  pl: "4px",
                  backgroundColor: theme.palette.background.main,
                }}
                placeholder="Enter your email"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                type="button"
                aria-label="search"
                sx={{ color: theme.palette.primary.main }}
              >
                <EmailIcon />
              </IconButton>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Box display="flex" flexDirection="row">
                <IconButton
                  sx={{ color: theme.palette.primary.main }}
                  type="button"
                  aria-label="search"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{ color: theme.palette.primary.main }}
                  type="button"
                  aria-label="search"
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  sx={{ color: theme.palette.primary.main }}
                  type="button"
                  aria-label="search"
                >
                  <TwitterIcon />
                </IconButton>
              </Box>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default memo(Footer);
