import React from 'react';
import { GlobalStylesConfig } from "../src/config/global.styles"

// Global decorators to apply styles to all stories 
export const decorators = [
  Story => (
    <>
    <GlobalStylesConfig />
    <Story />
    </>
  )
]

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
