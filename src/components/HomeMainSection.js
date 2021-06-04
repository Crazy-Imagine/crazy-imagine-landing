import React from 'react';

import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CodeIcon from '@material-ui/icons/Code';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import background from '../images/fondo.jpg';
import '../css/typography.css';
import HomeCard from './HomeCard';

const useStyles = makeStyles({
  imageSize: {
    width:'100%',
    height:1000,
    // borderRadius: "0% ​0% 44% 50% / 0% 20% 12% 12%"
  },
  title: {
    fontSize: 44,
    fontFamily: 'gotham-book',
    color: 'white'
  },
  mainTitle: {
    fontSize: 75,
    fontFamily: 'gotham-book',
    color: 'white',
    fontWeight: 'bold'

  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'gotham-book',
    color: 'white'
  },
  cardIcon: {
    fontSize: 64
  },
  cardCenter: {
    backgroundColor: '#23aae1'
  }
});


const HomeMainSection = ({title, mainTitle, description}) => {
  const classes = useStyles();

  return(
    <Box>
      <CardMedia 
        image={background}
        title='imageMainSection'
        className={classes.imageSize}
      >
        <Box height='100vh' width='70%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' mx='auto' textAlign='center'>
          <Typography variant='h2' color='secondary' className={classes.title} >{title}</Typography>
          
            <Typography variant='h1' color='secondary' className={classes.mainTitle}>{mainTitle}</Typography>
          
          <Typography variant='h6' color='secondary' className={classes.subTitle}>{description}</Typography>
        </Box>

      </CardMedia>
      <Box display='flex' justifyContent='center' gridGap='30px'>
        <HomeCard title='title' description='description' Icon={AccountCircleIcon}  />
        <HomeCard title='title' description='description'Icon={CodeIcon} variant='blue' translate='-110px'/>
        <HomeCard title='title' description='description' Icon={ArrowUpwardIcon}  />
      </Box>
    </Box>
  );
};

export default HomeMainSection;