import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const LinkWavy = styled('a')(
  props => ({
    webkitTextDecoration: 'underline wavy yellow',
    textDecoration: 'underline wavy yellow'
  }),
  space,
  fontSize,
  width,
  color
)

LinkWavy.defaultProps = {
  color: 'blue'
}

export default LinkWavy
