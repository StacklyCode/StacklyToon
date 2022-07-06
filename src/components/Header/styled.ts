import { css } from '@emotion/react';
import { ResponsiveQueries } from '@Src/themes/constants';
import { calculateInRem } from '@Src/utils/convertToRem';

export const HeaderWrapper = css`
  padding-top: ${calculateInRem(16)};
  padding-bottom: ${calculateInRem(16)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${calculateInRem(16)};
  @media screen and (min-width: ${ResponsiveQueries.lg}) {
    padding-top: ${calculateInRem(32)};
    padding-bottom: ${calculateInRem(32)};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const HeaderIcon = css`
  width: 136px;
  height: 24px;
`;

export const HeaderLinks = css`
  display: flex;
  flex-direction: row;
  width: max-content;
  gap: ${calculateInRem(32)};
  a {
    cursor: pointer;
  }
`;
