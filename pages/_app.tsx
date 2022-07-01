import type { AppProps } from 'next/app';
import styled from 'styled-components';

import '../styles/globals.css';

const Test = styled.div`
  width: 100%;
  height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Test>
      <Component {...pageProps} />
    </Test>
  );
}

export default MyApp;
