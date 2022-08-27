import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { STUDIOBYID } from '@Src/apollo/query/studioById';
import Banner from '@Src/components/Banner';
import CartoonsItem from '@Src/components/Cartoons/components/CartoonsItem';
import { CartoonsContainer } from '@Src/components/Cartoons/styles';
import { channelsInfo } from '@Src/components/Channels/constants';
import { ChannelImage } from '@Src/components/Channels/styled';
import useSeriesInifity from '@Src/hooks/useSeriesInifity';
import {
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper
} from '@stacklycore/ui';
import { ISerie } from 'graphql';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ChannelView = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { data } = useQuery(STUDIOBYID, {
    skip: !router.query.studio,
    variables: {
      id: router.query.studio
    }
  });

  const { data: series } = useSeriesInifity({
    skip: !router.query.studio,
    variables: {
      filter: {
        title: {
          contains: search
        },
        studio: {
          id: {
            eq: router.query.studio
          }
        }
      }
    }
  });

  return (
    <>
      <Banner>
        <AtomWrapper className={'banner-content'}>
          <AtomText as={'h1'} className={'banner-title'}>
            {data?.studioById?.name}
          </AtomText>
          <AtomText as={'p'} className={'banner-description'}>
            Conoce todas las series de {data?.studioById?.name} que tomaron
            parte de tu infancia.
          </AtomText>
          <AtomWrapper className="banner-shows">
            <AtomIcon
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/video-circle.svg"
              className="banner-icon"
            />
            <AtomText as={'p'} className={'banner-studio-description'}>
              <span>{data?.studioById?.series?.length} series disponibles</span>
            </AtomText>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper css={ChannelImage}>
          <AtomImage
            src={
              channelsInfo[data?.studioById?.name as keyof typeof channelsInfo]
                ?.bg
            }
            className="channel-image"
          />
        </AtomWrapper>
      </Banner>
      <AtomWrapper as="section" css={CartoonsContainer}>
        <AtomWrapper
          css={css`
            padding: 1rem 1rem 1rem 1rem;
          `}
        >
          <AtomInput
            input={{
              css: css`
                color: #d70c06;
                ::placeholder {
                  color: #b1b1b1;
                }
              `,
              placeholder: 'Buscar',
              onChange: (e) => setSearch(e.target.value)
            }}
            css={css`
              padding: 10px;
            `}
          />
        </AtomWrapper>
        <AtomWrapper className="cartoons-item-container">
          {series?.map((item: ISerie, index: number) => (
            <CartoonsItem key={item.id} delay={index} item={item} />
          ))}
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};
export default ChannelView;
