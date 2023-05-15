import Navbar from "./Navbar.jsx"
import Menubar from "./Menubar.jsx"
import {Box} from "@mui/material";
import { memo, useState } from "react";
import CartBar from "./CartBar.jsx";



const Header=({isNonMobile})=>{
    // console.log("Header function callled")
    const [isMenuBarOpen,setisMenuBarOpen]=useState(false);
    const [isCartBarOpen,setIsCartBarOpen]=useState(false);
    return(
        <Box sx={{display:"flex"}}>
            <Menubar drawerWidth="300px" isMenuBarOpen={isMenuBarOpen} setisMenuBarOpen={setisMenuBarOpen} isNonMobile={isNonMobile}/>
            <Box flexGrow={1}>
                <Navbar isMenuBarOpen={isMenuBarOpen} setisMenuBarOpen={setisMenuBarOpen} isCartBarOpen={isCartBarOpen} setIsCartBarOpen={setIsCartBarOpen}/>
            </Box>
            <CartBar drawerWidth="300px" isCartBarOpen={isCartBarOpen} setIsCartBarOpen={setIsCartBarOpen} isNonMobile={isNonMobile}/>
        </Box>
    ) 
}

export default memo(Header);