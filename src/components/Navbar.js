import React from 'react'
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, CardMedia, Toolbar, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../images/logo.jpeg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  spacing: {
    marginLeft: theme.spacing(10)
  },
  iconSize: {
    fontSize: 20
  },
  linkTypograpy: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: '29px',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
      color: '#FFFFFF'  
     }
  },
  logo: {
    width: 140,
    height: 73
  }

}))

const Navbar = () => {
    const classes = useStyles();
  return(
    <AppBar color='transparent' position='fixed' className={classes.appBar}>
      <Toolbar>
      <Box m={1} mx={15} display='flex' width='100%' height='6em' alignItems='center' justifyContent='space-evenly'>
          <CardMedia 
            image={logo}
            title='logo'
            className={classes.logo}
          />
          <Link><HomeIcon className={classes.spacing, classes.iconSize} color='primary' fontSize='large' /></Link>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>ABOUT US</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Services</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Team</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Blog</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Contact</Link></Typography>
          <Box display='flex' alignItems='center' justifyContent='inherit' width='20%' >
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