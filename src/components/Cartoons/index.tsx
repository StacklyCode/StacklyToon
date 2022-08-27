import useSeriesInifity from '@Src/hooks/useSeriesInifity';
import { AtomIcon, AtomText, AtomWrapper } from '@stacklycore/ui';
import CartoonsItem from './components/CartoonsItem';
import { CartoonsContainer } from './styles';

const Cartoons = () => {
  const { data: series } = useSeriesInifity();
  return (
    <AtomWrapper as="section" css={CartoonsContainer}>
      <AtomWrapper className="cartoons-title-container">
        <AtomIcon
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/video-circle.svg"
          className="cartoons-icon"
        />
        <AtomText className="cartoons-title">Cartoons de la infancia</AtomText>
      </AtomWrapper>
      <AtomWrapper className="cartoons-item-container">
        {series?.map((item, index) => (
          <CartoonsItem key={item.id} delay={index} item={item} />
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Cartoons;
