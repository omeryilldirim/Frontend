import styled from 'styled-components';

const DetailPage = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  padding: 1rem;
  background-color: ${({theme})=>theme.colors.primary};
`;


export const TitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  & h1{

  }
  & img{

    width: 200px;
  }
  `;


export const InfoSection = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid antiquewhite;
  border-radius:5px;

  & img{
    outline: 1px solid antiquewhite;
    outline-offset: 0.3rem;
    border-radius:5px;
  }

  & .nutrients,
  .ingredients {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  `;



export default DetailPage;