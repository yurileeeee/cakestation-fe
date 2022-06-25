import styled, { css } from 'styled-components';

import palette from '../../styles/palette';

interface buttonprops {
  size: string;
  category: string;
  disabled?: boolean;
  sizeStyle: any;
}

const SIZES = {
  full: css`
    width: 375px;
    height: 60px;
    font-size: 16px;
    border-radius: 0;
  `,
  medium: css`
    width: 343px;
    height: 52px;
    font-size: 14px;
    border-radius: 32px;
  `,
  small: css`
    width: 343px;
    height: 40px;
    font-size: 12px;
    border-radius: 32px;
  `,
};

const StyledButton = styled.div<buttonprops>`
  ${(props) => props.sizeStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.disabled
      ? palette.grey_200
      : props.category === 'primary'
      ? palette.cakeLemon_400
      : palette.cakeLavender_500};
  border: ${(props) =>
    props.disabled ? 'none' : `2px solid ${palette.grey_800}`};
  color: ${(props) =>
    props.disabled
      ? props.category === 'primary'
        ? palette.grey_500
        : palette.grey_400
      : palette.black};
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? palette.grey_200
        : props.category === 'primary'
        ? palette.cakeLemon_500
        : palette.cakeLavender_600};
  }
`;

function Button({
  size,
  category,
  disabled,
  children,
}: {
  size: string;
  category: string;
  disabled: boolean;
  children: any;
}) {
  const sizeStyle = SIZES[size as keyof typeof SIZES];

  return (
    <StyledButton
      size={size}
      category={category}
      disabled={disabled}
      sizeStyle={sizeStyle}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
