import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, Grid, makeStyles } from "@material-ui/core"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import ReactMarkdown from "react-markdown"

const useStyles = makeStyles({
  bgImage: {
    width: "100%",
    height: 1040,
  },

  wrapper: {
    background: "red",
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
  },
})

const MembersDescription = ({ member }) => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={query}
      render={data => {
        const dataImage = data.strapiMemberpage.Background.localFile
        const bgImage = getImage(dataImage)

        return (
          <Box className={classes.wrapper}>
            <BgImage Tag="section" className={classes.bgImage} image={bgImage}>
              <Box
                height="1200px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box maxWidth="925px">
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={4}
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
