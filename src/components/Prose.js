import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color, fontWeight } from 'styled-system'
import sx from './sx'
import {css} from '@theme-ui/css'

const Prose = styled('div')(
  css({
    fontSize: 1,
    fontWeight: 400,
    lineheight: '1.25',
    img: {
        maxWidth: '100%',
    },
    a: {
      color: 'black',
    },
    blockquote: {
      fontFamily:'serif',
      fontSize: 5,
      borderLeftColor: 'grayLight',
      borderLeftWidth: '1',
      borderLeftStyle: 'solid',
      margin: 0,
      paddingLeft: 2,
    },
    small: {
      marginLeft: '-28px',
      marginTop: -4,
      backgroundColor: 'grayLight'
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