import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Background2 from './components/eventspage/background2.js';
import reportWebVitals from './reportWebVitals';
import Wave from './components/wave.js';
import Ship from './components/ship.js';
import Background from './components/background.js';
import Navbar from './components/navbar.js';
import Home from './components/homepage/home.js';
import Card from './components/eventspage/eventcard.js';
import Chest from './components/sponsors/sponsorchest.js';
import Background3 from './components/sponsors/background3.js';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/>
    
    <Background/>
    <Wave />
    <Ship/>
    <Home/></>,
  },
  {
    path: '/events',
    element: <><Navbar/><Background2/><Card eventname="EVENT:1"/></>

  },
  {
    path: '/sponsors',
    element: <><Navbar/><Background3/><Chest/></>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Navbar/> */}
    {/* <Background/>
    <Wave />
    <Ship/>
    <Home/>
    <Chest/>
    <Card eventname="EVENT:1"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
