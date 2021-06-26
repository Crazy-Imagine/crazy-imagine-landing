import React from "react"
import { Link } from "gatsby"

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles({
  cardContainer: {
    boxShadow: "none",
  },
  memberImage: {
    width: 228,
    height: 285,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 28,
    color: "#292929",
    marginBottom: 22,
    textTransform: "uppercase",
  },
  description: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#292929",
    marginBottom: 12,
    maxHeight: 63,
    overflow: "hidden",
  },
  readMoreIcon: {
    fontSize: 15,
  },
  link: {
    textDecoration: "none",
    color: "#292929",
    display: "flex",
    alignItems: "center",
  },
  resetCardMembers: {
    padding: 0,
  },
})

const TeamMember = ({ title, description, image }) => {
  const classes = useStyles()
  return (
    <Box>
      <Card className={classes.cardContainer}>
        <CardMedia
          image={image}
          title="image"
          className={classes.memberImage}
        />
        <Box maxWidth="230px">
          <CardContent className={classes.resetCardMembers}>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </CardContent>
          <CardActions className={classes.resetCardMembers}>
            <Link to="/" className={classes.link}>
              Read More <ChevronRightIcon className={classes.readMoreIcon} />
            </Link>
          </CardActions>
        </Box>
      </Card>
    </Box>
  )
}

export default TeamMember
