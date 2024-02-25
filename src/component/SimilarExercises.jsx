import React from 'react'
 import { Box,Typography,Stack } from '@mui/material'

 import HorizontalScrollbar from "./HorizontalScrollBar";
 import Loader from './Loader';
const SimilarExercises = ({TargetMuscleExercises, EquipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs:'0'}}} p='50px 30px'>
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {TargetMuscleExercises.length ? <HorizontalScrollbar data={TargetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercises that use the same Equipment
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {EquipmentExercises.length ? <HorizontalScrollbar data={EquipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
