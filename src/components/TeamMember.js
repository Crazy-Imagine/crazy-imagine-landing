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
  cardContainer: props => ({
    boxShadow: "none",
    backgroundColor: props.backgroundItem,
  }),
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
    alignItems: "flex-start",
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
  linkContainer: {
    textDecoration: "none",
    color: "#292929",
    display: "flex",
    flexDirection: "column",
  },
  resetCardMembers: {
    padding: 0,
  },
})

const TeamMember = ({
  name,
  lastName,
  slug,
  description,
  image,
  backgroundItem = "#fafafa",
}) => {
  const imageMember = getImage(image)

  const classes = useStyles({ backgroundItem })
  return (
    <Box>
      <Card className={classes.cardContainer}>
        <Link to={slug} className={classes.linkContainer}>
          <GatsbyImage
            image={imageMember}
            alt={name}
            className={classes.memberImage}
          />
          <Box maxWidth="230px">
            <CardContent className={classes.resetCardMembers}>
              <Typography variant="h4" className={classes.title}>
                {name} {lastName || ""}
              </Typography>
              <Typography className={classes.description}>
                {description}
              </Typography>
            </CardContent>
            <CardActions className={classes.resetCardMembers}>
              <Link to={slug} className={classes.link}>
                Read More <ChevronRightIcon className={classes.readMoreIcon} />
              </Link>
            </CardActions>
          </Box>
        </Link>
      </Card>
    </Box>
  )
}

export default TeamMember
