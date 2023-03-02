import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  @media (max-width:700px) {
    flex-direction:column;
  }
  @media (max-width:360px) {
    text-align:center;
  }
`;

export default Nav;
