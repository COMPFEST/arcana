import React, { ReactNode, ElementType } from 'react';
import styled from '@emotion/styled';
import { ButtonTheme, ComponentSize, IconAlignment } from './button';

export const ButtonThemeMap = {
  default: `bg-blue hover:bg-blue-lighter`,
  primary: `bg-blue hover:bg-blue-lighter`,
  secondary: `bg-lightBlue rounded-lg`,
  tertiary: `rounded-lg`,
};

export const LoaderThemeMap = {
  default: 'white',
  primary: 'white',
  secondary: 'blue',
  tertiary: 'blue',
};

export const ParentLoaderBackground = {
  default: '#0266D3',
  primary: '#0266D3',
  secondary: '#DCEDFE',
  tertiary: '#FFFFFF',
  disabled: 'rgba(229, 231, 235, 0.2)',
};

export const TextColorMap = {
  default: `text-white font-bold`,
  primary: `text-white font-bold`,
  secondary: `text-blue hover:bg-lightBlue-lighter`,
  tertiary: `text-blue hover:py-0.5 hover:underline`,
};

export const ComponentSizeMap = {
  base: ``,
  full: `w-full text-center justify-center`,
  half: `w-1/2 text-center justify-center`,
};

interface StyledIconProps {
  icon?: ElementType;
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

const StyledIconCSS = styled.div``;

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
    transform: scale(0.9, 0.9);
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
    <StyledIconCSS className="flex justify-start items-center">
      {icon && alignment === 'left' && (
        <div className="icon-placeholder">{icon}</div>
      )}
      {children}
      {icon && alignment === 'right' && (
        <div className="icon-placeholder">{icon}</div>
      )}
    </StyledIconCSS>
  );
};

export default StyledButton;
