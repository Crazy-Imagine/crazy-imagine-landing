import React, { useRef } from "react"
import { Box, Typography, Grid, Card, CardContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined"
import DevicesIcon from "@material-ui/icons/Devices"
import CardTravelIcon from "@material-ui/icons/CardTravel"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import TranslateIcon from "@material-ui/icons/Translate"
import BookIcon from "@material-ui/icons/Book"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  firstCard: {
    marginTop: 15,
    marginBottom: 15,
    width: "85%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  secondCard: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 25,
    width: "85%",
    animationDelay: "1s",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  thirdCard: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 45,
    width: "85%",
    animationDelay: "2s",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  fourthCard: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 45,
    marginRight: "100px",
    width: "85%",
    animationDelay: "3s",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  fifthCard: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 25,
    width: "85%",
    animationDelay: "4s",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  sixthCard: {
    marginTop: 15,
    marginBottom: 15,
    width: "85%",
    animationDelay: "5s",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  benefits: {
    color: "#000a30",
    fontSize: 20,
    fontFamily: "Roboto",
    [theme.breakpoints.down("sm")]: {
      fontSize: 17,
    },
  },
  benefitsResponsive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  benefitsMargin: {
    width: "auto",
    marginLeft: "105px",
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "50px",
    },
  },
  icon: {
    verticalAlign: "middle",
    margin: 5,
  },
  marginBox: {
    marginTop: "50px",
  },
  resizeImage: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  boxImage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  titleBenefits: {
    color: "#000a30",
    fontSize: 44,
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  boxLine: {
    width: "45px",
    height: "6px",
    backgroundColor: "#000a30",
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  displayImage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  animationLeft: {
    animation: `$myEffectLeft 3000ms`,
  },
  animationBounce: {
    animation: `$bounceBenefits 3000ms`,
  },
  "@keyframes myEffectLeft": {
    "0%": {
      transform: "translateX(-200%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes bounceBenefits": {
    "0%": { transform: "translateY(0)" },
    "20%": { transform: "translateY(0)" },
    "40%": {
      transform: "translateY(-30px)",
    },
    "50%": { transform: "translateY(0)" },
    "60%": { transform: "translateY(-15px)" },
    "80%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(0)" },
  },
}))

const WorkBenefits = () => {
  const classes = useStyles()
  const titleref = useRef()
  const benefitsref = useRef()
  const visibleTitle = useIntersection(titleref, "0px")
  const bounceCards = useIntersection(benefitsref, "0px")

  const data = useStaticQuery(query)
  const image = data.strapiTeampage.BenefitsImage.localFile
  console.log(image)

  return (
    <Box className={classes.marginBox}>
      <Grid container className={classes.benefitsResponsive}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            className={`${classes.benefitsMargin} ${
              visibleTitle ? classes.animationLeft : ""
            }`}
            ref={titleref}
          >
            <Typography variant="h4" className={classes.titleBenefits}>
              Benefits
            </Typography>
            <Box className={classes.boxLine}></Box>
          </Box>
          <Box className={classes.boxImage}>
            <GatsbyImage
              image={getImage(image)}
              alt="Team mates hanging out"
              className={classes.resizeImage}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box ref={benefitsref}>
            <Card
              className={`${classes.firstCard}  ${
                bounceCards ? classes.animationBounce : ""
              }`}
            >
              <CardContent>
                <Typography className={classes.benefits}>
                  <HomeWorkOutlinedIcon className={classes.icon} />
                  You can choose your way of work, 100% remote or work office
                </Typography>
              </CardContent>
            </Card>
            <Card
              className={`${classes.secondCard}  ${
                bounceCards ? classes.animationBounce : ""
              }`}
            >
              <CardContent>
                <Typography className={classes.benefits}>
                  <DevicesIcon className={classes.icon} />
                  We bring you hardware since day one.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className={`${classes.thirdCard}  ${
                bounceCards ? classes.animationBounce : ""
              }`}
            >
              <CardContent>
                <Typography className={classes.benefits}>
                  <CardTravelIcon className={classes.icon} />
                  Social activities to all the team, hangouts, travels, dinner,
                  birth celebrations, and more
                </Typography>
              </CardContent>
            </Card>
            <Card
              className={`${classes.fourthCard}  ${
                bounceCards ? classes.animationBounce : ""
              }`}
            >
              <CardContent>
                <Typography className={classes.benefits}>
                  <AttachMoneyIcon className={classes.icon} />
                  Payment in USD
                </Typography>
              </CardContent>
            </Card>
            <Card
              className={`${classes.fifthCard}  ${
                bounceCards ? classes.animationBounce : ""
              }`}
            >
              <CardContent>
                <Typography className={classes.benefits}>
                  <TranslateIcon className={classes.icon} />
                  English classes
                </Typography>
              </CardContent>
            </Card>
            <Card
              className={`${classes.sixthCard}  ${
                bounceCards ? classes.animationBounce : ""
              }`}
            >
              <CardContent>
                <Typography className={classes.benefits}>
                  <BookIcon className={classes.icon} />
                  Online courses
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const query = graphql`
  query {
    strapiTeampage {
      BenefitsImage {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  }
`

export default WorkBenefits
