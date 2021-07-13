import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import BlogPost from "./BlogPost"

const useStyes = makeStyles({
  title: {
    fontFamily: "Gotham-ultra",
    fontSize: 40,
    color: "#000a30",
    fontWeight: "bold",
  },
  boxLine: {
    backgroundColor: "#23aae1",
  },
})

const LastestPosts = () => {
  const classes = useStyes()

  return (
    <Box py="80px">
      <Box
        textAlign="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component={"div"} className={classes.title}>
          Lastest Posts
        </Typography>
        <Box
          width="45px"
          height="6px"
          marginBottom={{ xs: "30px", md: "108px" }}
          marginTop="8px"
          className={classes.boxLine}
        ></Box>
      </Box>
      <BlogPost />
    </Box>
  )
}

export default LastestPosts
