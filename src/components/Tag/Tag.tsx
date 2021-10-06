import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { Icon } from './Icon';
export type TagIconSizeType = 'sm' | 'base' | 'lg' | 'xl';
export type TagTextSizeType = 'xs' | 'sm' | 'base';
export type TagButtonType = 'primary' | 'secondary' | 'warning' | 'neutral';

const iconSizeMap = {
  sm: tw`w-3 h-3`,
  base: tw`w-4 h-5`,
  lg: tw`w-6 h-6`,
  xl: tw`w-8 h-8`,
};

const textSizeMap = {
  xs: tw`text-xs`,
  sm: tw`text-sm`,
  base: tw`text-base`,
};

export const ButtonThemeMap = {
  primary: tw`bg-blue hover:bg-blue-lighter`,
  secondary: tw`bg-lightBlue hover:bg-lightBlue-lighter`,
  warning: css`
    background-color: rgba(254, 244, 244, 1);
    &:hover {
      background-color: rgba(254, 244, 244, 0.5);
    }
  `,
  neutral: css`
    background-color: rgba(218, 218, 218, 0.22);
    &:hover {
      background-color: rgba(218, 218, 218, 0.5);
    }
  `,
};

export const TextColorMap = {
  neutral: tw`text-black-100 font-bold`,
  warning: tw`text-error font-bold`,
  primary: tw`text-white font-bold`,
  secondary: tw`text-blue font-bold`,
};

export interface TagButtonProps {
  icon: any;
  text: string;
  iconSize: TagIconSizeType;
  textSize: TagTextSizeType;
  buttonMode: TagButtonType;
}

const TagButton: React.FC<TagButtonProps> = ({
  buttonMode,
  icon,
  iconSize,
  text,
  textSize,
}) => {
  return (
    <button
      tw="py-2 px-3 rounded-2xl flex items-center cursor-default focus:outline-none"
      css={[
        ButtonThemeMap[buttonMode],
        TextColorMap[buttonMode],
        css`
          transition: background-color 0.5s ease;
          &:hover {
            transition: background-color 0.5s ease;
          }
        `,
      ]}
    >
      <Icon buttonMode={buttonMode} iconSize={iconSize} Asset={icon} />
      <h6 css={[textSizeMap[textSize]]}>{text}</h6>
    </button>
  );
};
export default TagButton;
