import React from 'react'
import Box from './Box'

const StreamItem = ({ sx, ...props }) =>
<Box mb={5}>
  <Box
    {...props}
    sx={{
      borderColor: 'gray',
      borderWidth: '2px',
      borderStyle: 'dashed',
      ...sx
    }}
  />
</Box>

export default StreamItem