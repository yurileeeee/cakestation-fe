import type { NextPage } from 'next';

import styled from 'styled-components';
import palette from '../styles/palette';

const StyledHome = styled.div`
  position: absolute;
  left: 40%;
  width: 32.25rem;
  height: 100vh;
  background-color: ${palette.black};
`;

const Home: NextPage = () => {
  return <StyledHome />;
};

export default Home;
