import { css } from '@emotion/react';
import { ResponsiveQueries } from '@Src/themes/constants';
import { calculateInRem } from '@Src/utils/convertToRem';

export const ChannelContainer = css`
  display: flex;
  gap: ${calculateInRem(8)};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: ${calculateInRem(32)};
  .channel-icon {
    width: ${calculateInRem(24)};
    height: ${calculateInRem(24)};
  }
  .channel-title-container {
    display: flex;
    flex-direction: row;
    gap: ${calculateInRem(8)};
    justify-content: flex-start;
    align-items: center;
  }
  .channel-title {
    font-size: ${calculateInRem(20)};
    font-weight: bold;
    @media screen and (min-width: ${ResponsiveQueries.md}) {
      font-size: ${calculateInRem(24)};
    }
  }
  .channel-images {
    display: flex;
    flex-direction: row;
    gap: ${calculateInRem(20)};
    justify-content: flex-start;
  }
  @media screen and (min-width: ${ResponsiveQueries.md}) {
    margin-top: ${calculateInRem(64)};
  }
`;
export const SwipperChannelCSS = css`
  .swiper {
    width: 100%;
    height: 20vh;
    padding-bottom: 20px;
  }
  .swiper-pagination.swiper-pagination-bullets {
    bottom: 0;
    display: none;
  }
  .swiper-slide {
    width: 50%;
    img {
      width: 90%;
      height: 90%;
      object-fit: contain;
    }
  }
  .channel-image {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: white !important;
    border-radius: 10px !important;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    img {
      width: 60%;
      height: 40%;
      background-color: white !important;
      user-select: none;
    }
  }
`;
export const ChannelImage = css`
  width: 100%;
  height: 350px !important;
  .channel-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (min-width: ${ResponsiveQueries.md}) {
    border-bottom-left-radius: ${calculateInRem(10)};
    border-bottom-right-radius: ${calculateInRem(10)};
    max-width: 540px;
  }
`;
