import React from 'react'
import NavLink from './NavLink'
import Box from './Box'

const NavList = props => (
  <Box>
    <NavLink href={props.href}>{props.title}</NavLink>
  </Box>
)

export default NavList
