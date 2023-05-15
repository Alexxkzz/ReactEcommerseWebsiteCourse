import { ThemeProvider, useMediaQuery } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Policy from "./pages/Policy";
import Product from "./pages/Product";
import { useGetAllProductsQuery} from "./redux/service";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts, setTopRatedProducts } from "./redux/slice";
import { useEffect, useMemo } from "react";
import Checkout from "./pages/Checkout";
import {createTheme} from "@mui/material";
import { themeSettings } from "./theme";
import NotFound from "./pages/NotFound";


function App() {
  let mode=useSelector(store=>store.state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { data} = useGetAllProductsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setAllProducts(data.products));
      dispatch(setTopRatedProducts());
    }
  }, [data, dispatch]);
  return (
    <Box sx={{backgroundColor:mode==="light"?"#ffffff":"#0a1929"}}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Header isNonMobile={isNonMobile} />
        <Box sx={{ marginTop: "60px", zIndex: "1200" }}>
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
        
      </BrowserRouter>
    </Box>
  );
}

export default App;
