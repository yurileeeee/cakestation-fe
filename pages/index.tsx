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

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.3rem 0.5rem;

  & + & {
    margin-left: 0.3rem;
  }
  &:focus {
    background-color: ${palette.blue_300};
  }
`;

const Home: NextPage = () => {
  const [data, setData] = useState<Array<string>>([]);

  const url = [
    process.env.NEXT_PUBLIC_LINE1_API,
    process.env.NEXT_PUBLIC_LINE2_API,
    process.env.NEXT_PUBLIC_LINE3_API,
    process.env.NEXT_PUBLIC_LINE4_API,
    process.env.NEXT_PUBLIC_LINE5_API,
    process.env.NEXT_PUBLIC_LINE6_API,
    process.env.NEXT_PUBLIC_LINE7_API,
    process.env.NEXT_PUBLIC_LINE8_API,
    process.env.NEXT_PUBLIC_LINE9_API,
  ];

  const onClick = async (num: number) => {
    try {
      const response = await axios.get(url[num] || "");
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledHome>
      <div>
        {Array.from(Array(9), (_, index) => (
          <StyledButton
            key={index}
            type="button"
            onClick={() => onClick(index)}
          >
            {index + 1}호선
          </StyledButton>
        ))}
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
