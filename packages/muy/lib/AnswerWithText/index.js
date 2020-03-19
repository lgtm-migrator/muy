import React from "react"
import Box from "@material-ui/core/Box"

const AnswerWithText = ({ children, ...props }) => (
  <Box
    component={"dd"}
    itemScope
    itemProp="acceptedAnswer"
    itemType="https://schema.org/Answer"
    {...props}
  >
    <Box itemProp="text">{children}</Box>
  </Box>
)

export default AnswerWithText
