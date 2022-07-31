import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { LISTSTUDIOS } from '@Src/apollo/query/listStudio';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import AtomCarrousell from '../UI/AtomCarrousell';
import { ChannelContainer } from './styled';
import { Channel } from './type';

const Channels = () => {
  const channelsInfo: Channel = {
    Disney: {
      name: 'Disney',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/disney.svg'
    },
    FoxKids: {
      name: 'FoxKids',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/foxkids.svg'
    },
    Marvel: {
      name: 'Marvel',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/marvel.svg'
    },
    Nickelodeon: {
      name: 'Nickelodeon',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/nickelodeon.svg'
    },
    HannaBarbera: {
      name: 'HannaBarbera',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/hanna-barbera.svg'
    },
    CartoonNetwork: {
      name: 'CartoonNetwork',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/cartoon.svg'
    },
    WarnerChannel: {
      name: 'WarnerChannel',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/others.svg'
    },
    Otros: {
      name: 'Otros',
      image:
        'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/studios/others.svg'
    }
  };
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
          swiperProps={{
            spaceBetween: 24,
            breakpoints: {
              1024: {
                slidesPerView: 5
              },
              768: {
                slidesPerView: 4
              },
              640: {
                slidesPerView: 3
              },
              320: {
                slidesPerView: 2
              }
            }
          }}
          customCSS={css`
            .swiper {
              width: 100%;
              height: 20vh;
              padding-bottom: 20px;
            }
            .swiper-pagination.swiper-pagination-bullets {
              bottom: 0;
              display: none;
            }
            .swiper-slide {
              width: 50%;
              img {
                width: 90%;
                height: 90%;
                object-fit: contain;
              }
            }
            .channel-image {
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid rgba(0, 0, 0, 0.15);
              background-color: white !important;
              border-radius: 10px !important;
              box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.07);
              cursor: pointer;
              img {
                width: 60%;
                height: 40%;
                background-color: white !important;
                user-select: none;
              }
            }
          `}
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
