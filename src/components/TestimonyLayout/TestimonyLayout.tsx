import { SerializedStyles } from '@emotion/react';
import React, { useState } from 'react';
import { onSelected } from './Style';
import TestimonyController, {
  TestimonyControllerImgBorderType,
  TestimonyControllerImgContainerType,
  TestimonyControllerProps,
} from './TestimonyController/index';
import TestimonyView, {
  TestimonyViewContainerMarginType,
  TestimonyViewContainerSpaceType,
  TestimonyViewImgSizeType,
  TestimonyViewMessageModeType,
  TestimonyViewProps,
} from './TestimonyView/index';

export interface Testimony {
  nama: string;
  namaPanggilan: string;
  position: string;
  src: string;
  message: React.ReactNode;
}
export type mode = 'default';
export interface TestimonyProps {
  testiList: Testimony[];
}
export interface TestimonyStoriesProps {
  viewContainerMargin?: TestimonyViewContainerMarginType;
  viewContainerSpace: TestimonyViewContainerSpaceType;
  viewImgSize?: TestimonyViewImgSizeType;
  viewMessageMode?: TestimonyViewMessageModeType;
  controllerImgContainer?: TestimonyControllerImgContainerType;
  controllerImgBorder: TestimonyControllerImgBorderType;
  controllerImgHeight?: string;
  controllerImgWidth?: string;
}
export interface TestimonyLayoutProps
  extends TestimonyProps,
    TestimonyStoriesProps {}
const TestimonyLayout: React.FC<TestimonyLayoutProps> = ({
  controllerImgBorder,
  viewContainerSpace,
  controllerImgContainer,
  controllerImgHeight,
  controllerImgWidth,
  viewContainerMargin,
  viewImgSize,
  viewMessageMode,
  testiList,
}) => {
  const [selected, setSelected] = useState<number>(0);

  const view: TestimonyViewProps = {
    testiList: testiList,
    selected: selected,
    containerSpace: viewContainerSpace,
    containerMargin: viewContainerMargin,
    imgSize: viewImgSize,
    messageMode: viewMessageMode,
  };

  const controller: TestimonyControllerProps = {
    testiList: testiList,
    selected: selected,
    selector: setSelected,
    onSelected: onSelected,
    imgBorder: controllerImgBorder,
    imgContainer: controllerImgContainer,
    imgHeight: controllerImgHeight,
    imgWidth: controllerImgWidth,
  };

  return (
    <div tw="overflow-x-hidden">
      <TestimonyView {...view} />
      <TestimonyController {...controller} />
    </div>
  );
};
export default TestimonyLayout;
