import React, {
  ElementType,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react';
import { Link } from 'react-router-dom';

import StyledButton, {
  StyledIcon,
  ButtonThemeMap,
  TextColorMap,
  ComponentSizeMap,
  LoaderThemeMap,
  ParentLoaderBackground,
} from './style';
import Loader, { LoaderColor } from '../Loader';
import '../../tailwind.css';

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
        className={`${disabled ? '' : `${ButtonThemeMap[buttonTheme]}`} ${
          TextColorMap[buttonTheme]
        } ${ComponentSizeMap[size]} ${
          disabled && 'bg-gray-200 text-gray-400 hover:bg-gray-200'
        } ${ml ? 'ml-5' : ''} ${mt ? 'mt-5' : ''} ${
          buttonTheme !== 'tertiary' ? 'py-3 px-6' : 'bg-opacity-0'
        } font-bold rounded-lg ${className}`}
        {...styles}
      >
        <Link to={to} ref={ref as MutableRefObject<HTMLAnchorElement>}>
          <StyledIcon {...iconOptions}>
            <div
              className={`text-sm lg:text-base flex items-center ${ComponentSizeMap['full']}`}
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
        className={`${disabled ? '' : `${ButtonThemeMap[buttonTheme]}`} ${
          TextColorMap[buttonTheme]
        } ${ComponentSizeMap[size]} ${
          disabled && 'bg-gray-200 text-gray-400 hover:bg-gray-200'
        } ${ml ? 'ml-5' : ''} ${mt ? 'mt-5' : ''} ${
          buttonTheme !== 'tertiary' ? 'py-3 px-6' : 'bg-opacity-0'
        } font-bold rounded-lg ${className}`}
        {...styles}
      >
        <a href={href} ref={ref as MutableRefObject<HTMLAnchorElement>}>
          <StyledIcon {...iconOptions}>
            <div
              className={`text-sm lg:text-base flex items-center ${ComponentSizeMap['full']}`}
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
      className={`${
        disabled
          ? ''
          : `${ButtonThemeMap[buttonTheme]} ${TextColorMap[buttonTheme]}`
      } ${ComponentSizeMap[size]} ${
        disabled && 'bg-gray-200 text-gray-400 hover:bg-gray-200'
      } ${ml ? 'ml-5' : ''} ${mt ? 'mt-5' : ''} ${
        buttonTheme !== 'tertiary'
          ? 'py-3 px-6'
          : 'bg-opacity-0 hover:bg-opacity-0'
      } font-bold rounded-lg ${className}`}
      {...styles}
    >
      <StyledIcon {...iconOptions}>
        <div
          className={`text-sm lg:text-base flex items-center ${ComponentSizeMap['full']}`}
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
