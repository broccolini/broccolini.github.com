import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color, fontWeight } from 'styled-system'
import sx from './sx'
import {css} from '@theme-ui/css'

const Heading = styled('h2')(
  css({
    lineHeight: 1.25,
    fontWeight: 700,
    fontSize: 5,
    margin: 0
  }),
  space,
  fontSize,
  fontWeight,
  width,
  color,
  sx
)

export default Heading
