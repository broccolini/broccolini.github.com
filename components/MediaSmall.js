import React from 'react'
import Box from './Box'
import SubHeading from './SubHeading'
import Text from './Text'
import Link from './Link'

const MediaSmall = props => (
  <Box mb={3}>
    <Link href={props.href}>
      <SubHeading mb={1}>{props.title}</SubHeading>
    </Link>
    <Text>{props.text}</Text>
  </Box>
)

export default MediaSmall
