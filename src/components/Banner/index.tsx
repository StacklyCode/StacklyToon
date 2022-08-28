import { BannerStyled } from '@Src/components/Banner/styled';
import { AtomWrapper } from '@stacklycore/ui';
import { FC, ReactNode } from 'react';

const Banner: FC<{ children: ReactNode, hasDivision?: boolean }> = ({ children, hasDivision = false }) => {
  return (
    <AtomWrapper as="section" css={BannerStyled({ hasDivision})}>
      {children}
    </AtomWrapper>
  );
};
export default Banner;
