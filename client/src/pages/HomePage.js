import React from "react";

import { Box, makeStyles } from "@material-ui/core";

import Navbar from "../components/Navbar";
//import HomeBanner from "../components/header/HomeBanner";
import PosterRow from "../components/PosterRow";
//import FeaturedBrandsRow from "../components/FeaturedBrandsRow";
import ProductRow from "../components/product/ProductRow";
//import Footer from "../components/footer/Footer";


//import { featuredBrandLinks, posterLinks, sidePosterLink  } from "../constants/data";

import "../styles/HomePage.css";
import "react-toastify/dist/ReactToastify.min.css";

const useStyles = makeStyles({
  homePage: {
    marginTop: 60,
  },
});
function HomePage() {
  const classes = useStyles();
  
  return (
    <Box className={classes.homePage}>
      <Navbar />
      
      <div className="first_productRow">
        <ProductRow
          isFirstRow={true}
          categoryName="top offers"
          title="Top Offers"
          subTitle="Deals Refresh Every 24 Hours"
        />
        <div style={{ padding: 1, backgroundColor: "#ffffff", cursor:"pointer" }}>
          <img
            src={sidePosterLink}
            alt="Ads"
            className="ads_banner"
          />
        </div>
      </div>
      {/* <PosterRow
        imgUrls={posterLinks.links1}
      /> */}
      <PosterRow
        
      />
      <ProductRow
        title="Top Deals"
        categoryName="top deals"
        subTitle="Daily crazy deals"
      />
      
      <ProductRow title="Trousers" categoryName="trousers" />
      
      <ProductRow title="Sweaters" categoryName="sweaters" />
     
      <ProductRow title="T-shirts" categoryName="tshirt" />
          
      <ProductRow title="Tops and Tunics" categoryName="topstunics" />

    </Box>
  );
}

export default HomePage;