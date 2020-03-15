import React from 'react'
import Heading from './Heading'

const HeadingAccent = ({ sx, ...props }) =>
  <Heading
    {...props}
    sx={{
      borderBottomColor: 'green',
      borderBottomWidth: '4px',
      borderBottomStyle: 'solid',
      ...sx
    }}
  />

export default HeadingAccent
