import React from 'react';
import { StyledIconInfo } from './styles';
import StyledAlert from './styles';

export type AlertColor = 'light-green' | 'gray' | 'light-yellow' | 'light-red';
export type AlertType = 'positive' | 'neutral' | 'warning' | 'danger';
export type AlertIconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BaseAlertProps {
  className?: string;

  // Boolean conditionals
  visible?: boolean;

  // Size of the component, in string
  // e.g. "80px", "100%", etc
  height?: string;
  width?: string;

  iconSize?: AlertIconSize;
  noBg?: boolean;

  type: AlertType;
  fontSize?: string;

  // Scuffed fix to the parent background, has to be specified!
  parentBackground?: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    parentBackground = 'white',
    height = '60px',
    width = '364px',
    iconSize = 'md',
    fontSize = '12px',
    className,
    type,
    children,
    noBg = false,
  } = props;

  const styledAlertProps = {
    className: ` ${noBg ? 'noBg' : ''} ${className ?? ''}`,
    width,
    height,
    parentBackground,
    type,
    fontSize,
    noBg,
  };
  return (
    <StyledAlert {...styledAlertProps}>
      <StyledIconInfo src={`/bx-info-circle-${type}.svg`} iconSize={iconSize} />
      <div>{children}</div>
    </StyledAlert>
  );
};

export default Alert;
