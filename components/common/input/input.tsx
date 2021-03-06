import styled from "styled-components";

import palette from "../../../styles/palette";

const StyledInput = styled.input`
  width: 343px;
  height: 48px;
  background-color: ${palette.grey_100};
  border: 1px solid ${palette.black};
  border-radius: 8px;
  padding: 10px;

  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.01em;
    color: ${palette.grey_400};
  }

  :required {
    background-color: ${palette.red_100};
    border: 2px solid ${palette.red_500};

    ::placeholder {
      color: ${palette.grey_500};
    }
  }

  &:focus {
    background-color: ${palette.cakeLemon_100};
    border: 2px solid ${palette.black};

    ::placeholder {
      color: transparent;
    }
  }
`;

function Input({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: any;
}) {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
}

export default Input;
