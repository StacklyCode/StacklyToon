import { css } from '@emotion/react';
import { ResponsiveQueries } from '@Src/themes/constants';
import { calculateInRem } from '@Src/utils/convertToRem';

export const ChannelContainer = css`
  display: flex;
  gap: ${calculateInRem(8)};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${calculateInRem(32)};
  .channel-icon {
    width: ${calculateInRem(24)};
    height: ${calculateInRem(24)};
  }
  .channel-title {
    font-size: ${calculateInRem(20)};
    font-weight: bold;
    @media screen and (min-width: ${ResponsiveQueries.md}) {
      font-size: ${calculateInRem(24)};
    }
  }
  @media screen and (min-width: ${ResponsiveQueries.md}) {
    margin-top: ${calculateInRem(64)};
  }
`;
