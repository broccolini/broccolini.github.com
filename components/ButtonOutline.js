import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderRadius,
  hover,
  focus
} from 'styled-system'

const ButtonOutline = styled('button')(
  [],
  props => ({
    display: 'inline-block',
    fontFamily: 'inherit',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    appearance: 'none'
  }),
  space,
  fontSize,
  width,
  color,
  borderRadius,
  hover,
  focus
)

ButtonOutline.defaultProps = {
  fontSize: 2,
  py: 2,
  color: 'blue',
  bg: 'transparent',
  borderRadius: 0,
  pl: 3,
  pr: 3,
  hover: {
    color: 'white',
    backgroundColor: 'blue'
  },
  focus: {}
}

export default ButtonOutline