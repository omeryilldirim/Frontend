import styled from 'styled-components';

const AboutSection = styled.section`
  height: 90vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
  align-items: center;
  background-color: ${({theme})=>theme.colors.primary};
`;

export default AboutSection;



export const TitleDiv = styled.div`
  display:flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
    
  & img{
    width: 40vw;
  }
  & span {
    color: antiquewhite;
    font-size:1.3rem;
  }
`;


export const InfoDiv = styled.div`
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  font-size: 1.2rem;
  & span{
    color: antiquewhite;
  }
`;

