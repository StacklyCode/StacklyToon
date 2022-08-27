import { useQuery } from '@apollo/client';
import { LISTSTUDIOS } from '@Src/apollo/query/listStudio';
import Banner from '@Src/components/Banner';
import CartoonsItem from '@Src/components/Cartoons/components/CartoonsItem';
import { CartoonsContainer } from '@Src/components/Cartoons/styles';
import { channelsInfo } from '@Src/components/Channels/constants';
import { ChannelImage } from '@Src/components/Channels/styled';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ChannelView = () => {
  const router = useRouter();
  const { data } = useQuery<IQueryFilter<'listStudios'>>(LISTSTUDIOS, {
    skip: !router.query.id,
    variables: {
      filter: {
        id: {
          eq: router.query.id
        }
      }
    }
  });
  const studioInfo = data?.listStudios?.[0];
  // TODO: REFACTOR CARTOONS COMPONENT TO RECEIVE DATA
  return (
    <>
      <Banner hasDivision>
        <AtomWrapper className={'banner-content'}>
          <AtomText as={'h1'} className={'banner-title'}>
            {studioInfo?.name}
          </AtomText>
          <AtomText as={'p'} className={'banner-description'}>
            Conoce todas las series de {studioInfo?.name} que tomaron parte de
            tu infancia.
          </AtomText>
          <AtomWrapper className="banner-shows">
            <AtomIcon
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/video-circle.svg"
              className="banner-icon"
            />
            <AtomText as={'p'} className={'banner-studio-description'}>
              <span> {studioInfo?.series?.length} series disponibles</span>
            </AtomText>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper css={ChannelImage}>
          <AtomImage
            src={
              channelsInfo[studioInfo?.name as keyof typeof channelsInfo]?.bg
            }
            className="channel-image"
          />
        </AtomWrapper>
      </Banner>
      <AtomWrapper as="section" css={CartoonsContainer}>
        <AtomWrapper className="cartoons-item-container cartoons-studio">
          {studioInfo?.series?.map((item, index) => (
            <Link href={`/serie/${item.id}`} key={item.id} passHref>
              <CartoonsItem
                delay={index}
                studio={studioInfo.name}
                name={item.title}
                image={item.image ?? ''}
                id={item.id}
              />
            </Link>
          ))}
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};
export default ChannelView;
