import React from "react"

import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "0px 0px 34px 0px rgba(5,0,6,0.26)",
    transitionProperty: "background, translate, color",
    transitionDuration: "300ms, 300ms, 300ms",
    transform: "translateY(-90px)",
    whiteSpace: "normal",
    "&:hover": {
      backgroundColor: "#23aae1",
      color: "white",
      transform: "translateY(-115px)",
      "& $cardIcon": {
        color: "white",
      },
    },
    [theme.breakpoints.down("md")]: {
      transform: "translateY(0px)",
      "&:hover": {
        transform: "translateY(0px)",
      },
    },
  },
  cardContent: {
    color: "black",
    "&:hover": {
      color: "white",
    },
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    fontFamily: "Lato",
    lineHeight: 1.3,
  },
  description: {
    fontSize: 20,
    maxHeight: 157,
    overflow: "hidden"
  },
  cardIcon: {
    fontSize: 64,
    color: "#23aae1",
  },
}))

const textOverflow = text => {
  if (text.length > 142) {
    return text.slice(0, 142) + "..."
  }
  return text
}

const HomeCard = ({ title, description, Icon }) => {
  const classes = useStyles()

  const content = textOverflow(description)

  return (
    <Box display="flex" className={classes.cardTranslate}>
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <Box
            width="250px"
            height="300px"
            p="10px"
            display="flex"
            flexDirection="column"
            alignContent="center"
            textAlign="center"
            gridGap="0.5em"
          >
            <Typography>
              <Icon className={classes.cardIcon} />
            </Typography>
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.description}>{content}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default HomeCard
