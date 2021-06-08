import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Box, CardMedia, Toolbar, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';

import navbarLogo from '../images/logo.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  iconSpacing: {
    marginLeft: theme.spacing(10)
  },
  navbarIcons: {
    fontSize: 20,
    color: '#23aae1'
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
  navbarLogo: {
    width: 140,
    height: 73
  }

}))

const Navbar = () => {
    const classes = useStyles();
  return(
    <AppBar color='transparent' position='fixed' className={classes.container}>
      <Toolbar>
      <Box className={classes.justify} m={1} mx={15}>
          <CardMedia 
            image={navbarLogo}
            title='logo'
            className={classes.navbarLogo}
          />
          <Link><HomeIcon className={classes.iconSpacing, classes.navbarIcons} color='primary' fontSize='large' /></Link>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>ABOUT US</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Services</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Team</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Blog</Link></Typography>
          <Typography variant='h5'><Link className={classes.linkTypograpy}>Contact</Link></Typography>
          <Box display='flex' alignItems='center' justifyContent='inherit' width='20%' >
            <Link><FacebookIcon className={classes.spacing, classes.navbarIcons} color='primary' fontSize='large' /></Link>
            <Link><TwitterIcon fontSize='large' className={classes.navbarIcons} /></Link>
            <Link><InstagramIcon fontSize='large' className={classes.navbarIcons} /></Link>
            <Link><LinkedInIcon fontSize='large' className={classes.navbarIcons} /></Link>
            <Link><SearchIcon fontSize='large' className={classes.navbarIcons} /></Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar