import React, { useState, useEffect } from 'react';
import LOADERSTYLES from './style';

export type LoaderType = 'spinner';

export type LoaderSpeed = 'slow' | 'medium' | 'fast';

export type LoaderColor = 'blue' | 'light-blue' | 'black' | 'white';

export interface BaseLoaderProps {
  className?: string;

  // Loader display type
  type?: LoaderType;

  // Boolean conditionals
  visible?: boolean;

  // Size of the component, in string
  // e.g. "80px", "100%", etc
  height?: string;
  width?: string;

  // Speed of the loader to do the complete animation
  speed?: LoaderSpeed;

  // Color
  color?: LoaderColor;

  // Scuffed fix to the parent background, has to be specified!
  parentBackground?: string;

  // setTimeout later until the loader visibility disabled (in ms)
  timeout?: number;
}

const switchCaseComponentSelect = (type: LoaderType) => {
  switch (type) {
    // TODO: Maybe add more loader styles here!
    case 'spinner':
      return LOADERSTYLES.StyledSpinner;
    default:
      return LOADERSTYLES.StyledSpinner;
  }
};

const Loader: React.FC<BaseLoaderProps> = (props) => {
  const {
    type = 'spinner',
    visible = true,
    parentBackground = 'white',
    height = '80px',
    width = '80px',
    color = 'black',
    timeout = 0,
    className,
    speed = 'slow',
  } = props;
  const [loaderActive, setLoaderActive] = useState<boolean>(visible);
  useEffect(() => {
    // visible is overriden by setTimeout
    if (timeout > 0) {
      setTimeout(() => {
        setLoaderActive(false);
      }, timeout);
    }
  }, [timeout]);

  const StyledLoader = switchCaseComponentSelect(type);

  const styledLoaderProps = {
    className: `${loaderActive ? 'active' : 'inactive'} ${className ?? ''}`,
    color,
    width,
    height,
    parentBackground,
    speed,
  };
  return <StyledLoader {...styledLoaderProps}></StyledLoader>;
};

export default Loader;
