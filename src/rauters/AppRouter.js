import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import { Contactanos } from '../component/Contactanos/Contactanos';
import { Navbar } from '../component/Navbar';
import { Home } from '../component/Home/Home';
import { Consejos } from '../component/Consejos/Consejos';
import Sliderconfondo from '../component/Acordeon/Sliderconfondo';
import Informacion from '../component/Acordeon/Informacion';


export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Contactanos' element={<Contactanos />} />
                <Route exact path='/Consejos' element={<Consejos />} />
                <Route exact path='/Sliderconfondon' element={<Sliderconfondo />} />
                <Route exact path='/Informacion' element={<Informacion />} />
            </Routes>
        </Router>
    )
}
