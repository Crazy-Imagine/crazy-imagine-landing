import React, { useState, useEffect, useRef } from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
import ImageListItemBar from "@material-ui/core/ImageListItemBar"
import IconButton from "@material-ui/core/IconButton"
import ComputerIcon from "@material-ui/icons/Computer"
import useMembers from "../hooks/useMembers"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "space-around",
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    color: "black",
    fontFamily: "Gotham",
    lineHeight: 1,
    fontWeight: "bold",
    fontSize: 45,
    marginLeft: 25,
    marginTop: 50,
    textTransform: "uppercase",
    marginBottom: 50,
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      fontsize: 28,
    },
  },
  icon: {
    color: "white",
  },
  itemBar: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    backgroundColor: "rgba(103, 183, 255, 0.9)",
    height: "10%",
    "&:hover *": {
      transform: "translateY(0px)",
    },
  },
  descriptionAppears: {
    animation: `$descAppears 1.5s ease`,
  },
  descriptionDisappears: {
    animation: `$descDisappears 2s ease`,
  },
  shakeTitle: {
    animation: `$shakeIt 3000ms`,
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: "1%",
  },
  imageListResponsive: {
    justifyContent: "center",
    [theme.breakpoints.between("0", "525")]: {
      justifyContent: "unset",
      flexWrap: "unset",
      "&::-webkit-scrollbar": {
        display: "none",
      } /* Chrome */,
    },
  },
  "@keyframes descAppears": {
    "0%": { transform: "translateY(42px)" },
    "100%": { transform: "translateY(0px)" },
  },
  "@keyframes descDisappears": {
    "0%": { transform: "translateY(0px)" },
    "100%": { transform: "translateY(42px)" },
  },
  "@keyframes shakeIt": {
    "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
    "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
    "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
    "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
    "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
    "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
    "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
    "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
    "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
    "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
  },
}))

export default function ImageListMembers() {
  const classes = useStyles()
  const response = useMembers()
  const members = response.allStrapiMembers.nodes

  const listRef = useRef()

  const [isShaking, setIsShaking] = useState(false)
  const [hover, setHover] = useState({ hover: false, position: -1 })
  const [image, setImage] = useState({ img: {}, position: -1 })

  const handleHoverImage = (hoverStatus, position, img) => {
    setHover({ hoverStatus, position })
    setImage({ img, position })
  }

  const handleHoverBar = (hoverStatus, position, img) => {
    setHover({ hoverStatus, position })
    setImage({ img, position })
  }

  useEffect(() => {
    const listRefCurrent = listRef.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isShaking && entry.isIntersecting)
          setIsShaking(entry.isIntersecting)
      })
    })
    observer.observe(listRefCurrent)
    return () => {
      observer.unobserve(listRefCurrent)
    } // clean up
  }, [isShaking])

  return (
    <div className={classes.root}>
      <Typography
        ref={listRef}
        className={`${classes.title} ${isShaking ? classes.shakeTitle : ""}`}
      >
        Take a look
      </Typography>
      <ImageList rowHeight={400} className={classes.imageListResponsive}>
        {members.map((item, index) => (
          <ImageListItem key={item.id} style={{ width: "max-content" }}>
            <GatsbyImage
              onMouseEnter={() =>
                handleHoverImage(
                  true,
                  index,
                  getImage(item.avatarHover[0].localFile)
                )
              }
              onMouseLeave={() => {
                handleHoverImage(false, -1, getImage(item.avatar[0].localFile))
              }}
              className={classes.image}
              image={
                image.img && image.position === index
                  ? image.img
                  : getImage(item.avatar[0].localFile)
              }
              alt={item.name}
            />
            <ImageListItemBar
              className={`${classes.itemBar} ${
                hover.hover === true && hover.position === index
                  ? classes.descriptionAppears
                  : classes.descriptionDisappears
              }`}
              onMouseEnter={() =>
                handleHoverBar(
                  true,
                  index,
                  getImage(item.avatarHover[0].localFile)
                )
              }
              onMouseLeave={() =>
                handleHoverBar(false, -1, getImage(item.avatar[0].localFile))
              }
              style={{
                transform:
                  hover.hover === true && hover.position === index
                    ? "translateY(0px)"
                    : "translateY(42px)",
              }}
              title={item.role}
              actionIcon={
                <IconButton
                  aria-label={`${item.role}`}
                  className={classes.icon}
                >
                  <ComputerIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
