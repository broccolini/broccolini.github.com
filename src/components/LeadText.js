import styled from 'styled-components'
import { space, fontSize, fontWeight, width, color } from 'styled-system'

const LeadText = styled('div')(space, fontSize, fontWeight, width, color)

LeadText.defaultProps = {
  fontSize: 4,
  fontWeight: 500,
  margin: 0
}

export default LeadText
