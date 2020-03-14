import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'
import Heading from './Heading'

const HeadingAccent = styled(Heading)(
  {
    borderBottomColor: '#6AFFC9',
    borderBottomWidth: '4px',
    borderBottomStyle: 'solid'
  },
  space,
  fontSize,
  width,
  color
)

HeadingAccent.defaultProps = {
  fontSize: 5
}

export default HeadingAccent
