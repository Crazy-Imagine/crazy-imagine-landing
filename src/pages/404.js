import * as React from "react"
import { Suspense, lazy } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"


import { HOME } from "../navigation/sitemap"
const Layout = lazy(() => import("../components/layout"))
//import Layout from "../components/layout"

const useStyles = makeStyles({
  navbarLogo: {
    width: 300,
    height: 160,
  },
  title: {
    fontSize: 70,
    fontWeight: "bold",
    textAlign: "center"
  }
})

const NotFoundPage = () => {
  const classes = useStyles()
  return (
    <main>

      <Layout seo={{ metaTitle: "404: Not found" }} >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
          <Link to={`${HOME}`}>
            <StaticImage
              src="../images/LOGO.png"
              alt="logo"
              className={classes.navbarLogo}
            />
          </Link>
          <Typography variant="h3" className={classes.title}>Page Not Found</Typography>
        </Box>
      </Layout>
    </main>
  )
}

export default NotFoundPage
