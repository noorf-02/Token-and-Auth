import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../PAGES/Login';
import Signup from '../PAGES/Signup';
import Landing from '../PAGES/Landing';
import {Toaster} from "react-hot-toast"

export default function App() {
  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/form" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
