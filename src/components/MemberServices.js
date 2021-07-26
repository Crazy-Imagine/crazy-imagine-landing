import React from "react"
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import {
  DesktopMacOutlined,
  DiscFullOutlined,
  MouseOutlined,
  PhoneOutlined,
  TimelineOutlined,
  WebOutlined,
} from "@material-ui/icons"
import { graphql, useStaticQuery } from "gatsby"
const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: 24,
    fontSize: 40,
    fontFamily: "Poppins",

    fontWeight: " bold",
  },
  servicesDescription: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  servicesIcons: {
    fontSize: 40,
  },
  servicesItem: {
    display: "flex",
    justifyContent: "center",
    transitionProperty: "background-color, color",
    transitionDuration: "300ms",
    "&:hover": {
      backgroundColor: "#23aae1",
      color: "white",
      border: 0,
    },
    border: "1px solid rgb(230, 230, 230)",
  },
  servicesContainer: {
    width: "100%",
    margin: 0,
  },
  itemContent: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}))

const MemberServices = () => {
  const classes = useStyles()
  const icons = [
    <MouseOutlined className={classes.servicesIcons} />,
    <DiscFullOutlined className={classes.servicesIcons} />,
    <DesktopMacOutlined className={classes.servicesIcons} />,
    <WebOutlined className={classes.servicesIcons} />,
    <PhoneOutlined className={classes.servicesIcons} />,
    <TimelineOutlined className={classes.servicesIcons} />,
  ]
  const data = useStaticQuery(graphql`
    query {
      details: allStrapiMemberpage {
        nodes {
          moreDetails {
            description
            id
            title
          }
        }
      }
    }
  `)

  return (
    <Box textAlign="center">
      <Grid
        container
        spacing={6}
        justifyContent="center"
        className={classes.servicesContainer}
        wrap="wrap"
      >
        {data.details.nodes[0].moreDetails.map((el, i) => {
          return (
            <Grid
              item
              md={4}
              xs={12}
              className={classes.servicesItem}
              key={el.id}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                className={classes.itemContent}
                height="326px"
                px="87px"
              >
                <Box marginBottom="26px">{icons[i]}</Box>
                <Typography variant="h4" className={classes.title}>
                  {el.title}
                </Typography>
                <Typography className={classes.servicesDescription}>
                  {el.description}
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default MemberServices
