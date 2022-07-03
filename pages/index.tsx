import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";

import styled from "styled-components";
import palette from "../styles/palette";

const StyledHome = styled.div`
  position: absolute;
  left: 40%;
  width: 32.25rem;
  height: 100vh;
  /* background-color: ${palette.black}; */
`;

const Home: NextPage = () => {
  const [data, setData] = useState<Array<string> | null>(null);
  const appKey1 = process.env.NEXT_PUBLIC_LINE2_API_KEY1;
  const appKey2 = process.env.NEXT_PUBLIC_LINE2_API_KEY2;

  const url =
    "https://api.odcloud.kr/api/15041301/v1/uddi:3ecd8bc2-34ea-4860-a788-bf2578754ad9";

  const onClick = async () => {
    try {
      const response = await axios(url, {
        method: "GET",
        headers: {
          Authorization: appKey1 || "",
        },
        params: {
          serviceKey: appKey2,
          perPage: 47,
        },
      });

      setData(response.data.data);
      console.log(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledHome>
      <div>
        <button type="button" onClick={onClick}>
          불러오기
        </button>
      </div>
      {data &&
        data.map((d, index) => (
          <div key={index}>
            <div>
              역이름 : {d["역명"]}
              <br />
              경도 : {d["경도"]}
              <br />
              위도 : {d["위도"]}
            </div>
            <hr />
          </div>
        ))}
    </StyledHome>
  );
};

export default Home;
