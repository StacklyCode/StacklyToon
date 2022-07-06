import { css } from '@emotion/react';
import { ResponsiveQueriesType } from './type';

export const FontFamily = () => css`
  * {
    font-family: 'Inter', sans-serif !important;
  }
  font-family: 'Inter', sans-serif;
`;

export const ResponsiveQueries: ResponsiveQueriesType = {
  sm: '640px',
  // => @media (min-width: 640px) { ... }

  md: '768px',
  // => @media (min-width: 768px) { ... }

  lg: '1024px',
  // => @media (min-width: 1024px) { ... }

  xl: '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px'
  // => @media (min-width: 1536px) { ... }
};
