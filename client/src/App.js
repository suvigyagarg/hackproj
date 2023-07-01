import React,{useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages//register/register';
import Donation from './pages/donation/donation';
import FindDonation from './pages/findDonation/findDonation';
import About from './pages/about/about';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import {Context} from "./context/Context"


function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home/> : <Login/>}/>
          <Route path="/register" element={user ? <Home/> : <Register/>}/>
          <Route path="/donation" element={user ? <Donation/> : <Register/>} />
          <Route path="/findDonation" element={<FindDonation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer/>
      </Router>      
  </div>
);
}

export default App;
