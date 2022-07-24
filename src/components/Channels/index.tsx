import { AtomIcon, AtomText, AtomWrapper } from '@stacklycore/ui';
import { ChannelContainer } from './styled';

const Channels = () => {
  return (
    <AtomWrapper css={ChannelContainer}>
      <AtomIcon
        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/monitor.svg"
        className="channel-icon"
      />
      <AtomText as="h2" className="channel-title">
        Encuentra tu canal favorito
      </AtomText>
    </AtomWrapper>
  );
};

export default Channels;
