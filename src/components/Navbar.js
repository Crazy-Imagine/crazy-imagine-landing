import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Box, CardMedia, Toolbar, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../images/logo.jpeg';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none'
  },
  spacing: {
    marginLeft: theme.spacing(10)
  },
  justify: {
    display: 'flex',
    width: '100%',
    height: '6em',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  icons: {
    display: 'flex',
    width: '20%',
    justifyContent: 'inherit'
  },
  iconSize: {
    fontSize: 20
  },
  borderIcon: {
    borderRadius: '50%'
  },
  typograpy: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '29px',
    color: 'black',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
      color: '#FFFFFF'  
     }
  },
  img: {
    width: 140,
    height: 73
  }

}))

const Navbar = () => {
    const classes = useStyles();
  return(
    <AppBar color='transparent' position='static' className={classes.appBar}>
      <Toolbar>
      <Box className={classes.justify} m={1} mx={15}>
          <CardMedia 
            image={logo}
            title='logo'
            className={classes.img}
          />
          <Link><HomeIcon className={classes.spacing, classes.iconSize} color='primary' fontSize='large' /></Link>
          <Typography variant='h5'><Link className={classes.typograpy}>ABOUT US</Link></Typography>
          <Typography variant='h5'><Link className={classes.typograpy}>Services</Link></Typography>
          <Typography variant='h5'><Link className={classes.typograpy}>Team</Link></Typography>
          <Typography variant='h5'><Link className={classes.typograpy}>Blog</Link></Typography>
          <Typography variant='h5'><Link className={classes.typograpy}>Contact</Link></Typography>
          <Box className={classes.icons} >
            <Link><FacebookIcon className={classes.spacing, classes.iconSize} color='primary' fontSize='large' /></Link>
            <Link><TwitterIcon color='primary' fontSize='large' className={classes.iconSize} /></Link>
            <Link><InstagramIcon color='primary' fontSize='large' className={classes.iconSize} /></Link>
            <Link><LinkedInIcon color='primary' fontSize='large' className={classes.iconSize} /></Link>
            <Link><SearchIcon color='primary' fontSize='large' className={classes.iconSize} /></Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar