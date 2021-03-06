import React from 'react'
import Box from './Box'
import Heading from './Heading'
import LinkCard from './LinkCard'
import ImageFit from './ImageFit'

const VideoCard = props => (
  <Box width="100%">
    <LinkCard href={props.href}>
      <ImageFit src={props.src} />
      <Heading mt={2} fontSize={[3,3,4,4]} fontWeight='700'>{props.title}</Heading>
    </LinkCard>
  </Box>
)

export default VideoCard
