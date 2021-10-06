import React, { useState } from 'react';
import { motion } from 'framer-motion';
import tw, { css } from 'twin.macro';
import { TestimonyProps } from '../TestimonyLayout';

export interface TestimonyViewProps extends TestimonyProps {
  selected?: number;
  containerMargin?: TestimonyViewContainerMarginType;
  containerSpace: TestimonyViewContainerSpaceType;
  imgSize?: TestimonyViewImgSizeType;
  messageMode?: TestimonyViewMessageModeType;
}
export type TestimonyViewContainerMarginType = 'sm' | 'base' | 'lg';
export type TestimonyViewContainerSpaceType = 'tight' | 'base' | 'sparse';
export type TestimonyViewImgSizeType = 'xs' | 'sm' | 'base' | 'lg';
export type TestimonyViewMessageModeType = 'sm' | 'base' | 'lg';

const containerMap = {
  default: tw`container mx-auto flex flex-col md:flex-row 2xl:max-w-screen-2xl! items-center`,
};

const containerMarginMap = {
  sm: tw`mt-16 md:mt-40  px-3 md:px-12`,
  base: tw`mt-24 md:mt-48  px-6 md:px-16`,
  lg: tw`mt-28 md:mt-52  px-8 md:px-20`,
};
const containerSpaceMap = {
  sparse: tw`space-y-10 md:space-y-2 space-x-2 md:space-x-14!`,
  base: tw`space-y-8 md:space-y-0 space-x-0 md:space-x-12!`,
  tight: tw`space-y-6 md:space-y-0 space-x-0 md:space-x-8!`,
};
const imgMap = {
  xs: tw`w-40 h-40`,
  sm: tw`w-48 h-48`,
  base: tw`w-52 h-52`,
  lg: tw`w-56 h-56`,
};

const messageMap = {
  sm: tw`font-bold text-lg lg:text-xl leading-relaxed!`,
  base: tw`font-bold text-2xl lg:text-3xl leading-relaxed!`,
  lg: tw`font-bold text-3xl lg:text-5xl leading-relaxed!`,
};

const TestimonyView: React.FC<TestimonyViewProps> = ({
  selected = 0,
  containerSpace = 'base',
  containerMargin = 'base',
  imgSize = 'base',
  messageMode = 'base',
  testiList,
}) => {
  const initial = { x: 200, opacity: 0 };
  const animate = { x: 0, opacity: 1 };
  const transition = {
    type: 'spring',
    duration: 0.8,
    bounce: 1,
    stiffness: 400,
    damping: 30,
  };
  console.log(testiList);

  return (
    <div>
      <motion.div
        key={selected}
        initial={initial}
        animate={animate}
        transition={transition}
        css={[
          containerMap['default'],
          containerMarginMap[containerMargin],
          containerSpaceMap[containerSpace],
        ]}
      >
        <div tw="flex text-lg sm:(text-xl)  md:hidden justify-center items-center">
          <h3>Kata Mereka Tentang</h3>
          <img tw="h-5 sm:(h-7) ml-2" src="/images/Testimony/cf-logo.svg" />
        </div>
        <img
          src={testiList[selected].src}
          css={imgMap[imgSize]}
          alt={testiList[selected].nama}
        />
        <div css={tw`flex flex-col items-start justify-between space-y-4`}>
          <div tw="hidden md:flex justify-center items-center">
            <div tw="flex">
              <h3 tw="text-sm lg:text-base xl:text-lg">
                Yang Mereka Katakan Tentang
              </h3>
              <img
                tw="h-3 md:(h-4 ml-1) lg:(h-6 ml-4) ml-3"
                src="/images/Testimony/cf-logo.svg"
              />
            </div>
          </div>
          <h1 css={messageMap[messageMode]}>{testiList[selected].message}</h1>
          <h1 tw="">
            -
            <span>
              {testiList[selected].nama}, {testiList[selected].position}
            </span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};
export default TestimonyView;
