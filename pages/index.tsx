import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

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
  const [data, setData] = useState(null);
  const appKey = process.env.NEXT_PUBLIC_LINE2_API_KEY || '';

  useEffect(() => {
    console.log(appKey);
  }, []);

  const url = `https://cors-anywhere.herokuapp.com/https://api.odcloud.kr/api/15041301/v1/uddi:3ecd8bc2-34ea-4860-a788-bf2578754ad9`;

  const onClick = async () => {
    try {
      const response = await axios(url, {
        method: 'GET',
        headers: {
          Authorization: appKey,
        },
        params: {
          serviceKey: appKey,
          perPage: 47,
        },
      });

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledHome>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={30}
          cols={100}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </StyledHome>
  );
};

export default Home;
