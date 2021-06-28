import React from "react"
import { CssBaseline } from "@material-ui/core"
import "../css/typography.css"
const PageWrapper = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
}

export default PageWrapper
