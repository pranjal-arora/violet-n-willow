import React from "react";
import { Routes, Route } from "react-router-dom";
import { isMobile, isDesktop, isTablet, deviceType,    } from 'react-device-detect';
//Custom import
import Header from "./components/header/Header";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import MyAccountsPage from "./pages/MyAccountsPage";
import OrdersPage from "./pages/OrdersPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderFailedPage from "./pages/OrderFailedPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

//css
import "./App.css";


function App() { 
  return (
    <div className="app">
      {isDesktop ? (
        <>
          <Header />
          <Routes>
            <Route path='/'>
              <HomePage />
            </Route>
            <Route path='/login'>
              <AuthPage />
            </Route>
            <Route path='/cart'>
              <CartPage />
            </Route>
            <Route path='/account'>
              <MyAccountsPage />
            </Route>
            <Route path='/wishlist'>
              <MyAccountsPage />
            </Route>
            <Route path='/account/addresses'>
              <MyAccountsPage />
            </Route>
            <Route path='/orders'>
              <OrdersPage />
            </Route>
            <Route path='/checkout'>
              <CheckoutPage />
            </Route>
            <Route path='/product/:id'>
              <ProductPage />
            </Route>
            <Route path='/order-failed'>
              <OrderFailedPage />
            </Route>
            <Route path='/order-success'>
              <OrderSuccessPage />
            </Route>
            <Route element={<ErrorPage/>} />
          </Routes>
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
