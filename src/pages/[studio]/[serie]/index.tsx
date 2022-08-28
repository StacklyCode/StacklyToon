import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { SERIESBYID } from '@Src/apollo/query/serieById';
import { AtomImage, AtomLink, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
const SerieItemPage = () => {
  const router = useRouter();
  const { data } = useQuery<IQueryFilter<'serieById'>>(SERIESBYID, {
    variables: {
      id: router.query.serie
    }
  });
  return (
    <>
      <AtomLink
        css={css`
          color: #d70c06;
          cursor: pointer;
          margin-bottom: 10px;
        `}
        link={`/${data?.serieById?.studioId}`}
      >
        Volver al Studio
      </AtomLink>
      <AtomWrapper
        css={css`
          gap: 10px;
        `}
      >
        <AtomText>{data?.serieById?.title}</AtomText>
        <AtomImage src={data?.serieById?.image} />
      </AtomWrapper>
      {data?.serieById?.seasons
        ?.slice()
        ?.sort(
          (a, b) =>
            Number(a.title?.match(/\d+/g)?.[0]) -
            Number(b.title?.match(/\d+/g)?.[0])
        )
        ?.map((season) => (
          <AtomWrapper
            key={season.id}
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
              link={`/${data?.serieById?.studioId}/${data?.serieById?.id}/${season.id}`}
            >
              {season.title}
            </AtomLink>

            {season.episodes
              ?.slice()
              ?.sort(
                (a, b) =>
                  Number(a.title?.match(/\d+/g)?.[0]) -
                  Number(b.title?.match(/\d+/g)?.[0])
              )
              ?.map((episode) => (
                <AtomLink
                  key={episode.id}
                  link={`/${data?.serieById?.studioId}/${data?.serieById?.id}/${season.id}/${episode.id}`}
                  css={css`
                    padding: 5px 10px;
                    cursor: pointer;
                  `}
                >
                  {episode.title}
                </AtomLink>
              ))}
          </AtomWrapper>
        ))}
    </>
  );
};
export default SerieItemPage;
