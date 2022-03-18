import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { WORK_WITH_US } from "../navigation/sitemap"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  workAdvice: {
    width: "80%",
    textAlign: "center",
    color: "#3399FF",
    fontFamily: "Gotham-ultra",
    fontWeight: "bold",
    fontSize: 28,
    textTransform: "uppercase",
    [theme.breakpoints.between("0", "450")]: {
      fontSize: 20,
      width: "85%",
    },
    [theme.breakpoints.between("451", "950")]: {
      fontSize: 25,
      width: "80%",
    },
  },
  button: {
    fontFamily: "Lato",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    backgroundColor: "#3399FF",
    margin: "auto",
    borderRadius: 4,
    border: "0px",
    "&:hover": {
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      backgroundColor: "#d5d5d5",
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px 25px",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginTop: 40,
    },
  },
}))

export const WorkButton = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography variant="h5" className={classes.workAdvice}>
        If you wanna know how feels be part of this incredible team
      </Typography>
      <Button variant="contained" size="large" className={classes.button}>
        <Link
          to={WORK_WITH_US}
          style={{
            textDecoration: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          Work With US
        </Link>
      </Button>
    </Box>
  )
}
