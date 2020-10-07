import styled, { keyframes } from 'styled-components';

const rotateplane = keyframes`
  0% { transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
  50% { transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
  100% { transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); }
`;

const Loader = styled.div`
  animation: ${rotateplane} 800ms infinite ease-in-out;

  width: 40px;
  height: 40px;
  margin: 160px auto;
  background: lightsteelblue;
  border-radius: 4px;
`;

export default Loader;
