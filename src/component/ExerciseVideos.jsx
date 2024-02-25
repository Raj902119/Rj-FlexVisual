import React from 'react'
import { Box,Stack,Typography } from '@mui/material'


const ExerciseVideos = ({exerciseVideos,name}) => {
  if(!exerciseVideos.length) return "...loading";
  return (
    <Box sx={{marginTop:{lg:'50px',xs:'20px'}}} p='50px 30px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection:{lg:'row',md:'row'},
          gap: {lg:'50px 100px',xs:'0',md:'20px'},
          justifyContent:'center'
        }}>
        {exerciseVideos?.slice(0,6).map((item,index)=>(
          <a key={index}
             className='exercise-video'
             href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
             target='_blank'
             rel='noreferrer'>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                 <Typography sx={{variant:{lg:'h5',md:'h6'}}} color='#000'>
                   {item.video.title}
                 </Typography>
                 <Typography sx={{variant:{lg:'h6',md:'suntitle1'}}} color='#000' fontWeight={600}>
                   {item.video.channelName}
                 </Typography>
              </Box>
             </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
