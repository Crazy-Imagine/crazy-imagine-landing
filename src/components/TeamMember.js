import React from "react"
import { Link } from "gatsby"

import {
  Box,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  cardContainer: {
    boxShadow: "none",
    backgroundColor: "#fafafa",
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
    height: 68,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
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
    color: "white",
    backgroundColor: "#292929",
    borderRadius: "50%",
    marginLeft: 5,
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
  const imageMember = getImage(image)

  const classes = useStyles()
  return (
    <Box>
      <Card className={classes.cardContainer}>
        <GatsbyImage
          image={imageMember}
          alt={title}
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
