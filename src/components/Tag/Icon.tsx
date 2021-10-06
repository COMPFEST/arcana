import React from 'react';
import tw, { css } from 'twin.macro';
import { TagButtonType, TagIconSizeType } from './types';
import { IconSizeMap, TextColorMap } from './utils';

interface IconProps {
  src: string | React.ReactNode;
  buttonMode: TagButtonType;
  iconSize: TagIconSizeType;
}
export const Icon: React.FC<IconProps> = ({ buttonMode, iconSize, src }) => {
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
      <div css={IconSizeMap[iconSize]}>
        {typeof src === 'string' ? <img src={src} /> : src}
      </div>
    </div>
  );
};
