import * as React from "react"
import { useEffect, useState, useRef } from "react"
import { Box, Typography, Grid, Card, CardContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined"
import DevicesIcon from "@material-ui/icons/Devices"
import CardTravelIcon from "@material-ui/icons/CardTravel"
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import TranslateIcon from "@material-ui/icons/Translate"
import BookIcon from "@material-ui/icons/Book"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  title: {
    width: "60%",
    color: "#000a30",
    fontSize: 44,
    overflowX: "hidden",
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    infoRefTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  titleValues: {
    width: "60%",
    color: "#000a30",
    fontSize: 44,
    overflowX: "hidden",
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  titleBenefits: {
    color: "#000a30",
    fontSize: 44,
    overflowX: "hidden",
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
    },
  },
  paragraphValues: {
    color: "#000a30",
    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 25,
    marginLeft: "50px",
    marginRight: "50px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
      marginLeft: "35px",
      marginRight: "35px",
      marginBottom: "15px",
      paddingTop: 12,
      paddingBottom: 12,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 17,
      padding: 0,
      margin: "25px",
    },
  },
  boxLine: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
    },
  },
  displayImage: {
    width: "70%",
    height: "70%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  containerResponsiveReverse: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  animationLeft: {
    animation: `$myEffectLeft 3000ms`,
  },
  animationRight: {
    animation: `$myEffectRight 3000ms`,
  },
  animationBounce: {
    animation: `$bounceBenefits 1.5s`,
  },
  containerResponsive: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  paragraph: {
    color: "#000a30",
    fontSize: 20,
    fontFamily: "Roboto",
    paddingTop: 25,
    paddingBottom: 5,
    marginRight: 30,
    [theme.breakpoints.down("sm")]: {
      margin: "30px",
      paddingTop: 15,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 17,
    },
  },
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
  "@keyframes myEffectLeft": {
    "0%": {
      transform: "translateX(-200%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
  "@keyframes myEffectRight": {
    "0%": {
      transform: "translateX(200%)",
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

const WorkInfo = () => {
  const classes = useStyles()
  const [isVisibleTitle1, setVisibleTitle1] = useState(false)
  const [isVisibleTitle2, setVisibleTitle2] = useState(false)
  const [isVisibleTitle3, setVisibleTitle3] = useState(false)
  const [isVisibleBounce, setVisibleBounce] = useState(false)

  const infoRef = useRef()
  const infoRef2 = useRef()
  const infoRef3 = useRef()
  const infoRef4 = useRef()

  useEffect(() => {
    const infoRefCurrent = infoRef.current
    const infoRef2Current = infoRef2.current
    const infoRef3Current = infoRef3.current
    const infoRef4Current = infoRef4.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle1 && entry.isIntersecting)
          setVisibleTitle1(entry.isIntersecting)
      })
    })

    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle2 && entry.isIntersecting)
          setVisibleTitle2(entry.isIntersecting)
      })
    })

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleTitle3 && entry.isIntersecting)
          setVisibleTitle3(entry.isIntersecting)
      })
    })

    const observer4 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!isVisibleBounce && entry.isIntersecting)
          setVisibleBounce(entry.isIntersecting)
      })
    })

    observer.observe(infoRefCurrent)
    observer2.observe(infoRef2Current)
    observer3.observe(infoRef3Current)
    observer4.observe(infoRef4Current)

    return () => {
      observer.unobserve(infoRefCurrent)
      observer2.unobserve(infoRef2Current)
      observer3.unobserve(infoRef3Current)
      observer4.unobserve(infoRef4Current)
    } // clean up
  }, [isVisibleBounce, isVisibleTitle1, isVisibleTitle2, isVisibleTitle3])
  return (
    <>
      <Box paddingTop="35px">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Box
                ref={infoRef}
                className={`${isVisibleTitle1 ? classes.animationLeft : ""}`}
              >
                <Typography variant="h5" className={classes.title}>
                  YOUR DREAM JOB, HERE!
                </Typography>
                <Box
                  width="45px"
                  height="6px"
                  style={{ backgroundColor: "#000a30" }}
                  className={classes.boxLine}
                ></Box>
              </Box>
              <Typography className={classes.paragraph}>
                We are a fresh and comfortable startup with more than 5 years on
                the market. We work with the most recent development
                technologies, offering the best of our efforts to bring to the
                client the best quality products. Covering most of the
                development areas. Our products and services have highlights on
                turnaround time, design, mobile responsive, web, and app
                development.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box display="flex" flexDirection="row" justifyContent="center">
              <StaticImage src="../images/IMG_6778.jpg" alt="Team mates" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box paddingTop="35px">
        <Grid container className={classes.containerResponsiveReverse}>
          <Grid item xs={12} sm={12} md={4}>
            <Box display="flex" flexDirection="row" justifyContent="center">
              <StaticImage
                src="../images/IMG_7492.jpg"
                alt="Boss with the team"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={5}>
            <Box
              ref={infoRef2}
              className={`${isVisibleTitle2 ? classes.animationRight : ""}`}
            >
              <Typography variant="h6" className={classes.titleValues}>
                KNOW OUR VALUES
              </Typography>
              <Box
                width="45px"
                height="6px"
                marginLeft="50px"
                style={{ backgroundColor: "#000a30" }}
              ></Box>
            </Box>
            <Typography variant="h5" className={classes.title}></Typography>
            <Typography className={classes.paragraphValues}>
              We mainly focuse on responsability, efficiency, respect, kindness,
              we care about your physical and mental health.
            </Typography>
            <Typography className={classes.paragraphValues}>
              We take care of our employees, promoting a relaxed and fun work
              environment, choosing social activities to integrate all of them.
            </Typography>
            <Typography className={classes.paragraphValues}>
              We evaluate you, and we choose you a challenge that you can reach
              results and improve your skills.
            </Typography>
            <Typography className={classes.paragraphValues}>
              Our principal challenge is that you grow with us.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop="50px">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.benefitsResponsive}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box
              className={`${classes.benefitsMargin} ${
                isVisibleTitle3 ? classes.animationLeft : ""
              }`}
              ref={infoRef3}
            >
              <Typography
                variant="h4"
                className={`${classes.titleBenefits}  ${
                  isVisibleTitle3 ? classes.animationLeft : ""
                }`}
                ref={infoRef3}
              >
                Benefits
              </Typography>
              <Box
                width="45px"
                height="6px"
                style={{ backgroundColor: "#000a30" }}
              ></Box>
            </Box>
            <Box display="flex" flexDirection={"row"} justifyContent={"center"}>
              <StaticImage
                src="../images/IMG_7497.jpg"
                alt="Team having a good time"
                className={classes.displayImage}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Card
                className={`${classes.firstCard}  ${
                  isVisibleBounce ? classes.animationBounce : ""
                }`}
                ref={infoRef4}
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
                  isVisibleBounce ? classes.animationBounce : ""
                }`}
                ref={infoRef4}
              >
                <CardContent>
                  <Typography className={classes.benefits}>
                    <DevicesIcon className={classes.icon} />
                    We bring you hardware since day one
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className={`${classes.thirdCard}  ${
                  isVisibleBounce ? classes.animationBounce : ""
                }`}
                infoRef={infoRef4}
              >
                <CardContent>
                  <Typography className={classes.benefits}>
                    <CardTravelIcon className={classes.icon} />
                    Social activities to all the team, hangouts, travels,
                    dinner, birth celebrations, and more
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className={`${classes.fourthCard}  ${
                  isVisibleBounce ? classes.animationBounce : ""
                }`}
                ref={infoRef4}
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
                  isVisibleBounce ? classes.animationBounce : ""
                }`}
                ref={infoRef4}
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
                  isVisibleBounce ? classes.animationBounce : ""
                }`}
                ref={infoRef4}
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
    </>
  )
}

export default WorkInfo
