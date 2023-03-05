import styled from 'styled-components';

const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  background-color: ${({theme})=>theme.colors.secondary};
  padding: 0 2rem;

  & .right-nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
    
  }
`;

export default Nav;
