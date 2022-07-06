import { css } from '@emotion/react';
import { IPalette } from '@stacklycore/ui';
import { FontFamily } from './constants';

export const ThemeLight: IPalette = {
  css: () => css`
    font-family: 'Inter', sans-serif;
  `,
  button: {
    color: {
      primary: '#D70C06',
      secondary: '#E1E0E0',
      accent: '#2C2222'
    },
    css: FontFamily,
    type: 'flat'
  },
  wrapper: {
    color: {
      primary: '#FDFEFF',
      secondary: '#2C2222',
      accent: '#2C2222'
    }
  },
  icon: {
    color: {
      primary: '#000000',
      secondary: '#2C2222',
      accent: '#000000'
    }
  },
  text: {
    color: {
      primary: '#2C2222',
      secondary: '#727272',
      accent: '#D7D6D6'
    },
    css: FontFamily
  },
  input: {
    color: {
      primary: '#FFFFFF',
      secondary: '#3459a8',
      accent: '#db4a4a'
    },
    css: FontFamily
  },
  scrollbar: {
    width: 7,
    thumb: '#3459A8',
    track: '#e6e6e6'
  }
};
