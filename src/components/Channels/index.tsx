import { useQuery } from '@apollo/client';
import { LISTSTUDIOS } from '@Src/apollo/query/listStudio';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import AtomCarrousell from '../UI/AtomCarrousell';
import { channelsInfo, SwipperProps } from './constants';
import { ChannelContainer, SwipperChannelCSS } from './styled';

const Channels = () => {
  const { data } = useQuery<IQueryFilter<'listStudios'>>(LISTSTUDIOS);
  return (
    <AtomWrapper css={ChannelContainer}>
      <AtomWrapper className="channel-title-container">
        <AtomIcon
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/monitor.svg"
          className="channel-icon"
        />
        <AtomText as="h2" className="channel-title">
          Encuentra tu canal favorito
        </AtomText>
      </AtomWrapper>
      <AtomWrapper className="channel-images">
        <AtomCarrousell
          slidesPerView={6}
          swiperProps={SwipperProps}
          customCSS={SwipperChannelCSS}
        >
          {data?.listStudios.map((item) => (
            <AtomImage
              key={item.id}
              className="channel-image"
              src={channelsInfo[item.name as keyof typeof channelsInfo]?.image}
            />
          ))}
        </AtomCarrousell>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Channels;
