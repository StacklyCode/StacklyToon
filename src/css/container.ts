import { css } from '@emotion/react';
import { calculateInRem } from '@Src/utils/convertToRem';

export const ContainerStyled = css`
  max-width: 1330px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: ${calculateInRem(16)};
  padding-right: ${calculateInRem(16)};
`;
export const GeneralContainer = css`
  min-height: 100vh;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
