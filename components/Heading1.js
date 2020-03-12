import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Heading1 = styled('h1')(
  [],
  props => ({
    fontWeight: 'bold',
    lineHeight: 1.25
  }),
  space,
  fontSize,
  width,
  color
)

Heading1.defaultProps = {
  fontSize: 8,
  m: 0
}

export default Heading1
