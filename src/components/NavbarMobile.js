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
  Home,
  People,
  Code,
  LineWeight,
  Drafts,
  ImportContacts,
  Close,
} from "@material-ui/icons"
import WorkIcon from "@material-ui/icons/Work"
import useScroll from "../hooks/useScroll"
import { HOME, PROJECTS, TEAMS, WORK_WITH_US } from "../navigation/sitemap"
import { colorsIconos, colors } from "../helpers/navbarColors"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "blue",
  }),
  navbarMobileIcons: props => ({
    fontSize: 50,
    color: props.scroll ? props.iconsVariant : "#23AAE1",
  }),
  navbarMobileLogo: {
    width: 140,
    height: 73,
  },
  resetLink: {
    color: "black",
    lineHeight: 2.5,
    "&:hover": {
      color: "white",
      textDecoration: "none",
    },
  },
  drawer: {
    width: "100%",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
  list: {
    width: "100%",
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
  <Home />,
  <LineWeight />,
  <Code />,
  <People />,
  <ImportContacts />,
  <Drafts />,
  <WorkIcon />,
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
            // m={1}
            // mx={15}
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
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
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
              <Close />
            </IconButton>
          </DrawerHeader>

          <Divider />
          <List onClick={handleDrawerClose} className={classes.list}>
            {[
              <Link className={classes.resetLink} to={`${HOME}`}>
                <Typography>Home</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${HOME}#about`}>
                <Typography>About Us</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${PROJECTS}`}>
                <Typography>Services</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${TEAMS}`}>
                <Typography>Team</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${HOME}#blog`}>
                <Typography>Blog</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${HOME}#contact`}>
                <Typography>Contact</Typography>
              </Link>,
              <Link className={classes.resetLink} to={`${WORK_WITH_US}`}>
                <Typography>Work With Us</Typography>
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
