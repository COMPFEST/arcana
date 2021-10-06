import React, { InputHTMLAttributes } from 'react';

import { css } from 'twin.macro';

type Input = 'text' | 'date';

export interface BaseInputProps {
  className?: string;
  type?: Input;

  // Size of the component, in string
  // e.g. "80px", "100%", etc
  height?: string;
  width?: string;

  // background color
  bg?: string;

  borderColor?: string;
  border?: string;
  borderRadius?: string;

  fontSize?: string;

  // Scuffed fix to the parent background, has to be specified!
  parentBackground?: string;
}

export type InputProps = BaseInputProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | 'className'
    | 'type'
    | 'height'
    | 'width'
    | 'bg'
    | 'border'
    | 'borderRadius'
    | 'borderColor'
    | 'fontSize'
  >;

const Input: React.FC<InputProps> = (props) => {
  const {
    parentBackground = 'white',
    height = '48px',
    width = '364px',
    border = '1px solid #999999',
    borderColor = '#999999',
    borderRadius = '8px',
    bg = '#FFFFFF',
    className,
    fontSize = '16px',
    type = 'text',
    ...otherProps
  } = props;

  return (
    <input
      className={className}
      type={type}
      css={[
        css({
          height,
          width,
          border,
          borderColor,
          fontWeight: 400,
          borderRadius,
          background: bg,
          fontSize,
          padding: '12px 16px',
          '&:focus': {
            outline: 'none',
          },
        }),
      ]}
      {...otherProps}
    />
  );
};

export default Input;
