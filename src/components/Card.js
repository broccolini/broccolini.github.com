import React from 'react'
import LinkDark from './LinkDark'
import Image from './Image'
import SubHeading from './SubHeading'
import Box from './Box'

const Card = props => (
  <Box width="100%">
    <LinkDark href={props.href}>
      <Image width="100%" src={props.src} />
      <SubHeading mt={2}>{props.title}</SubHeading>
    </LinkDark>
  </Box>
)

export default Card
