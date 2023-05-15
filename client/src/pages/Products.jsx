import { Box, Paper, Drawer, useMediaQuery, Snackbar } from "@mui/material";
import DisplayProducts from "../components/DisplayProducts";
import Filters from "../components/Filters";
import { memo, useCallback, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { clearFilters } from "../redux/slice";
import { useDispatch } from "react-redux";
function Products() {
  console.log("Products is called")
  const dispatch=useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsSnackbar,setProductsSnackbar]=useState(false);
  const MeidumDevicesDown = useMediaQuery("(max-width:900px)");
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const filterDrawerHandle = useCallback(() => {
    setDrawerOpen(false);
  },[]);
  const handleSnackbarClose=useCallback(()=>{
    setProductsSnackbar(false);
    dispatch(clearFilters())
  },[dispatch])
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Drawer
        open={drawerOpen}
        onClose={filterDrawerHandle}
        anchor="top"
        sx={{
          "& > .css-1nvnyqx-MuiPaper-root-MuiDrawer-paper": {
            padding: "1rem",
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        <Filters setDrawerOpen={setDrawerOpen} />
      </Drawer>
      <Paper
        sx={{
          width: "100%",
          maxWidth: "calc(100% - 50px);",
          margin: "3rem 0rem",
        }}
      >
        <Box display="flex" flexDirection="row">
          {!MeidumDevicesDown && <Filters setDrawerOpen={setDrawerOpen} />}

          <DisplayProducts setDrawerOpen={setDrawerOpen} setProductsSnackbar={setProductsSnackbar}/>
        </Box>
      </Paper>
      <Snackbar
        open={productsSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="No Products found!"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </Box>
  );
}

export default memo(Products);
