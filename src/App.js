import React from 'react';
import './App.css';
import axios from 'axios';
import Home from './routes/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" exact = {true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/movie-detail' element={<Detail/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;