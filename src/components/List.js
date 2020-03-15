import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

const List = styled('ul')(space, fontSize, width, color)

List.defaultProps = {}

export default List
