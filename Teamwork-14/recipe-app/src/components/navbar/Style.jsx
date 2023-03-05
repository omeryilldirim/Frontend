import styled from 'styled-components';

const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme})=>theme.colors.secondary};
  padding: 0 2rem;

  & .right-nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
    
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: ${({theme})=> theme.colors.tertiary };
  font-weight: 700;
  transition: transform 0.3s ease-in-out;

  & span{
    color: ${({theme})=> theme.colors.primary };
  }

  &:hover{
    cursor: pointer;
    color: ${({theme})=> theme.colors.primary };
    transform: scale(1.05);
    
  }

`;


export default Nav;
