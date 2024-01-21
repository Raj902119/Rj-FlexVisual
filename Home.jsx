import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'

import Banner from '../component/Banner'
import SearchExercises from '../component/SearchExercises'
import Exercises from '../component/Exercises'

const Home = () => {
  const [Exercise,SetExercise] = useState([]);
  const [bodyPart,setbodyPart] = useState('all');
  return (
    <Box>
      <Banner />
      <SearchExercises 
        SetExercise={SetExercise} 
        bodyPart={bodyPart} 
        setbodyPart={setbodyPart}
      />
      <Exercises 
        SetExercise={SetExercise} 
        bodyPart={bodyPart} 
        Exercise={Exercise}
      />
    </Box>
  )
}

export default Home
