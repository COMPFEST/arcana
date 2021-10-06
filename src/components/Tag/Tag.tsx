import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { Icon } from './Icon';

import { TagButtonType, TagIconSizeType, TagTextSizeType } from './types';
import { TextColorMap, TextSizeMap, IconSizeMap } from './utils';

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
export interface TagButtonProps {
  icon: string | React.ReactNode;
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
      <Icon buttonMode={buttonMode} iconSize={iconSize} src={icon} />
      <h6 css={[TextSizeMap[textSize]]}>{text}</h6>
    </button>
  );
};
export default TagButton;
