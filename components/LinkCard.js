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
      color: '#6AFFC9',
      '& img': {
        transitionProperty: 'transform, filter',
        transitionDuration: '.3s, .10s',
        transitionTimingFunction: 'ease-in-out, ease-in-out',
        filter: 'hue-rotate(170deg)'
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
  color: '#f352ff',
  bg: 'white',
}

export default LinkCard
