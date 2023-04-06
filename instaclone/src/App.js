import './App.css';
import LandingPage from './components/landing/landing';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './post';
import Add from './components/post/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/post/add' element={<Add/>}/>
        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;