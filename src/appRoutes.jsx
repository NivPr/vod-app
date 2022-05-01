import React, { useState,useRef } from 'react'

import {BrowserRouter ,Routes,Route, useParams, Link} from "react-router-dom";

import ByName from './comps/byName';
import ByYear from './comps/byYear';
import Header from './comps/header';
import VodLayout from './comps/vodLayout';

import { AppContext } from './context/context';
import Info from './comps/info';
import Footer from './comps/footer';


export default function AppRoutes() {
    // State for save the last insarted search param
    const [paramVal,setParamVal] = useState("bank");

    const[year,setYear] = useState("");
    const [yearP,setYearP] = useState("");
    
    return (
        <AppContext.Provider value={{setParamVal,paramVal,year,setYear,yearP,setYearP}}>
          
      <BrowserRouter>
      <Header />
        <Routes>
          
          <Route path="/year/" element={<ByYear />} />
          <Route path="/year/:yearP" element={<ByYear />} />
          <Route path="/" element={<ByName />} />
          <Route path="/search/" element={<ByName />} />
          <Route path="/search/:searchP" element={<ByName />} />
        </Routes>

        <Routes>
        <Route path="/" element={<VodLayout/>} />
        <Route path="/search/:searchP" element={<VodLayout/>} />
        <Route path="/search/" element={<VodLayout/>} />
        <Route path="/year/" element={<VodLayout/>} />
        <Route path="/year/:yearP" element={<VodLayout/>} />
        </Routes>

        <Routes>
        <Route path="/info/:id" element={<Info/>} />
        
        </Routes>
      
      <Footer />

      </BrowserRouter>
      </AppContext.Provider>
    )
  }
  
