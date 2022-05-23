import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import {
  faHouse,
  faBars,
  faCode,
  faBlog,
  faLaptopCode,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useScroll from "../hooks/useScroll"
import {
  CONTACT,
  HOME,
  PROJECTS,
  WORK_WITH_US,
  ABOUT,
} from "../navigation/sitemap"
import { colorsIconos, colors } from "../helpers/navbarColors"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "rgba(25, 49, 116, 0.87)",
  }),
  navbarMobileIcons: props => ({
    fontSize: 50,
    color: props.scroll ? props.iconsVariant : "white",
  }),
  navbarMobileLogo: {
    width: 140,
    height: 73,
  },
  resetLink: {
    lineHeight: 2.5,
    color: "white",
    "&:hover": {
      color: "#67DAFF",
      textDecoration: "none",
    },
  },
  textLink: {
    fontFamily: "Hero New",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
  },
  drawer: {
    width: "100%",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      backgroundColor: "#193174",
    },
  },
  btn: {
    "& .MuiButtonBase-root": {
      padding: "8px",
    },
  },
  list: {
    width: "100%",
    backgroundColor: "#193174",
  },
}))

const drawerWidth = "100%"
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const icons = [
  <FontAwesomeIcon icon={faHouse} size="lg" />,
  <FontAwesomeIcon icon={faBars} size="lg" />,
  <FontAwesomeIcon icon={faCode} size="lg" />,
  <FontAwesomeIcon icon={faBlog} size="lg" />,
  <FontAwesomeIcon icon={faLaptopCode} size="lg" />,
  <FontAwesomeIcon icon={faPhone} size="lg" />,
]

const NavbarMobile = ({
  variant = "secondary",
  variantIcons = "secondary",
}) => {
  const [open, setOpen] = useState(false)
  const linkVariant = colors(variant)
  const iconsVariant = colorsIconos(variantIcons)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(!open)
  }
  const { scroll } = useScroll()
  const classes = useStyles({
    scroll,
    linkVariant,
    iconsVariant,
  })

  return (
    <>
      <AppBar
        color="transparent"
        position="fixed"
        className={classes.container}
      >
        <Toolbar>
          <Box
            display="flex"
            width="100%"
            height="6em"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to={HOME}>
              <StaticImage
                src="crazy-imagine-icon.svg"
                alt="logo"
                className={classes.navbarLogo}
              />
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classes.btn}
              edge="start"
              sx={{ p: 8, mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon className={classes.navbarMobileIcons} />
            </IconButton>
          </Box>
        </Toolbar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <FontAwesomeIcon icon={faXmark} inverse />
            </IconButton>
          </DrawerHeader>

          <Divider style={{ backgroundColor: "white", opacity: 0.7 }} />
          <List onClick={handleDrawerClose} className={classes.list}>
            {[
              <Link className={classes.resetLink} to={`${HOME}`}>
                <Typography className={classes.textLink}>Home</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${ABOUT}`}>
                <Typography className={classes.textLink}>About</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${PROJECTS}`}>
                <Typography className={classes.textLink}>Services</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${HOME}#blog`}>
                <Typography className={classes.textLink}>Blog</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${WORK_WITH_US}`}>
                <Typography className={classes.textLink}>
                  Work With Us
                </Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${CONTACT}`}>
                <Typography className={classes.textLink}>Contact Us</Typography>
              </Link>,
            ].map((text, index) => (
              <ListItem button key={index} alignItems="center">
                <ListItemIcon className={classes.resetLink}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  )
}

export default NavbarMobile
