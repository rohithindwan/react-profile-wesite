import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import ContactForm from "./ContactForm";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";

const Routess =()=>{
    return(
        <Router>
            <NavBar>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/About' element={<About/>} />
                <Route exact path='/ContactForm' element={<ContactForm/>} />
            </Routes>
            </NavBar>
        </Router>
        )
}
export default Routess; 