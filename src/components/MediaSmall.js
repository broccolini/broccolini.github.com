import React from 'react'
import Box from './Box'
import SubHeading from './SubHeading'
import Text from './Text'
import Link from './Link'

const MediaSmall = props => (
  <Box mb={2}>
    <Link href={props.href}>
      <SubHeading fontSize={2}>{props.title}</SubHeading>
    </Link>
    <Text fontFamily='mono' fontSize={2}>{props.text}</Text>
  </Box>
)

export default MediaSmall
