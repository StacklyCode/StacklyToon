import { css } from '@emotion/react';
import useSeriesInifity from '@Src/hooks/useSeriesInifity';
import { AtomIcon, AtomInput, AtomText, AtomWrapper } from '@stacklycore/ui';
import { useState } from 'react';
import CartoonsItem from './components/CartoonsItem';
import { CartoonsContainer } from './styles';

const Cartoons = () => {
  const [search, setSearch] = useState('');
  const { data: series } = useSeriesInifity({
    variables: {
      filter: {
        title: {
          contains: search
        }
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
        <AtomText className="cartoons-title">Cartoons de la infancia</AtomText>
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

export default Cartoons;
