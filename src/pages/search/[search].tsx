import { css } from '@emotion/react';
import CartoonsItem from '@Src/components/Cartoons/components/CartoonsItem';
import { CartoonsContainer } from '@Src/components/Cartoons/styles';
import useSeriesInifity from '@Src/hooks/useSeriesInifity';
import { AtomIcon, AtomInput, AtomText, AtomWrapper } from '@stacklycore/ui';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const { data: series } = useSeriesInifity({
    skip: !router.query.search,
    variables: {
      filter: {
        and: [
          {
            title: {
              contains: router.query.search
            }
          },
          {
            title: {
              contains: search
            }
          }
        ]
      }
    }
  });
  return (
    <AtomWrapper as="section" css={CartoonsContainer}>
      <AtomWrapper className="cartoons-title-container">
        <AtomIcon
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/video-circle.svg"
          className="cartoons-icon"
        />
        <AtomText className="cartoons-title">
          Resultados de la búsqueda: {router.query.search}
        </AtomText>
      </AtomWrapper>
      <AtomWrapper
        css={css`
          padding: 0 1rem 1rem 1rem;
        `}
      >
        <AtomInput
          input={{
            css: css`
              color: #2d2d2d;
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
        {series?.map((item, index) => (
          <CartoonsItem key={item.id} delay={index} item={item} />
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default Index;
