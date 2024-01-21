import React, { useEffect } from 'react';
import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchAPI, fetchOptions } from '../utils/fetchAPI';

import HorizontalScrollBar from './HorizontalScrollBar';

 const SearchExercises = ({SetExercise,bodyPart,setbodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchBodyPart = async () => {
      const bodyPartData = await fetchAPI('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',fetchOptions);

      setBodyParts(['all',...bodyPartData]);
    }
    fetchBodyPart();
  },[])

  const handleSearch = async () => {
    if (search) {
      const exData = await fetchAPI('https://exercisedb.p.rapidapi.com/exercises?limit=200', fetchOptions);
      const searchedExercises = exData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      SetExercise(searchedExercises);
    }
  };
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign='center'>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{
          input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
          width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px'}}
          height='76px' value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type='text' />
        <Button className='search-btn' sx={{
          bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' },
          fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0px'
        }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative' , width:'100%',p: {lg:'20px',xs:'0px'}}}>
         <HorizontalScrollBar bodyPart={bodyPart} bodyParts setbodyPart={setbodyPart} data={bodyParts} isbodypart/>
      </Box>
    </Stack>
  );
};

export default SearchExercises