import { css, Global } from '@emotion/react';
import { GlobalStyles } from '@stacklycore/ui';
import Fonts from './_fonts';

const GeneralStyled = css`
  body{
    min-height: 100vh;
  }
`
const CustomGlobalStyles = () => {
  return (
    <>
      <GlobalStyles />
      <Global styles={GeneralStyled}/>
      <Fonts />
    </>
  );
};

export default CustomGlobalStyles;
