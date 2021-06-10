import React from 'react';
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  review: {
    color: 'white',
    fontFamily: 'Myriad-pro',
    marginBottom: 24,
    fontSize: 16  
  },
  customerName: {
    color: 'white',
    fontFamily: 'Gotham-ultra',
    fontSize: 30,
  },
  customerOcupation: {
    color: '#23aae1',
    textAlign: 'initial',
    fontFamily: 'Gotham-Medium',
    fontSize: 20
  },
  customerAvatar: {
    width: 100,
    height: 100,
    marginRight: 24
  }
});

const CustomerReview = ({ review, customerImage, customerName, customerOcupation }) => {
  const classes = useStyles();

  return(
    <Box>
      <Typography className={classes.review}>{review}</Typography>
      <Grid container spacing={0} justify='center' alignItems='center'>
        <Grid item>
          <Avatar alt={customerName} src={customerImage} className={classes.customerAvatar} />
        </Grid>
        <Grid item>
          <Typography variant='h5' className={classes.customerName} >{customerName}</Typography>
          <Typography variant='h6' className={classes.customerOcupation}>{customerOcupation}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerReview;