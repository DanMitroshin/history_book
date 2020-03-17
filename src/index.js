import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from "./routers";



ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainRouter/>
    </BrowserRouter>
,
document.getElementById('root'));

