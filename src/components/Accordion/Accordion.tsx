import React, { ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import AccordionItem from './AccordionItem';
import { AnimateSharedLayout } from 'framer-motion';

export interface AccordionProps {
  // Array of content items
  items: Array<{
    title: string;
    content: string;
  }>;

  // Collapse icon
  iconSVG?: ReactNode;

  // Icon left spacing to title, e.g. '20px'
  iconMargin?: string;

  // e.g. '#F0F7FE'
  textColor?: string;
  bgInit?: string;
  bgOpen?: string;
  borderColor?: string;

  // e.g. 180
  rotateDeg?: number;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const {
    items,
    iconSVG = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.12502 8.99953L12.005 12.8795L15.885 8.99953C16.275 8.60953 16.905 8.60953 17.295 8.99953C17.685 9.38953 17.685 10.0195 17.295 10.4095L12.705 14.9995C12.315 15.3895 11.685 15.3895 11.295 14.9995L6.70502 10.4095C6.51777 10.2227 6.41254 9.96905 6.41254 9.70453C6.41254 9.44001 6.51777 9.18636 6.70502 8.99953C7.09502 8.61953 7.73502 8.60953 8.12502 8.99953Z"
          fill="#0266D3"
        />
      </svg>
    ),
    iconMargin = '32px',
    textColor = '#000',
    bgInit = '#FFF',
    bgOpen = '#F0F7FE',
    borderColor = '#CCCCCC',
    rotateDeg = 180,
  } = props;
  return (
    <AnimateSharedLayout type="crossfade">
      <div
        tw="flex flex-col justify-center items-center container mx-auto px-0 w-full"
        css={css`
          @media (min-width: 1536px) {
            max-width: 1536px !important;
          }
        `}
        id="faq"
      >
        <div tw="w-full">
          {items.map((item, idx) => (
            <AccordionItem
              key={idx}
              idx={idx}
              title={item.title}
              content={item.content}
              iconSVG={iconSVG}
              iconMargin={iconMargin}
              textColor={textColor}
              bgInit={bgInit}
              bgOpen={bgOpen}
              borderColor={borderColor}
              rotateDeg={rotateDeg}
            />
          ))}
        </div>
      </div>
    </AnimateSharedLayout>
  );
};

export default Accordion;
