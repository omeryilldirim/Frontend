import styled from 'styled-components'

export const Button = styled.button`
    /* color:white;
    background-color:hotpink; */
    background-color: ${props => props.primary ? "white" : "hotpink"};
    color: ${({primary}) => primary ? "hotpink" : "white"};
    width:8rem;
    padding: 1rem 2rem;
    border-radius:1rem;
    border:2px solid hotpink;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
    transition: all 0.2s ease-in;

    &:hover{
        transform: scale(0.95);
        cursor:pointer;
    }
    `

export const FS13Button = styled(Button)`
  background-color: ${({ react }) => (react ? "red" : "white")};
  color: ${({ react }) => (react ? "white" : "red")};
  border-color: ${({ react }) => (react ? "black" : "red")};
`
