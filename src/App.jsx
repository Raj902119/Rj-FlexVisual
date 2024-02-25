import { Box, Stack } from '@mui/material'
import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail' 

import "./App.css"

const App = () => {
  return (
      <Box width='400px' sx={{width : { xl: '1448px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
      </Box>
  )
}

export default App
