import { css } from '@emotion/react';
import { ResponsiveQueries } from '@Src/themes/constants';
import { calculateInRem } from '@Src/utils/convertToRem';

export const SearchStyles = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: max-content;
  overflow: hidden;
  @media screen and (min-width: ${ResponsiveQueries.lg}) {
    max-width: 600px;
  }
  .label-search {
    flex: 1;
  }
  .search-button {
    border-top-right-radius: ${calculateInRem(10)};
    border-top-left-radius: 0;
    border-bottom-right-radius: ${calculateInRem(10)};
    border-bottom-left-radius: 0;
  }
  .input-search {
    border-top-right-radius: 0;
    border-top-left-radius: ${calculateInRem(10)};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: ${calculateInRem(10)};
    width: 100% !important;
    height: 42px;
    ::placeholder {
      font-weight: 400;
    }
  }
`;
export const SearchIcon = css`
  width: 1.5rem;
  height: 1.5rem;
`;
