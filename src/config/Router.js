import Home from '../screens/Home'
import About from '../screens/About'
import Gallery from '../screens/Gallery'
import Services from '../screens/Services'
import Contact from '../screens/Contact'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Navigate } from 'react-router-dom'
import React from 'react'

export default function router() {
  return (
    <div>
      <Router>
        <Navbar/>
       <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Gallery" element={<Gallery/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Services" element={<Services/>} />
    <Route path="/*" element={< Navigate to = "/" />} />
       </Routes>
      </Router>
    </div>
  )
}
