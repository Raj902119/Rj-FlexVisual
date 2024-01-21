import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {fetchAPI, fetchOptions, youtubeoptions} from "../utils/fetchAPI";
import Details from '../component/Details'
import SimilarExercises from '../component/SimilarExercises';
import ExerciseVideos from '../component/ExerciseVideos';

const ExerciseDetail = () => {
  const [exerciseDetail,setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [TargetMuscleExercises,setTargetMuscleExercises] = useState([]);
  const [EquipmentExercises,setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchAPI(`${exerciseDbUrl}/exercises/exercise/${id}`,fetchOptions);
      setexerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchAPI(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeoptions);
      setexerciseVideos(exerciseVideosData.contents);

      const targetMuscelExerciseData = await fetchAPI(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,fetchOptions);
      setTargetMuscleExercises(targetMuscelExerciseData);

      const equipmentExerciseData = await fetchAPI(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,fetchOptions);
      setEquipmentExercises(equipmentExerciseData);
    }
    fetchExerciseData();
  },[id]);


  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises TargetMuscleExercises={TargetMuscleExercises} EquipmentExercises={EquipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail
