import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import { About } from '../component/Contactanos/About';
import { Navbar } from '../component/Navbar';
import { Home } from '../component/Home/Home';
import  Acordeon from '../component/Acordeon/Acordeon';
import  Sliderconfondo from '../component/Acordeon/Sliderconfondo';
import  Informacion from '../component/Acordeon/Informacion';


export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Contactanos' element={<About />} />

                <Route exact path='/Acordeon' element={<Acordeon/>} />
                <Route exact path='/Sliderconfondon' element={<Sliderconfondo/>} />
                <Route exact path='/Informacion' element={<Informacion/>} />

            </Routes>
           
            
        </Router>
        
        
    )
}
