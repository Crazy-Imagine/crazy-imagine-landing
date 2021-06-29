import React from "react"
import { CssBaseline, Box } from "@material-ui/core"
import "../css/typography.css"

const PageWrapper = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box>{children}</Box>
    </>
  )
}

export default PageWrapper
