import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Detail from "./components/Detail";
import Payment from "./components/Payment";
import Order from "./components/Order";
import { createContext } from "react";
import { AuthProvider } from "./components/Provider";
import Product from "./components/product.json";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
} from "react-router-dom";

export const productContext = createContext();
// export const authContext = createContext({
//   isLoggedIn: false,
// });

function App() {
  const product = Product;
  localStorage.setItem('loginCheck', "false");
  // console.log("app", product);
  return (
    
      <Router>
        <AuthProvider>
        <productContext.Provider value={product}>
          {/* <authContext.Provider value={{isLoggedIn:false}}> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/payment/:id" component={Payment} />
            <Route exact path="/order/:id" component={Order} />
          {/* </authContext.Provider> */}
        </productContext.Provider>
        </AuthProvider>
      </Router>
    
  );
}

export default App;
