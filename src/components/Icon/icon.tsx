import React, { MutableRefObject } from 'react';

import tw from 'twin.macro';
import { StyledDiv } from './style';

export type IconSize = 'small' | 'medium' | 'default' | 'large';

export type IconProps = {
  size?: IconSize;
  src: string;
};

const Icon: React.ForwardRefRenderFunction<unknown, IconProps> = (
  props,
  ref
) => {
  const { size = 'default', src } = props;

  if (typeof src === 'string') {
    return (
      <StyledDiv size={size}>
        <img
          src={src}
          ref={ref as MutableRefObject<HTMLImageElement>}
          tw="min-h-full min-w-full object-cover"
        />
      </StyledDiv>
    );
  } else {
    return <StyledDiv size={size}>{src}</StyledDiv>;
  }
};

export default React.forwardRef<unknown, IconProps>(Icon);
