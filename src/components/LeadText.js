import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const LeadText = styled('div')([], props => ({}), space, fontSize, width, color)

LeadText.defaultProps = {
  fontSize: 5
}

export default LeadText
