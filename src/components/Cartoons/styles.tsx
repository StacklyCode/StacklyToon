import { css } from '@emotion/react';
import { ResponsiveQueries } from '@Src/themes/constants';
import { calculateInRem } from '@Src/utils/convertToRem';

export const CartoonsContainer = css`
  padding-bottom: 4rem;
  .cartoons-title-container {
    display: flex;
    gap: ${calculateInRem(8)};
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${calculateInRem(32)};
  }
  .cartoons-icon {
    width: ${calculateInRem(24)};
    height: ${calculateInRem(24)};
  }
  .cartoons-title {
    font-size: ${calculateInRem(20)};
    font-weight: bold;
    @media screen and (min-width: ${ResponsiveQueries.md}) {
      font-size: ${calculateInRem(24)};
    }
  }
  .cartoons-item-container {
    --min: 100px;
    --max: 155px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--min), var(--max)));
    column-gap: ${calculateInRem(32)};
    row-gap: ${calculateInRem(32)};
    &.cartoons-studio {
      margin-top: ${calculateInRem(40)};
    }
    @media screen and (min-width: ${ResponsiveQueries.md}) {
      --min: 140px;
      --max: 185px;
      &.cartoons-studio {
        margin-top: ${calculateInRem(80)};
      }
    }
  }
  .cartoon-item {
    display: flex;
    flex-direction: column;
    gap: ${calculateInRem(8)};
    &-text {
      font-weight: bold;
      color: #2c2222;
    }
    &-studio {
      margin-bottom: ${calculateInRem(4)};
      font-size: 13px;
      color: #575859;
    }
    &-image {
      border-radius: 10px !important;
      cursor: pointer;
      img {
        width: 100% !important;
      }
    }
  }
`;
