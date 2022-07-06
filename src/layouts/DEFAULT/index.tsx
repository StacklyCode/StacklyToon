import { ContainerStyled, GeneralContainer } from '@Src/css/container';
import AuthContext from '@Src/hooks/authContext';
import { AtomWrapper } from '@stacklycore/ui';
import { FC } from 'react';

type Props = {
  role?: string | string[];
};

const Default: FC<Props> = ({ children }) => (
  <AuthContext>
    <AtomWrapper css={GeneralContainer}>
      <AtomWrapper css={ContainerStyled}>{children}</AtomWrapper>
    </AtomWrapper>
  </AuthContext>
);
export default Default;
