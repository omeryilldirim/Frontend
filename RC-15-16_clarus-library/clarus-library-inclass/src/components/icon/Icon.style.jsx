import styled from "styled-components"

export const SvgIcon = styled.svg`
    font-size: 2rem;
    :hover {
        color: ${({hoverColor})=> hoverColor}
    }
`