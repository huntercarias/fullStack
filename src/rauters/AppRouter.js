import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { About } from '../component/About/About';
import { LoginScreen } from '../component/login/LoginScreen';
import { Navbar } from '../component/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />


            <Routes>
                <Route exact path='/about' element={<About />} />
                <Route exact path='/login' component={LoginScreen} />

            </Routes>
        </Router>
    )
}
