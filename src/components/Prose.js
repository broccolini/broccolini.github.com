import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color, fontWeight } from 'styled-system'
import sx from './sx'
import {css} from '@theme-ui/css'

const Prose = styled('div')(
  css({
    fontSize: 1,
    fontWeight: 400,
    paddingTop: '1px',
    p: {
      margin: 0,
      marginTop: '24px'
    },
    img: {
        maxWidth: '100%',
    },
    a: {
      color: 'black',
    },
    ul: {
      paddingLeft: 2,
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
    pre: {
      marginLeft: '-29px',
      marginBottom: 3,
      marginTop: '2px',
      backgroundColor: 'grayLight',
      display: 'inline'
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