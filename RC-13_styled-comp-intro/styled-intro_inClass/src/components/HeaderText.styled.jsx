import styled from 'styled-components';

const HeaderText = styled.h1`
  color: ${({color}) => color || "black" };
  background-color: ${({bgcolor})=> bgcolor || "black"};
  font-size: 2rem;
  text-align: center;
`

export default HeaderText;

