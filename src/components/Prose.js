import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color, fontWeight } from 'styled-system'
import sx from './sx'
import {css} from '@theme-ui/css'

const Prose = styled('div')(
  css({
    fontSize: 1,
    fontWeight: 400,
    img: {
        maxWidth: '100%',
    },
    blockquote: {
      margin:0,
    }
  }),
  space,
  fontSize,
  fontWeight,
  width,
  color,
  sx
)

export default Prose