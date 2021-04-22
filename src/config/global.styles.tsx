import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStylesConfig: React.FC = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
        }

        button {
          cursor: pointer;
        }
        [role='button'] {
          cursor: pointer;
        }

        button[type='button'] {
          cursor: pointer;
        }

        button:focus {
          outline: none !important;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          line-height: 1.25 rem;
        }
      `}
    />
  );
};
