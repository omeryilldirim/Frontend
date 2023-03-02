import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  & div {
    flex: 2;
  }
  
  @media (max-width:${ ({theme})=> theme.breakpoints.md }) {
    flex-direction:column;
  }
  /* @media (max-width:700px) {
    flex-direction:column;
  } */
`;

export default Flex;
