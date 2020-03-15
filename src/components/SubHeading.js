import styled from 'styled-components'
import { space, fontSize, fontWeight, width, color } from 'styled-system'

const SubHeading = styled('h2')(
  {
    fontWeight: 700,
    lineHeight: 1.25,
    margin: 0,
  },
  space,
  fontSize,
  fontWeight,
  width,
  color
)

SubHeading.defaultProps = {
  fontSize: 3,
}

export default SubHeading
