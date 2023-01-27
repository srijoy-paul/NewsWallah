import React, { Component, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key="general" pageSize="20" country="in" category="general" />}></Route>
          <Route path='/buisness' element={<News key="buisness" pageSize="20" country="in" category="business" />}></Route>
          <Route path='/entertainment' element={<News key="entertainment" pageSize="20" country="in" category="entertainment" />}></Route>
          <Route path='/health' element={<News key="health" pageSize="20" country="in" category="health" />}></Route>
          <Route path='/science' element={<News key="science" pageSize="20" country="in" category="science" />}></Route>
          <Route path='/sports' element={<News key="sports" pageSize="20" country="in" category="sports" />}></Route>
          <Route path='/' element={<News key="technology" pageSize="20" country="in" category="technology" />}></Route>
          {/* <Route path='/' element={<News pageSize="20" country="in" category="pre" />}></Route> */}

        </Routes>
      </div>
    </Router>
  )
}