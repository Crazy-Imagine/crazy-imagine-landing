import React from 'react';
import { Box, Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContainer: (props) => ({
      backgroundColor: props.variant === "blue" ? "#23aae1" : "white",
      borderRadius: 10,
      boxShadow: '0px 0px 34px 0px rgba(5,0,6,0.26)'
    }),
    title: (props) => ({
      fontSize: 34,
      color: props.variant === "light" ? "#23aae1" : "white",
      fontWeight: 'bold',
      fontFamily: 'Lato'
    }),
    description: (props) => ({
      color: props.variant === "light" ? "#23aae1" : "white",
      fontSize: 16
    }),
    cardIcon: (props) => ({
        fontSize: 64,
        color: props.variant === "light" ? "#23aae1" : "white"
      }),
    cardTranslate: (props) => ({
      transform: `translateY(${props.translate})`,
      zIndex: `${props.zIndex}`
    })
  }));

const HomeCard = ({title, description, Icon , variant = "light", translate = '-90px' }) => {
  const classes = useStyles({
      variant,
      translate
  });

  return(
    <Box display='flex' className={classes.cardTranslate}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Box 
            width='250px' 
            height='300px' 
            p='24px' 
            display='flex' 
            flexDirection='column' 
            justifyContent='center' 
            alignContent='center' 
            textAlign='center'
            gridGap='1em'
          >
            <Typography variant='h6'><Icon className={classes.cardIcon} /></Typography>
            <Typography variant='h3' className={classes.title}>{title}</Typography>
            <Typography className={classes.description}>{description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomeCard;