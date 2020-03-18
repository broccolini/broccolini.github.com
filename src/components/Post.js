import React from 'react'
import Box from './Box'
import Text from './Text'

const Post = ({ sx, ...props }) =>
<Box mb={5}>
  <Text>{props.date}</Text>
  <Box
    {...props}
    sx={{
      fontFamily: 'mono',
      borderColor: 'black',
      borderWidth: '2px',
      borderStyle: 'dashed',
      paddingX: 3,
      paddingBottom: 2,
      ...sx
    }}
  />
</Box>

export default Post