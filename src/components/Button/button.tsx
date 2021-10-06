import React, {
  ElementType,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react';
import { Link } from 'react-router-dom';

import tw from 'twin.macro';

import StyledButton, {
  StyledIcon,
  ButtonThemeMap,
  TextColorMap,
  ComponentSizeMap,
} from './style';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary';

export type ComponentSize = 'base' | 'full' | 'half';

export type IconAlignment = 'left' | 'right';

interface BaseButtonProps {
  // Button type for later colors
  buttonTheme?: ButtonTheme;

  // Icons for Button
  icon?: ReactNode;
  iconAlignment?: IconAlignment;

  // Size based on ComponentSize
  size?: ComponentSize;

  // ReactDOM/CSS based attributes
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  shadow?: boolean;

  // States
  loading?: boolean;

  // Boolean conditionals exceptions(Joni, refactorable)
  mt?: boolean;
  ml?: boolean;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<any>;
  type?: 'button' | 'submit' | 'reset';
} & BaseButtonProps;

type HTMLAnchorProps = {
  href?: string;
  rel?: string;
  target?: string;
} & BaseButtonProps;

/**
 * Support for React Router
 */
type CustomNodeProps = {
  to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    buttonTheme = 'default',

    icon,
    iconAlignment = 'left',

    size = 'base',

    className = '',
    children,
    disabled = false,
    shadow = false,

    loading = false,

    mt = false,
    ml = false,

    onClick,
    type = 'button',
    href,
    rel = '',
    target = '',
  } = props;

  const styles = {
    innerType: buttonTheme,
    size,
    disabled,
    shadow,
    withText: children !== null,
  };

  const iconOptions = {
    icon,
    alignment: iconAlignment,
  };

  if (href && !disabled) {
    return (
      <a
        href={href}
        rel={rel}
        target={target}
        ref={ref as MutableRefObject<HTMLAnchorElement>}
      >
        <StyledButton
          type={type}
          onClick={onClick}
          ref={ref as MutableRefObject<HTMLButtonElement>}
          className={className}
          css={[
            ButtonThemeMap[buttonTheme],
            TextColorMap[buttonTheme],
            ml && tw`ml-5`,
            mt && tw`mt-5`,
            ComponentSizeMap[size],
            tw`font-bold rounded-lg flex items-center`,
            buttonTheme !== 'tertiary' && tw`py-3 px-6`,
            disabled && tw`text-gray-400 hover:bg-gray-200`,
            disabled && buttonTheme !== 'tertiary' && tw`bg-gray-200`,
          ]}
          {...styles}
        >
          <StyledIcon {...iconOptions}>{children}</StyledIcon>
        </StyledButton>
      </a>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      ref={ref as MutableRefObject<HTMLButtonElement>}
      className={className}
      css={[
        ButtonThemeMap[buttonTheme],
        TextColorMap[buttonTheme],
        ml && tw`ml-5`,
        mt && tw`mt-5`,
        ComponentSizeMap[size],
        tw`font-bold rounded-lg flex items-center`,
        buttonTheme !== 'tertiary' && tw`py-3 px-6`,
        disabled && tw`text-gray-400 hover:bg-gray-200`,
        disabled && buttonTheme !== 'tertiary' && tw`bg-gray-200`,
      ]}
      {...styles}
    >
      <StyledIcon {...iconOptions}>
        <div
          css={[
            tw`text-sm lg:text-base flex items-center`,
            ComponentSizeMap['full'],
          ]}
        >
          {children}
        </div>
      </StyledIcon>
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
