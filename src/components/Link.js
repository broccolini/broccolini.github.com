import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Link = styled('a')(
  {
    '&:hover': {
      color: '#f240ff'
    }
  },
  space,
  fontSize,
  width,
  color,
)

Link.defaultProps = {
  color: 'blue',
}

export default Link
