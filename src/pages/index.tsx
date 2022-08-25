import Banner from '@Src/components/Banner';
import { BannerVideo } from '@Src/components/Banner/styled';
import Cartoons from '@Src/components/Cartoons';
import Channels from '@Src/components/Channels';
import { AtomIcon, AtomText, AtomWrapper } from '@stacklycore/ui';
import { NextPageFC } from 'next';

const PageIndex: NextPageFC = () => {
  return (
    <>
      <Banner>
        <AtomWrapper className={'banner-content'}>
          <AtomText as={'h1'} className={'banner-title'}>
            Recordar tu infancia, es volver a vivir.
          </AtomText>
          <AtomText as={'p'} className={'banner-description'}>
            Aquí podras ver las series y caricaturas que cultivaron tu niñez
            frente al televisor.
          </AtomText>
        </AtomWrapper>
        <AtomWrapper css={BannerVideo}>
          <AtomIcon
            icon={
              'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/playnew.svg'
            }
            className={'banner-video-icon'}
          />
        </AtomWrapper>
      </Banner>
      <Channels />
      <Cartoons />
    </>
  );
};

export default PageIndex;
