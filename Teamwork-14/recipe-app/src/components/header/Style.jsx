import styled from 'styled-components';

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    
    & h1{
      color:${({theme})=> theme.colors.secondary };;
    }
`;



export const HeaderForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem;
  border-radius: 5px;
  outline: 1px solid antiquewhite;
  outline-offset: 0.1rem;
  & *{
    padding: 0.2rem;
  }
`;

