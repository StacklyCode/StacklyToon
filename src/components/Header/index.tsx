import AtomIcon from '@stacklycore/ui/build/core/@atoms/AtomIcon';
import AtomLink from '@stacklycore/ui/build/core/@atoms/AtomLink';
import AtomWrapper from '@stacklycore/ui/build/core/@atoms/AtomWrapper';
import { useRouter } from 'next/router';
import InputSearch from '../Inputs/InputSearch';
import { HeaderIcon, HeaderLinks, HeaderWrapper } from './styled';

const Header = () => {
  const router = useRouter();
  return (
    <AtomWrapper as="nav" css={HeaderWrapper}>
      <AtomIcon
        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/ToonLogo.svg"
        css={HeaderIcon}
        onClick={() => router.push('/')}
      />
      <InputSearch />
      <AtomWrapper as="div" css={HeaderLinks}>
        <AtomLink link="/" astheme={'secondary'}>
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
