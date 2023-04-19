import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {AppProvider} from './context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Booklist from './components/Booklist/Booklist';
import Bookdetails from './components/Bookdetails/Bookdetails';
import College from './components/College/College';
// import Profile from './components/Profile/Profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AppProvider> 
     {/* <React.StrictMode>
    <Profile />
  </React.StrictMode> */}
  <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<Booklist />} />
          <Route path = "/book/:id" element = {<Bookdetails />} />
          <Route path = "college" element = {<College />} />
          {/* <Route path = "app" element = {<Profile />} /> */}
    </Route>
    
    </Routes>
    
  </BrowserRouter>
  </AppProvider>
);

