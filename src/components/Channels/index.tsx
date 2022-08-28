import { useQuery } from '@apollo/client';
import { LISTSTUDIOS } from '@Src/apollo/query/listStudio';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import Link from 'next/link';
import AtomCarrousell from '../UI/AtomCarrousell';
import { channelsInfo, SwipperProps } from './constants';
import { ChannelContainer, SwipperChannelCSS } from './styled';

const Channels = () => {
  const { data } = useQuery<IQueryFilter<'listStudios'>>(LISTSTUDIOS);
  return (
    <AtomWrapper as="section" css={ChannelContainer}>
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
            <Link href={`/${item.id}`} key={item.id} passHref>
              <AtomImage
                className="channel-image"
                src={
                  channelsInfo[item.name as keyof typeof channelsInfo]?.image
                }
              />
            </Link>
          ))}
        </AtomCarrousell>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Channels;
