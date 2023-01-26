import React, { Component, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import News from './components/News';

export default function App() {
  return (
    <div>
      <Navbar />
      <News pageSize="20" country="in" category="sports" />
    </div>
  )
}