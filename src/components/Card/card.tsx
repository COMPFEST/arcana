import React from 'react';

import tw, { css } from 'twin.macro';

import StyledCard from './style';

export type CardSize = 'default' | 'full';

interface BaseCardProps {
  title?: string;
  size?: CardSize;
  isMobile?: boolean;

  className?: string;
  children?: React.ReactNode;
}

export type CardProps = BaseCardProps;

const TitleSizeMap = {
  default: css`
    width: unset;
  `,
  full: tw`w-full`,
};

const BodySizeMap = {
  default: css`
    width: unset;
  `,
  full: tw`w-full`,
};

const CardSizeMap = {
  default: css`
    width: fit-content;
  `,
  full: tw`w-full`,
};

const Card: React.FC<CardProps> = (props) => {
  const {
    title,
    size = 'default',
    isMobile = false,
    children,
    ...other
  } = props;

  const cardCss = [CardSizeMap[size]];

  const titleCss = [
    isMobile ? tw`pt-2 px-3` : tw`pt-4 px-4`,
    css`
      .title {
        display: inline-block;
        font-weight: bold;
        background: linear-gradient(
          44.65deg,
          #ff50a2 1.8%,
          #cd33d5 50.9%,
          #5824fe 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        ${tw`text-xs`}
      }
    `,
    tw`pb-3`,
    TitleSizeMap[size],
  ];

  const bodyCss = [
    isMobile
      ? css`
          ${title && tw`pt-2`}
          ${tw`pb-2 px-3`}
        `
      : css`
          ${title && tw`pt-4`}
          ${tw`pb-4 px-4`}
        `,
    BodySizeMap[size],
    tw`text-xs`,
  ];

  return (
    <StyledCard css={cardCss} {...other}>
      {title && (
        <div css={titleCss} className="card-title">
          <p className="title">{title}</p>
        </div>
      )}
      <div css={bodyCss} className="card-body">
        {children}
      </div>
    </StyledCard>
  );
};

export default Card;
