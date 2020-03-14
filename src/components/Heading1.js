import styled from 'styled-components'
import { space, fontSize, fontFamily, width, color } from 'styled-system'

const Heading1 = styled('h1')(
  {
    fontWeight: '700',
    lineHeight: 1.25
  },
  space,
  fontFamily,
  fontSize,
  width,
  color
)

Heading1.defaultProps = {
  fontSize: 8,
  m: 0
}

export default Heading1
