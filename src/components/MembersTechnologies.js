import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  skillName: {
    color: "white",
    fontSize: 22,
  },
  skillPercentage: {
    fontSize: 36,
    fontFamily: "Roboto-Black",
    zIndex: 999,
  },
  percentageContainer: {
    color: "white",
    background: "linear-gradient(to right top, #22A9E1 0%, #BD20DA 100%)",
    borderRadius: "50%",
    boxShadow: "0px 0px 52.65px 12.35px rgba(0, 0, 0, 0.004)",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      position: "absolute",
      content: "''",
      borderRadius: "50%",
      width: "82%",
      height: "82%",
      background: "black",
    },
  },
  skillsContainer: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}))

const MembersTechnologies = ({ skills }) => {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      gridGap="70px"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      width="1060px"
      className={classes.skillsContainer}
    >
      {skills.map(el => (
        <Box key={el.name}>
          {el.name ? (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gridGap="18px"
            >
              <Box
                width="115px"
                height="122px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={classes.percentageContainer}
              >
                <Typography className={classes.skillPercentage}>
                  {el.percentage}
                </Typography>
              </Box>
              <Typography className={classes.skillName}> {el.name} </Typography>
            </Box>
          ) : (
            ""
          )}
        </Box>
      ))}
    </Box>
  )
}

export default MembersTechnologies
