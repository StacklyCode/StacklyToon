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
