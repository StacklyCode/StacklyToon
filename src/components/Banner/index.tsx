import { AtomIcon, AtomText, AtomWrapper } from '@stacklycore/ui';
import { BannerStyled, BannerVideo } from '@Src/components/Banner/styled';

const Banner = () => {
  return (
    <AtomWrapper css={BannerStyled}>
      <AtomWrapper className={"banner-content"}>
        <AtomText as={"h1"} className={"banner-title"}>
          Recordar tu infancia, es volver a vivir.
        </AtomText>
        <AtomText as={"p"} className={"banner-description"}>
          Aquí podras ver las series y caricaturas que cultivaron tu niñez frente al televisor.
        </AtomText>
      </AtomWrapper>
      <AtomWrapper css={BannerVideo}>
        <AtomIcon icon={"https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/playnew.svg"} className={"banner-video-icon"}/>
      </AtomWrapper>

    </AtomWrapper>
  )
}
export default Banner
