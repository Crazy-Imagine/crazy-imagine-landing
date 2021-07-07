import React, { useState } from "react"
import {
  Box,
  Paper,
  Tabs,
  Tab,
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsContainer: {
    backgroundColor: "transparent",
  },
  tabText: {
    color: "white !important",
  },
  ourPackages: {
    color: "white",
    fontFamily: "Gotham",
    textTransform: "uppercase",
  },
  ourPackagesContainer: {
    backgroundColor: "#23aae1",
  },
}))

const ProjectCatalogTabs = () => {
  const classes = useStyles()
  const [value, setValue] = useState(2)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box marginTop="75px">
      <Paper square className={classes.tabsContainer}>
        <Tabs
          value={value}
          indicatorColor="secondary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="ALL" className={classes.tabText} />
          <Tab label="WEBDESING" className={classes.tabText} />
          <Tab label="MOBILE" className={classes.tabText} />
          <Tab label="DEVELOPMENT" className={classes.tabText} />
        </Tabs>
      </Paper>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          width="244px"
          height="5px"
          zIndex="999"
          marginTop="12px"
          className={classes.ourPackagesContainer}
        />
        <Box
          width="170px"
          height="31px"
          borderRadius="30px"
          className={classes.ourPackagesContainer}
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="999"
        >
          <Typography className={classes.ourPackages}>Our packages</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCatalogTabs
