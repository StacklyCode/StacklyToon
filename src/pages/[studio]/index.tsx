import { useQuery } from '@apollo/client';
import { STUDIOBYID } from '@Src/apollo/query/studioById';
import Banner from '@Src/components/Banner';
import CartoonsItem from '@Src/components/Cartoons/components/CartoonsItem';
import { CartoonsContainer } from '@Src/components/Cartoons/styles';
import { channelsInfo } from '@Src/components/Channels/constants';
import { ChannelImage } from '@Src/components/Channels/styled';
import useSeriesInifity from '@Src/hooks/useSeriesInifity';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { ISerie } from 'graphql';
import { useRouter } from 'next/router';

const ChannelView = () => {
  const router = useRouter();
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
        <AtomWrapper className="cartoons-item-container cartoons-studio">
          {series?.map((item: ISerie, index: number) => (
            <CartoonsItem key={item.id} delay={index} item={item} />
          ))}
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};
export default ChannelView;
