import { BannerStyled } from '@Src/components/Banner/styled';
import { AtomWrapper } from '@stacklycore/ui';
import { FC, ReactNode } from 'react';

const Banner: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AtomWrapper as="section" css={BannerStyled}>
      {children}
    </AtomWrapper>
  );
};
export default Banner;
