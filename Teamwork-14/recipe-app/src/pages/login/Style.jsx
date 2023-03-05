import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  vertical-align: middle;
  & input{
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: ${({theme})=>theme.colors.tertiary};
    color: white;
    border: none;
    border-radius: 5px;
  }
  & button{
    height: 2rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: ${({theme})=>theme.colors.tertiary};
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }
  & button:hover{
    cursor: pointer;
  }
`;


export const LoginDiv = styled.div`
  background-color: ${({theme})=>theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3.5rem;
  border-radius: 50%;
  opacity: 0.7;
  border: 1px solid white;
  & h1{
    color: antiquewhite;
  }
`;

export const LoginPage = styled.div`
  background-image: url("https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size:cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;




