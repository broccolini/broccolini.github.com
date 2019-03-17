import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  hover,
  active,
  focus
} from 'styled-system'

const LinkCard = styled('a')(
  [],
  props => ({
    webkitTextDecoration: 'none',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
      '& img': {
        transitionProperty: 'transform, filter',
        transitionDuration: '.3s, .10s',
        transitionTimingFunction: 'ease-in-out, ease-in-out',
        transform: 'scale(1.01)',
        filter: 'hue-rotate(177deg)'
      }
    }
  }),
  space,
  fontSize,
  width,
  color,
  hover,
  active,
  focus
)

LinkCard.defaultProps = {
  color: 'yellow',
  bg: 'white',
}

export default LinkCard
