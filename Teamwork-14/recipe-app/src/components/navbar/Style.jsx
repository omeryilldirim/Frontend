import styled from 'styled-components';

const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
    padding: 0 2rem;
  /* background-image: url("https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,w_1376/f_auto/q_auto/v1644403688/static-takeaway-com/images/generic/categories/pokebowl/pokebowl_pokebowl"); */
  background-image: linear-gradient( 108.9deg,  #e6dbcd 11.2%, #c1e1e5 88.9% );


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
    color: ${({theme})=> theme.colors.secondary };
    transform: scale(1.05);
    
  }

`;


export default Nav;
