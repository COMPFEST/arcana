import React from 'react';
import { SerializedStyles } from '@emotion/react';
import tw, { css } from 'twin.macro';

export interface TimelineProps {
  title: string;
  subtitle: string;
  items: Array<{
    id: string;
    title: string;
    date: string | Array<string>;
    startAt: Date;
    endAt: Date;
  }>;
  gradient: SerializedStyles;
  ringColor: string;
}

export interface ItemProps {
  title: string;
  date: string | Array<string>;
  line: boolean;
  started: boolean;
  upcoming: boolean;
  gradient: SerializedStyles;
  ringColor: string;
}

const textClip = css`
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Item: React.FC<ItemProps> = ({
  title,
  date,
  line,
  started,
  upcoming,
  gradient,
  ringColor,
}) => (
  <div tw="flex justify-center -mt-1 select-none">
    <div tw="flex flex-col items-center mt-1 mr-8">
      <div tw="flex justify-center items-center rounded-full w-7 h-7 bg-gray-300 bg-opacity-50">
        <div
          tw="flex justify-center items-center w-6 h-6 rounded-full"
          css={[
            started && tw`border-2`,
            started &&
              css`
                border-color: ${ringColor};
              `,
            !upcoming && !started && tw`hidden`,
          ]}
        >
          <div
            tw="w-2.5 h-2.5 rounded-full"
            css={[started && gradient, upcoming && tw`bg-academypurple`]}
          />
        </div>
      </div>
      {line && <div tw="w-1 h-full bg-gray-300" />}
    </div>
    <div tw="mb-6">
      <h1
        tw="font-bold text-xl"
        css={[
          started && textClip,
          started && gradient,
          !upcoming && !started && tw`text-gray-300`,
        ]}
      >
        {title}
      </h1>
      {started && (
        <div tw="flex items-center animate-pulse">
          <div tw="w-2.5 h-2.5 mr-1 bg-red-600 rounded-full" />
          <span tw="uppercase text-xs text-red-600 font-bold">Berlangsung</span>
        </div>
      )}
      <p css={[!upcoming && !started && tw`text-gray-300`]}>
        {typeof date == 'string'
          ? date
          : date.map((item) => <p key={item}>{item}</p>)}
      </p>
    </div>
  </div>
);

const Timeline: React.FC<TimelineProps> = ({
  title,
  subtitle,
  items,
  gradient,
  ringColor,
}) => {
  return (
    <div tw="flex flex-col items-center w-full max-w-4xl font-sans">
      <div tw="text-center mb-12">
        <h1 tw="font-bold text-3xl">{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div tw="flex flex-col items-start">
        {items.map((item, index) => (
          <Item
            key={item.id}
            title={item.title}
            date={item.date}
            started={
              (index == items.length - 1 && new Date() > item.startAt) ||
              (new Date() >= item.startAt && new Date() < item.endAt)
            }
            upcoming={new Date() < item.startAt}
            line={index != items.length - 1}
            gradient={gradient}
            ringColor={ringColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
