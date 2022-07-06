import AtomIcon from '@stacklycore/ui/build/core/@atoms/AtomIcon';
import AtomLink from '@stacklycore/ui/build/core/@atoms/AtomLink';
import AtomWrapper from '@stacklycore/ui/build/core/@atoms/AtomWrapper';
import InputSearch from '../Inputs/InputSearch';
import { HeaderIcon, HeaderLinks, HeaderWrapper } from './styled';

const Header = () => {
  return (
    <AtomWrapper as="nav" css={HeaderWrapper}>
      <AtomIcon
        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/ToonLogo.svg"
        css={HeaderIcon}
      />
      <InputSearch />
      <AtomWrapper as="div" css={HeaderLinks}>
        <AtomLink link="/series" astheme={'secondary'}>
          Series
        </AtomLink>
        <AtomLink link="/canales" astheme={'secondary'}>
          Canales
        </AtomLink>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Header;
