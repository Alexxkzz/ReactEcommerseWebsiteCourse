import { Drawer,Box,Typography,IconButton, ListItemButton, ListItemText,List,ListItem,ListItemIcon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import HelpIcon from '@mui/icons-material/Help';
import PolicyIcon from '@mui/icons-material/Policy';
import ChevronLeft from "@mui/icons-material/ChevronLeft"
import { useNavigate,useLocation } from "react-router-dom";
import {useEffect, useState } from "react";
import { useTheme } from "@emotion/react";


const navData=[
    {
        text:"Home",
        icon:<HomeIcon/>
    },
    {
        text:"Products",
        icon:<CategoryIcon/>
    },
    {
        text:"About",
        icon:<InfoIcon/>
    },
    {
        text:"Contact",
        icon:<CallIcon/>
    },
    {
        text:"FAQ",
        icon:<HelpIcon/>
    },
    {
        text:"Policy",
        icon:<PolicyIcon/>
    },
]


const Menubar = ({isMenuBarOpen,setisMenuBarOpen,isNonMobile,drawerWidth}) => {
    // console.log("Menubar is called")
    const navigate=useNavigate();
    const [active,setActive]=useState("");
    const {pathname}=useLocation();
    const theme=useTheme();

    useEffect(()=>{
        setActive(pathname.substring(1));
    },[pathname])
  return (
    <>
      <Drawer
        anchor="left"
        open={isMenuBarOpen}
        onClose={()=>setisMenuBarOpen(false)} 
        sx={{
            width:drawerWidth,
            "& .MuiDrawer-paper":{
                width:drawerWidth,
                backgroundColor:theme.palette.secondary.main,
            }

        }}      
      >
       <Box width="100%">
            <Box display="flex" alignItems="center" gap="0.5rem" marginTop="2rem" marginBottom="2rem" padding="1rem">
                <Typography variant="h4" fontWeight="bold" sx={{fontSize:"20px",fontFamily:"Roboto"}}>
                    DEEPALI STORE
                </Typography>
                {
                    !isNonMobile&&<IconButton sx={{color:theme.palette.primary.main}} onClick={()=>setisMenuBarOpen(false)}>
                        <ChevronLeft/>
                    </IconButton>
                }
            </Box>
            <List sx={{marginTop:"2rem"}}>
                {
                    navData.map(({text,icon})=>{
                        const lcText=text.toLowerCase();
                        return(
                            <ListItem key={text}>
                                <ListItemButton onClick={()=>{
                                    navigate(`/${lcText}`);
                                    setActive(lcText);
                                    setisMenuBarOpen(false);
                                }}
                                sx={{
                                    backgroundColor:active===lcText?theme.palette.primary.main:"transparent",
                                   
                                }}
                                >
                                    <ListItemIcon sx={{ml:".1rem",fontSize:"1rem",color:active===lcText?"white":theme.palette.primary.main, }} >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ml:".1rem",fontSize:".6rem", color:active===lcText?"#fff":theme.palette.primary.main, }}/>
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>
       </Box>
      </Drawer>
    </>
  );
};

export default Menubar;
