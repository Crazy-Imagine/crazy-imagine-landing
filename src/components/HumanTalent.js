import React from 'react';
import { Link } from 'gatsby';

import { Box, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";

import ourTeamImage from '../images/favicon.png';
import '../css/typography.css';

const useStyles = makeStyles({
  title: {
    fontFamily: 'Gotham-ultra',
    fontSize: 40,
    color: '#000a30',
    marginTop: 16,
    fontWeight: 'bold'
  },
  content: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#1e1e1e'
    
  },
  ourTeamLink: {
    color: '#23aae1'
  },
  ourTeamImage: {
    width: 562,
    height: 302
  },
  humanTalentImage: {
    width: 562,
    height: 355
  },
  boxLine: {
    backgroundColor:'#23aae1'
  }
});

const HumanTalent = () => {
  const classes = useStyles();

  return(
    <Box marginTop='70px' marginBottom='88px' paddingLeft='439px' paddingRight='412px'>
      <Grid container spacing={8}>
        <Grid item sm={5}>
          <Typography variant='h2' className={classes.title}>Out Team</Typography>
          <Box width='45px' height='6px' my='24px' className={classes.boxLine}></Box>
          <Typography className={classes.content}>
            Wirt a wide team of full-stack, front,
            back end and mobile developers, projct managers and
            artitects on different levels of expertise, we are
            sure that we could offer you the people who will fit
            better to you needs
          </Typography>
        </Grid>
        <Grid item sm={7}>
          <CardMedia 
            image={ourTeamImage}
            title='Our Team'
            className={classes.ourTeamImage}
          />
        </Grid>
        <Grid item sm={7}>
          <CardMedia 
            image={ourTeamImage}
            title='Our Team'
            className={classes.humanTalentImage}
          />
        </Grid>
        <Grid item sm={5}>
        <Typography variant='h2' className={classes.title}>We are proud of the human resource talent</Typography>
        <Box width='45px' height='6px' my='24px' className={classes.boxLine}></Box>
        <Typography className={classes.content}>
          always looking for ways to improve and deliver gret qualy of work
          for us, terms like partnership, empowerment and teamwork, are core values.
        </Typography>
        <Typography className={classes.content}>If you want to know more about our team please
          check our page <Link className={classes.ourTeamLink}>Here</Link>
        </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HumanTalent;