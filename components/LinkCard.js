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
    textDecoration: 'none'
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
  hover: {
    color: '#fff',
    '& img': {
      transition: 'all 0.10s',
      filter: 'hue-rotate(177deg)',
      'outline-style': 'solid',
      'outline-width': '4px',
      'outline-color': 'white'
    }
  }
}

export default LinkCard
