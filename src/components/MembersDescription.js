import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import ReactMarkdown from "react-markdown"
import MembersTechnologies from "./MembersTechnologies"

const useStyles = makeStyles(theme => ({
  bgImage: {
    width: "100%",
    height: 1380,
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },

  wrapper: {
    maxHeight: 1080,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      overflow: "auto",
      marginTop: 0,
    },
  },
  description: {
    color: "white",
    fontSize: 18,
    "& h2": {
      fontSize: 42,
    },
    "& h3": {
      fontSize: 28,
    },
    "& ul": {
      padding: 0,
      paddingLeft: 16,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%",
      margin: "auto",
    },
  },
  techcnologiesContainer: {
    maxWidth: "none",
  },
  descriptionContainer: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: 0,
      paddingBottom: 40,
      paddingTop: 180,
    },
  },
}))

const MembersDescription = ({ member }) => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const dataImage = data.strapiMemberpage.Background.localFile
        const bgImage = getImage(dataImage)

        return (
          <Box className={classes.wrapper} marginTop="-170px">
            <BgImage Tag="section" className={classes.bgImage} image={bgImage}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Box maxWidth="925px">
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={4}
                    className={classes.descriptionContainer}
                  >
                    <Grid item xs={12} md={6}>
                      <ReactMarkdown className={classes.description}>
                        {member.description}
                      </ReactMarkdown>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <ReactMarkdown className={classes.description}>
                        {member.portfolio}
                      </ReactMarkdown>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      className={classes.techcnologiesContainer}
                    >
                      <MembersTechnologies skills={member.skill} />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </BgImage>
          </Box>
        )
      }}
    />
  )
}

const query = graphql`
  query MemberPage {
    strapiMemberpage {
      Background {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default MembersDescription
