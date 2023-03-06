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
  /* background-image: url("https://eatatbento.com/wp-content/uploads/2022/04/Bento-Food-Light-Background.jpg"); */
  background-image: url("https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
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
  border: 1px solid ${({theme})=>theme.colors.tertiary};
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
    padding: 0.4rem 0.6rem;
    position: absolute;
    bottom: 1rem;
    border: none;
    border-radius: 5px;
  }
`;

export const LoadingDiv= styled.div`
  & img{
    width: 200px;
  }
`



