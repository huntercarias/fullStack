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

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Contactanos' element={<About />} />
                <Route exact path='/Home' element={<Home />} />
            </Routes>
        </Router>
    )
}
