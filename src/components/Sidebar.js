import React from "react"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  container: {
    backgroundColor: "#F7F7F7",
  },
})

const Sidebar = ({ children }) => {
  const classes = useStyles()
  return (
    <Box
      px="24px"
      paddingTop="64px"
      position="sticky"
      top="100px"
      width={{
        md: "320px",
        lg: "460px",
      }}
      className={classes.container}
    >
      {children}
    </Box>
  )
}

export default Sidebar
