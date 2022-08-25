import { useQuery } from '@apollo/client';
import { AtomIcon, AtomText, AtomWrapper } from '@stacklycore/ui';
import { useViewportScroll } from 'framer-motion';
import { IQueryFilter, ISerie } from 'graphql';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import Link from 'next/link';
import { useEffect } from 'react';
import { LISTSERIES } from '../../apollo/query/listSeries';
import CartoonsItem from './components/CartoonsItem';
import { CartoonsContainer } from './styles';

const itemsAtom = atom(24);
const seriesAtom = atom([] as ISerie[] | undefined);
const seriesFilteredAtom = atom((get) =>
  get(seriesAtom)?.filter((_, index) => index < get(itemsAtom))
);
const Cartoons = () => {
  const setItems = useSetAtom(itemsAtom);
  const [series, setSeries] = useAtom(seriesAtom);
  const seriesFiltered = useAtomValue(seriesFilteredAtom);
  useQuery<IQueryFilter<'listSeries'>>(LISTSERIES, {
    onCompleted: (data) => {
      setSeries(data.listSeries);
    }
  });
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.9) {
        setItems((prev) => Math.min(series?.length ?? 0, prev + 24));
      }
    });
  }, [series?.length]);
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
        {seriesFiltered?.map((item, index) => (
          <Link href={`/serie/${item.id}`} key={item.id} passHref>
            <CartoonsItem
              delay={index}
              studio={item.studio.name}
              name={item.title}
              image={item.image ?? ''}
              id={item.id}
            />
          </Link>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Cartoons;
