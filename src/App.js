import "./App.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";
function App() {
  return (
    <BrowserRouter>
      <div className='return-div'>
        <div className='header-div'>
          <strong>
            <Link to='/'>amazona</Link>
          </strong>
        </div>
        <mainrouter>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </mainrouter>
      </div>
    </BrowserRouter>
  );
}

export default App;
