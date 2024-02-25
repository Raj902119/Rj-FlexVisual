import { Pagination, Stack, Typography,Box } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react'

import { fetchAPI, fetchOptions } from '../utils/fetchAPI';
import ExerciseCard from './ExerciseCard';
import { Login } from '@mui/icons-material';

const Exercises = ({Exercise,SetExercise,bodyPart}) => {

  const [currentPage,setcurrentPage] = useState(1);
  const exercisesperpage=9;

  const indexofLastExercise = currentPage*exercisesperpage;
  const indexofFirstExercise = indexofLastExercise-exercisesperpage;
  const currentExercises= Exercise.slice(indexofFirstExercise,indexofLastExercise);
  const paginate = (e,value) => {
    setcurrentPage(value);

    window.scrollTo({top:1800,behavior:'smooth'});
    
  }

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      let exerData = [];

      if (bodyPart === 'all'){
        exerData = await fetchAPI('https://exercisedb.p.rapidapi.com/exercises?limit=50', fetchOptions); 
      } else {
        exerData = await fetchAPI(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=50`, fetchOptions); 
      }
      SetExercise(exerData);
    }

    fetchExercisesData();
  },[bodyPart])
  return (
    <Box
      id="Exercise"
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}}
      flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {Exercise.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(Exercise.length / exercisesperpage)}
            page={currentPage}
            onChange={paginate}
            size='large'/>
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
