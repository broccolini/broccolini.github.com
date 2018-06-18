import React from 'react'
import Box from './Box'
import Text from './Text'
import LinkDark from './LinkDark'
import Heading from './Heading'
import SubHeading from './SubHeading'
import Link from './Link'

const Media = props => (
  <Box mb={4}>
    <Link href={props.href}>
      <SubHeading mb={1}>{props.title}</SubHeading>
    </Link>
    <Text>{props.text}</Text>
  </Box>
)

export default Media
