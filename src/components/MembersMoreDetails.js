import React from "react"
import { Box, makeStyles, Typography } from "@material-ui/core"
import MemberServices from "./MemberServices"

const useStyles = makeStyles({
  title: {
    marginBottom: 28,
    fontSize: 63,
    fontFamily: "Gotham",
    color: "rgb(4, 14, 18)",
  },
  description: {
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
})

const MembersMoreDetails = () => {
  const classes = useStyles()
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      marginTop="78px"
      marginBottom="90px"
    >
      <Box textAlign="center" maxWidth="680px" marginBottom="62px">
        <Typography className={classes.title}>More details About</Typography>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
      <MemberServices />
    </Box>
  )
}

export default MembersMoreDetails
