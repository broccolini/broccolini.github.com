import styled from 'styled-components'
import {
  space,
  fontSize,
  width,
  color,
  borderRadius,
} from 'styled-system'

const ButtonOutline = styled('button')(
  {
    display: 'inline-block',
    fontFamily: 'inherit',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'inherit',
    appearance: 'none',
    '&:hover': {
      color: 'white',
      backgroundColor: 'blue'
    },
  },
  space,
  fontSize,
  width,
  color,
  borderRadius,
)

ButtonOutline.defaultProps = {
  fontSize: 2,
  py: 2,
  color: 'blue',
  bg: 'transparent',
  borderRadius: 0,
  pl: 3,
  pr: 3,
}

export default ButtonOutline
