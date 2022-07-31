import { useQuery } from '@apollo/client';
import { AtomIcon, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import { LISTSERIES } from '../../apollo/query/listSeries';
import CartoonsItem from './components/CartoonsItem';
import { CartoonsContainer } from './styles';

const Cartoons = () => {
  const { data } = useQuery<IQueryFilter<'listSeries'>>(LISTSERIES);
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
        {data?.listSeries.map((item) => (
          <CartoonsItem
            key={item.id}
            studio={item.studio.name}
            name={item.title}
            image={item.image ?? ''}
          />
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Cartoons;
