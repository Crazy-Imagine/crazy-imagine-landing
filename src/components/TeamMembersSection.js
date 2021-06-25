import React from "react"
import { Typography } from "@material-ui/core"
import { Box } from "@material-ui/core"
import TeamMember from "./TeamMember"
import image from "../images/backgroundfafa.jpg"

const TeamMembersSection = () => {
  return (
    <Box>
      <Typography>Team Members</Typography>
      <TeamMember
        title="Lorem ipsum Amaet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore"
        image={image}
      />
    </Box>
  )
}

export default TeamMembersSection
