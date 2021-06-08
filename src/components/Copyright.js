import React from 'react';
import { Box, makeStyles, Typography } from "@material-ui/core";
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#23aae1'
  },
  copyright: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: 13 
  }
});


const Copyright = () => {
  const classes = useStyles();

  return(
    <Box 
      width='100%' 
      height={48} 
      className={classes.container} 
      display='flex' 
      alignItems='center' 
      justifyContent='center'
    >
      <Typography className={classes.copyright}> <CopyrightIcon className={classes.copyright} /> All rights reserved Crazy imagine 2021</Typography>
    </Box>
  );
};

export default Copyright;