import React from "react"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
const useStyles = makeStyles({
  blockImage: {
    width: "100%",
    height: 250,
  },
  cardContainer: {
    width: 360,
    height: 545,
    backgroundColor: "#ffffff",
    transition: "linear 300ms",
    "&:hover": {
      boxShadow: "1px 4px 30px 0px rgba(0,0,0,0.15)",
      backgroundColor: "#F9F9F9",
    },
  },
  content: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 24,
  },
  colorPostBy: {
    color: "#989898",
  },
  colorAuthor: {
    color: "#272727",
    fontWeight: 600,
  },
  tag: {
    height: 25,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 500,
    color: "white",
    backgroundColor: "#23aae1",
    padding: 8,
    display: "flex",
    alignItems: "center",
  },
  postDecorate: {
    backgroundColor: "#b21e1e",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 18,
    color: "#272727",
    marginBottom: 15,
  },
  postDescription: {
    fontFamily: "Hind",
    fontSize: 14,
    color: "#464646",
    marginBottom: 28,
    height: 63,
  },
  cardDivider: {
    color: "#ededed",
    marginBottom: 28,
  },
  footerNumber: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: 600,
  },
  footerShare: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: 600,
    color: "#272727",
  },
  footerIcons: {
    fontSize: 8,
    marginRight: 4,
    color: "#dcdcdc",
  },
})

const textOverflow = text => {
  if (text.length > 100) {
    return text.slice(0, 100) + "..."
  }
  return text
}

const PostCard = ({
  image,
  author,
  tags,
  title,
  description,
  footerNumber,
  share,
  variant = "default",
}) => {
  const classes = useStyles({
    variant,
  })
  const content = textOverflow(description)
  return (
    <Box>
      <Card className={classes.cardContainer}>
        <CardMedia image={image} title={title} className={classes.blockImage} />
        <Box
          paddingTop="37px"
          paddingRight="33px"
          paddingBottom="31px"
          paddingLeft="29px"
        >
          <CardContent>
            <Typography component={"div"} className={classes.content}>
              <Box display="flex" gridGap="8px" alignItems="center">
                <Typography className={classes.colorPostBy}>Post by</Typography>
                <Typography variant="subtitle2" className={classes.colorAuthor}>
                  {author}
                </Typography>
                <Typography className={classes.tag}>{tags}</Typography>
              </Box>
            </Typography>
            <Grid container>
              <Grid item>
                <Box
                  width="10px"
                  height="3px"
                  marginRight="14px"
                  marginTop="9px"
                  className={classes.postDecorate}
                ></Box>
              </Grid>
              <Grid item xs>
                <Typography variant="h3" className={classes.title}>
                  {title}
                </Typography>
                <Typography className={classes.postDescription}>
                  {content}
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.cardDivider} />
            <CardActions>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography className={classes.footerShare}>
                  {share ? (
                    share
                  ) : (
                    <>
                      {" "}
                      <FiberManualRecordIcon className={classes.footerIcons} />
                      <FiberManualRecordIcon className={classes.footerIcons} />
                      <FiberManualRecordIcon
                        className={classes.footerIcons}
                      />{" "}
                    </>
                  )}
                </Typography>
                <Typography className={classes.footerNumber}>
                  {footerNumber}
                </Typography>
              </Box>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </Box>
  )
}

export default PostCard
