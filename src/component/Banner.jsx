import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'
import { AddBox } from '@mui/icons-material'

const Banner = () => {
  return (
    <Box sx={{ mt: { lg: '130px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" >
    <Typography color="#FF2625" fontWeight="600" fontSize="36px">Fitness Club</Typography>
    <Typography fontWeight={750} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="20px" mt="20px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" className='text'>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <Box onClick={()=>{window.scrollBy({ top: 1700, behavior: 'smooth' })}} style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center',
       background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' 
       }}>Explore Exercises</Box>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ mt:'45px' ,opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" position='relative' sx={{width : {md : '350px'}, height: {md:'350px'}}}/>
  </Box>
  )
}

export default Banner
