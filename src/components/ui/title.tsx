import styled, {keyframes} from 'styled-components';

const BackgroundAnimation = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  background-size: 400% 400%;
  animation: ${BackgroundAnimation} 5s linear infinite;
  /*
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
   */
`;
