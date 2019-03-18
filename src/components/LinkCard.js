import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
} from 'styled-system'

const LinkCard = styled('a')(
  [],
  props => ({
    webkitTextDecoration: 'none',
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
      '& img': {
        transition: 'all 0.10s',
        filter: 'hue-rotate(177deg)',
        'outline-style': 'solid',
        'outline-width': '4px',
        'outline-color': 'white'
      }
    }
  }),
  space,
  fontSize,
  width,
  color,
)

LinkCard.defaultProps = {
  color: 'yellow',
}

export default LinkCard
