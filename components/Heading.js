import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color, fontWeight } from 'styled-system'

const Heading = styled('h2')(
  [],
  props => ({
    lineHeight: 1.25
  }),
  space,
  fontSize,
  fontWeight,
  width,
  color
)

Heading.defaultProps = {
  fontWeight: 700,
  fontSize: 5,
  m: 0
}

export default Heading
