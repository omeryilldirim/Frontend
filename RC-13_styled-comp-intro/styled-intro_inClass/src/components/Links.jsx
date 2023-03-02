import styled, {css} from 'styled-components';

const Links = styled.a`
  text-decoration: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  &:hover{
    font-weight: 700;
  }

  ${({small})=> small && css`
    background-color: black;
    color:#5CCFEE;
    padding: 0.5rem;
    `}
`;

export default Links;