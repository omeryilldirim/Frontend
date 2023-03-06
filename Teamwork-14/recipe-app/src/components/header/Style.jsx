import styled from 'styled-components';

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    
    & h1{
      color:${({theme})=> theme.colors.tertiary };;
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
    padding: 0.4rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  & input {
    opacity: 0.6;
  }
  & button:hover{
    transform: scale(1.02);
    opacity: 0.9;
  } 
`;

