import tw, { styled, css } from 'twin.macro';
import { AlertIconSize, AlertType } from './tips';

interface StyledAlertProps {
  type: AlertType;
  width: string;
  height: string;
  parentBackground: string;
  fontSize: string;
}

interface StyledIconProps {
  iconSize: AlertIconSize;
  src?: string;
}

export const IconSizesMap = {
  sm: {
    w: '12px',
    h: '12px',
  },
  md: {
    w: '16px',
    h: '16px',
  },
  lg: {
    w: '20px',
    h: '20px',
  },
  xl: {
    w: '24px',
    h: '24px',
  },
};

export const ColorsMap = {
  positive: {
    color: '#008800',
    bg: '#F2F9F2',
  },
  warning: {
    color: '#E68C00',
    bg: '#FFFAE6',
  },
  neutral: {
    color: '#333333',
    bg: '#F3F3F3',
  },
  danger: {
    color: '#E9202A',
    bg: '#FEF4F4',
  },
  glass: {
    color: '#000000',
    bg: '#F4F5F5A8',
  },
};

const StyledAlert = styled.div<StyledAlertProps>`
  position: relative;
  font-size: ${(props) => props.fontSize};
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  padding: 12px 16px;
  background: ${(props) => ColorsMap[props.type].bg};
  color: ${(props) => ColorsMap[props.type].color};

  &.noBg {
    background: transparent !important;
  }
`;

export const StyledIconInfo = styled.img<StyledIconProps>`
  width: ${(props) => IconSizesMap[props.iconSize].w};
  height: ${(props) => IconSizesMap[props.iconSize].h};
  margin-right: 9px;
`;

export default StyledAlert;
