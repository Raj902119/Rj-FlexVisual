import React, { useContext,useState,useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Box, Typography,Stack } from '@mui/material';

import BodyPart from './BodyPart';
import ExerciseCard from "./ExerciseCard"

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography  onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizontalScrollbar = ({ data, bodyParts, setbodyPart, bodyPart, isbodypart }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <ScrollMenu
      LeftArrow={isMobile ? null : LeftArrow}
      RightArrow={isMobile ? null : RightArrow}
    >
      {data.map((item, index) => (
        <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
          {isbodypart ? (
            <BodyPart item={item} setbodyPart={setbodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard key={index} exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;