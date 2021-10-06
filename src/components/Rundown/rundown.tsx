import React, { ReactNode } from 'react';
import {
  RundownContainer,
  RundownThemeMap,
  StyledRundown,
  StyledTime,
  StyledTimeIcon,
} from './style';
import tw from 'twin.macro';

export type RundownColor = 'default' | 'blue' | 'red' | 'dark-red' | 'black';
export type TimeColor = 'black' | 'white';

interface dataRundownProps {
  event: string;
  timeStart: string | number;
  timeEnd: string | number;
}

export interface RundownProps {
  classname?: string;
  backgroundColor?: RundownColor;
  textColor?: string;
  children?: ReactNode;
  timeBgColor?: string;
  timeColor: TimeColor;
  dataRundown: Array<dataRundownProps>;
  timeFormat: string;
  imgName: string;
}

const Rundown: React.FC<RundownProps> = (props) => {
  const {
    classname,
    backgroundColor = 'default',
    textColor = 'black',
    timeBgColor = '#7033f3',
    timeColor,
    dataRundown,
    timeFormat = 'WIB',
    imgName = 'clock.svg',
  } = props;

  const styledRundownProps = {
    classname,
    backgroundColor,
    textColor,
  };
  const styledTimeProps = {
    timeBgColor,
    timeColor,
  };

  // Add rundown data first before rendering
  return (
    <>
      {dataRundown.map((e) => {
        return (
          <RundownContainer key={e.event}>
            <StyledRundown {...styledRundownProps}>
              <StyledTime {...styledTimeProps}>
                <StyledTimeIcon src={`/${imgName}`} />
                {`${e.timeStart} - ${e.timeEnd} ${timeFormat}`}
              </StyledTime>
              <div tw="text-base md:text-lg lg:text-xl">{e.event}</div>
            </StyledRundown>
          </RundownContainer>
        );
      })}
    </>
  );
};

export default Rundown;
