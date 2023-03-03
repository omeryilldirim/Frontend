import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${( {theme} )=> theme.colors.primary};

  @media (max-width: ${ ({theme}) => theme.breakpoint.md}  ) {
    flex-direction:column;
  }
  @media (max-width:${ ({theme}) => theme.breakpoint.sm}) {
    text-align:center;
  }
`;

export default Nav;
