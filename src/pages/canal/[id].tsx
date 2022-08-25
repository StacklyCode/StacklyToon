import Banner from '@Src/components/Banner';
import { ChannelImage } from '@Src/components/Channels/styled';
import { AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';

const ChannelView = () => {
  return (
    <>
      <Banner>
        <AtomWrapper className={'banner-content'}>
          <AtomText as={'h1'} className={'banner-title'}>
            Cartoon Network
          </AtomText>
          <AtomText as={'p'} className={'banner-description'}>
            Conoce todas las series de cartoon network que tomaron parte de tu
            infancia.
          </AtomText>
        </AtomWrapper>
        <AtomWrapper css={ChannelImage}>
          <AtomImage
            src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/OWMVWT2VOVC25KZE5IT4DOW7NE.jpg"
            className="channel-image"
          />
        </AtomWrapper>
      </Banner>
    </>
  );
};
export default ChannelView;
