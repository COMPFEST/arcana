import React, { ReactNode, ElementType } from 'react';
import tw, { styled } from 'twin.macro';
import { ButtonTheme, ComponentSize, IconAlignment } from './button';

export const ButtonThemeMap = {
  default: tw`bg-blue hover:shadow-xl disabled:hover:shadow-none`,
  primary: tw`bg-blue hover:shadow-xl disabled:hover:shadow-none`,
  secondary: tw`bg-lightBlue-lighter hover:bg-lightBlue rounded-lg`,
  tertiary: tw`rounded-lg bg-transparent`,
};

export const TextColorMap = {
  default: tw`text-white font-bold`,
  primary: tw`text-white font-bold`,
  secondary: tw`text-blue`,
  tertiary: tw`text-blue hover:py-0.5 hover:underline`,
};

export const ComponentSizeMap = {
  base: tw``,
  full: tw`w-full text-center justify-center`,
  half: tw`w-1/2 text-center justify-center`,
};

interface StyledIconProps {
  icon?: ReactNode;
  children: ReactNode;
  alignment: IconAlignment;
}

interface StyledButtonProps {
  innerType: ButtonTheme;
  size: ComponentSize;
  disabled: boolean;
  withText: ReactNode;
  shadow: boolean;
}

const StyledIconCSS = styled.div`
  .icon-placeholder-left {
    margin-right: 0.5rem;
    width: 24px;
    height: 24px;
  }
  .icon-placeholder-right {
    margin-left: 0.5rem;
    width: 24px;
    height: 24px;
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-position: 100% 50%;
    box-shadow: ${(props) =>
      props.shadow ? '0 8px 8px 0 rgba(0, 0, 0, 0.2)' : '0'};
  }
  &:active {
    transition: all ease 0.1s;
    transform: ${(props) => (props.disabled ? '' : 'scale(0.9, 0.9)')};
    box-shadow: ${(props) =>
      props.shadow ? '0px 4px 4px 0px rgba(0, 0, 0, 0.2)' : '0'};
  }
  &:disabled {
    cursor: not-allowed;
  }
  transition: all ease 0.3s;
`;
export const StyledIcon: React.FC<StyledIconProps> = (props) => {
  const { alignment, children, icon } = props;
  return (
    <StyledIconCSS tw="flex flex-row items-center break-all w-max">
      {icon && alignment === 'left' && (
        <div className="icon-placeholder-left">{icon}</div>
      )}
      {children}
      {icon && alignment === 'right' && (
        <div className="icon-placeholder-right">{icon}</div>
      )}
    </StyledIconCSS>
  );
};

export default StyledButton;
