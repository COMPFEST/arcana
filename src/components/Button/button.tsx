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
  LoaderThemeMap,
  ParentLoaderBackground,
} from './style';
import Loader, { LoaderColor } from '../Loader';

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary';

export type ComponentSize = 'base' | 'full' | 'half';

export type IconAlignment = 'left' | 'right';

interface BaseButtonProps {
  // Button type for later colors
  buttonTheme?: ButtonTheme;

  // Icons for Button
  icon?: ElementType;
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
    to,
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

  if (to && !disabled) {
    return (
      <StyledButton
        type={type}
        className={className}
        css={[
          ButtonThemeMap[buttonTheme],
          TextColorMap[buttonTheme],
          ml && tw`ml-5`,
          mt && tw`mt-5`,
          ComponentSizeMap[size],
          tw`font-bold rounded-lg`,
          buttonTheme !== 'tertiary' && tw`py-3 px-6`,
          tw`cursor-pointer`,
        ]}
        {...styles}
      >
        <Link to={to} ref={ref as MutableRefObject<HTMLAnchorElement>}>
          <StyledIcon {...iconOptions}>
            <div
              css={[
                tw`text-sm lg:text-base flex items-center`,
                ComponentSizeMap['full'],
              ]}
            >
              {loading ? (
                <Loader
                  visible
                  width="1rem"
                  height="1rem"
                  parentBackground={
                    ParentLoaderBackground[disabled ? 'disabled' : buttonTheme]
                  }
                  color={LoaderThemeMap[buttonTheme] as LoaderColor}
                />
              ) : (
                children
              )}
            </div>
          </StyledIcon>
        </Link>
      </StyledButton>
    );
  }

  if (href && !disabled) {
    return (
      <StyledButton
        type={type}
        className={className}
        css={[
          ButtonThemeMap[buttonTheme],
          TextColorMap[buttonTheme],
          ml && tw`ml-5`,
          mt && tw`mt-5`,
          ComponentSizeMap[size],
          tw`font-bold rounded-lg`,
          buttonTheme !== 'tertiary' && tw`py-3 px-6`,
          tw`cursor-pointer`,
        ]}
        {...styles}
      >
        <a href={href} ref={ref as MutableRefObject<HTMLAnchorElement>}>
          <StyledIcon {...iconOptions}>
            <div
              css={[
                tw`text-sm lg:text-base flex items-center`,
                ComponentSizeMap['full'],
              ]}
            >
              {loading ? (
                <Loader
                  visible
                  width="1rem"
                  height="1rem"
                  parentBackground={
                    ParentLoaderBackground[disabled ? 'disabled' : buttonTheme]
                  }
                  color={LoaderThemeMap[buttonTheme] as LoaderColor}
                />
              ) : (
                children
              )}
            </div>
          </StyledIcon>
        </a>
      </StyledButton>
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
        tw`font-bold rounded-lg`,
        buttonTheme !== 'tertiary' && tw`py-3 px-6`,
        disabled && tw`bg-gray-200 text-gray-400 hover:bg-gray-200`,
        tw`cursor-pointer`,
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
          {loading ? (
            <Loader
              visible
              width="1rem"
              height="1rem"
              parentBackground={
                ParentLoaderBackground[disabled ? 'disabled' : buttonTheme]
              }
              color={LoaderThemeMap[buttonTheme] as LoaderColor}
            />
          ) : (
            children
          )}
        </div>
      </StyledIcon>
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
