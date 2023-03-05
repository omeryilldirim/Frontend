import styled from 'styled-components';

export const RecipesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;


export const HomeContainer = styled.div`
  background-color: ${({theme})=>theme.colors.primary};
  min-height: 100vh;
`;


export const RecipeDiv= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 260px;
  height: 350px;
  border: 1px solid white;
  border-radius: 10px;
  position: relative;
  & h4{
    word-break: normal;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    padding: 0.5rem;
  }
  & button{
    padding: 0.2rem 0.5rem;
    position: absolute;
    bottom: 1rem;
    border: none;
    border-radius: 5px;
  }
`;





