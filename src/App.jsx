import React, { Component, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} key="general" pageSize="20" country="in" category="general" />}></Route>
          <Route path='/buisness' element={<News setProgress={setProgress} key="buisness" pageSize="20" country="in" category="business" />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize="20" country="in" category="entertainment" />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key="health" pageSize="20" country="in" category="health" />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key="science" pageSize="20" country="in" category="science" />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key="sports" pageSize="20" country="in" category="sports" />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key="technology" pageSize="20" country="in" category="technology" />}></Route>
          {/* <Route path='/' element={<News pageSize="20" country="in" category="pre" />}></Route> */}

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}