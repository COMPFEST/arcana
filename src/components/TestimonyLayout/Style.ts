import { SerializedStyles } from '@emotion/react';
import { css } from 'twin.macro';

export const onSelected: SerializedStyles = css`
  :after {
    display: block;
    border-radius: 9999px;
    content: '';
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
    left: -5%;
    top: -5%;
    background-image: conic-gradient(#ed1c7d, #fff, #5824fe, #fff, #cd33d5);
    animation: spin 5s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
