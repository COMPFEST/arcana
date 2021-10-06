import tw, { styled, css } from 'twin.macro';
import { RundownColor, TimeColor } from './rundown';

interface StyledRundownProps {
  backgroundColor: RundownColor;
}

interface StyledTimeProps {
  timeBgColor: string;
  timeColor: TimeColor;
}

export const RundownThemeMap = {
  default: '#F5F5F5',
  blue: '#0266D3',
};

export const BorderWidthMap = {
  none: '0px',
  sm: '2px',
  md: '4px',
  lg: '8px',
};

export const RundownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1124px;
  @media (min-width: 768px) {
    justify-content: start;
    align-items: flex-start;
  }
`;

export const StyledRundown = styled.div<StyledRundownProps>`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  padding: 28px 24px 28px 24px;
  align-items: center;
  background-color: ${(props) => RundownThemeMap[props.backgroundColor]};
  width: 100%;
  font-weight: 700;
  font-size: 1.125rem;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }
`;

export const StyledTime = styled.div<StyledTimeProps>`
  width: auto;
  display: flex;
  align-items: center;
  height: 3.5rem;
  justify-content: center;
  margin-right: 2.75rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0;
  background-color: ${(props) => props.timeBgColor};
  color: ${(props) => props.timeColor};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 0;
    margin-bottom: 0.5625rem;
    height: 2.375rem;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    min-height: 3rem;
    min-width: 12rem;
    max-width: 16rem;
  }
`;

export const StyledTimeIcon = styled.img`
  margin-right: 0.375rem;
`;
