import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Stack,Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  const handleClick = () => {
    // Scroll to the top of the window when the link is clicked
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card' onClick={handleClick}>
      <img src={exercise.gifUrl} alt={ExerciseCard.name} loading='lazy' />
      <Stack direction='row'>
        <Button sx={{ml:'21px', color:"#fff", background:'#ffa9a9',
        fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
          {exercise.bodyPart} 
        </Button>
        <Button sx={{ml:'21px', color:"#fff", background:'#fcc757',
        fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
          {exercise.target} 
        </Button>
      </Stack>
      <Typography ml='21px' color='#000' fontWeight='bold' mt='11px'
      pb='10px' textTransform='capitalize' fontSize='22px'>
          {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
