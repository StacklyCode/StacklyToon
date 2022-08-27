import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { SERIESBYID } from '@Src/apollo/query/serieById';
import { AtomLink, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
const SerieItemPage = () => {
  const router = useRouter();
  const { data } = useQuery<IQueryFilter<'serieById'>>(SERIESBYID, {
    variables: {
      id: router.query.serie
    }
  });

  const season = useMemo(
    () =>
      data?.serieById?.seasons?.find(
        (season) => season.id === router.query.season
      ),
    [data]
  );

  return (
    <>
      <AtomLink
        css={css`
          color: #d70c06;
          cursor: pointer;
          margin-bottom: 10px;
        `}
        link={`/${router.query.serie}`}
      >
        Volver a la temporada
      </AtomLink>
      <AtomText>SEASON ITEM</AtomText>
      <AtomText>{router.query?.season}</AtomText>
      <AtomWrapper
        css={css`
          display: flex;
          flex-direction: column;
          padding: 10px;
        `}
      >
        <AtomLink
          css={css`
            color: #d70c06;
            cursor: pointer;
          `}
          link={`/${router.query.serie}/${season?.id}`}
        >
          {season?.title}
        </AtomLink>

        {season?.episodes
          ?.slice()
          ?.sort(
            (a, b) =>
              Number(a.title?.match(/\d+/g)?.[0]) -
              Number(b.title?.match(/\d+/g)?.[0])
          )
          ?.map((episode) => (
            <AtomLink
              key={episode.id}
              link={`/${router.query.serie}/${season.id}/${episode.id}`}
              css={css`
                padding: 5px 10px;
                cursor: pointer;
              `}
            >
              {episode.title}
            </AtomLink>
          ))}
      </AtomWrapper>
    </>
  );
};
export default SerieItemPage;
