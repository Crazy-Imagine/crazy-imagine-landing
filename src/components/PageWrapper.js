import React from "react"
import { CssBaseline, Box } from "@material-ui/core"
import "../css/typography.css"

const PageWrapper = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Box className={classes.test}>{children}</Box>
    </>
  )
}

export default PageWrapper
