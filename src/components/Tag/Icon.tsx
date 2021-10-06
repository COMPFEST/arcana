import React from 'react';
import tw, { css } from 'twin.macro';
import { TagButtonType, TagIconSizeType, TextColorMap } from './Tag';

const iconSizeMap = {
  sm: tw`w-3 h-3`,
  base: tw`w-4 h-5`,
  lg: tw`w-6 h-6`,
  xl: tw`w-8 h-8`,
};

interface IconProps {
  Asset: any;
  buttonMode: TagButtonType;
  iconSize: TagIconSizeType;
}
export const Icon: React.FC<IconProps> = ({ buttonMode, iconSize, Asset }) => {
  return (
    <div
      css={[
        css`
          svg path {
            fill: currentColor;
          }
        `,
        tw`mr-2`,
        TextColorMap[buttonMode],
      ]}
    >
      <Asset css={iconSizeMap[iconSize]} />
    </div>
  );
};
