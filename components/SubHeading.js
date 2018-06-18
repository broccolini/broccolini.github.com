import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const SubHeading = styled('h2')(
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

SubHeading.defaultProps = {
  fontSize: 4,
  m: 0
}

export default SubHeading
