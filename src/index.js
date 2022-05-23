import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from './Component/Appbar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import {BrowserRouter as Router  ,Route,Routes} from "react-router-dom";
import Watch from './Pages/Watch';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>

<Router>
    <Appbar />
<Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/Watch:data' element={<Watch/>} />
</Routes>
</Router>
</> 
);


