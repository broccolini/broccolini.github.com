import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Post from './Post'
import Prose from './Prose'

const PostItem = props => (
  <Post pb={3}>
    <Prose>
      {props.children}
    </Prose>
  </Post>
)

export default PostItem