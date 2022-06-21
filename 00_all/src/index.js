import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Home from './Home';
import Wave from './Wave';
import Gradation from './Gradation';
import Raining from './Raining';
import Snowing from './Snowing';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/"           element={<Home />}/>
                    <Route exact path="/home"       element={<Home />}/>
                    <Route exact path="/wave"       element={<Wave />}/>
                    <Route exact path="/gradation"  element={<Gradation />}/>
                    <Route exact path="/raining"    element={<Raining />}/>
                    <Route exact path="/snowing"    element={<Snowing />}/>
                </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
