import styled from 'styled-components'
import { space, fontSize, fontWeight, width, color } from 'styled-system'

const SubHeading = styled('h2')(
  {
    fontWeight: 700,
    lineHeight: 1.25
  },
  space,
  fontSize,
  fontWeight,
  width,
  color
)

SubHeading.defaultProps = {
  fontSize: 3,
  m: 0
}

export default SubHeading
