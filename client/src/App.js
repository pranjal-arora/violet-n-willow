import React from "react";
import { Switch, Route } from "react-router-dom";
import { isMobile, isDesktop, isTablet, deviceType,    } from 'react-device-detect';
//Custom import
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";

//css
import "./App.css";


function App() { 
  return (
    <div className="app">
      {isDesktop ? (
        <>
          <Header />
          
            <Route exact path="/">
              <HomePage />
            </Route>
        </>
      ) : (
        <div className="container">
          <img className="img" src="/monitors-laptop.png" alt="Mobile Laptop" />
          <div className="text-container">
            <h2 className="heading">Please use Laptop or desktop</h2>
            <p className="para">
              We don't support small screen yet. Please use laptop or desktop for the
              best experience.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;