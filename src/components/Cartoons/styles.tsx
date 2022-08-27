import { css } from '@emotion/react';
import { ResponsiveQueries } from '@Src/themes/constants';
import { calculateInRem } from '@Src/utils/convertToRem';

export const RandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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
`;

export const cartoonsItem = (number: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${calculateInRem(8)};

  .cartoon-item-text {
    font-weight: bold;
    color: #2c2222;
  }
  .cartoon-item-studio {
    margin-bottom: ${calculateInRem(4)};
    font-size: 13px;
    color: #575859;
  }
  .cartoon-item-image {
    border-radius: 10px !important;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100% !important;
      transition: all 0.3s ease-in-out;
    }
    position: relative;
    ::after {
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(43, 43, 43, 0.364);
      backdrop-filter: blur(2px);
      background-image: url('https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/Play%20button.png');
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0;
      z-index: 1;
      transition: all 0.2s ease-in-out;
    }
    :hover {
      img {
        transform: scale(1.1) rotate(${number ?? 0}deg);
      }
      ::after {
        opacity: 1;
      }
    }
  }
`;
