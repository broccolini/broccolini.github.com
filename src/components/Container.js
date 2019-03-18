import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const Container = styled('div')(
  [],
  props => ({}),
  space,
  fontSize,
  width,
  color
)

Container.defaultProps = {
  width: [1, 0.8, 0.6666666666666666, 0.75],
  ml: ['0%', '20%', '33.333333%', '25%']
}

export default Container
