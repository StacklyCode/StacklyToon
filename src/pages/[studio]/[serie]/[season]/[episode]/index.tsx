import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { EPISODEBYID } from '@Src/apollo/query/episodeById';
import { SERIESBYID } from '@Src/apollo/query/serieById';
import { AtomImage, AtomLink, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IEpisode, IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
const SerieItemPage = () => {
  const router = useRouter();
  const { data } = useQuery<IQueryFilter<'episodeById'>>(EPISODEBYID, {
    variables: {
      id: router.query.episode
    }
  });

  const { data: dataSerie } = useQuery<IQueryFilter<'serieById'>>(SERIESBYID, {
    variables: {
      id: router.query.serie
    }
  });

  const season = useMemo(
    () =>
      dataSerie?.serieById?.seasons?.find(
        (season) => season.id === router.query.season
      ),
    [data, dataSerie, router]
  );

  const sortedEpisodes = useMemo(
    () =>
      dataSerie?.serieById?.seasons
        ?.slice()
        ?.sort(
          (a, b) =>
            Number(a.title?.match(/\d+/g)?.[0]) -
            Number(b.title?.match(/\d+/g)?.[0])
        )
        ?.reduce(
          (a, b) => [
            ...a,
            ...(b.episodes
              ?.slice()
              ?.sort(
                (a, b) =>
                  Number(a.title?.match(/\d+/g)?.[0]) -
                  Number(b.title?.match(/\d+/g)?.[0])
              ) ?? [])
          ],
          [] as IEpisode[]
        ),
    [season]
  );

  const beforeEpisode = useMemo(() => {
    const episodeIndex =
      sortedEpisodes?.findIndex(
        (episode) => episode.id === router.query.episode
      ) ?? 0;
    return sortedEpisodes?.[episodeIndex - 1];
  }, [dataSerie, router]);

  const nextEpisode = useMemo(() => {
    const episodeIndex =
      sortedEpisodes?.findIndex(
        (episode) => episode.id === router.query.episode
      ) ?? 1;
    return sortedEpisodes?.[episodeIndex + 1];
  }, [dataSerie, router]);

  return (
    <>
      <AtomLink
        css={css`
          color: #d70c06;
          cursor: pointer;
          margin-bottom: 10px;
        `}
        link={`/${dataSerie?.serieById?.studioId}/${dataSerie?.serieById?.id}/${router.query.season}`}
      >
        Volver a la temporada
      </AtomLink>
      <AtomWrapper
        css={css`
          gap: 10px;
        `}
      >
        <AtomText>{dataSerie?.serieById?.title}</AtomText>
        <AtomText>{season?.title}</AtomText>
        <AtomImage src={dataSerie?.serieById?.image} />
      </AtomWrapper>
      <AtomWrapper
        css={css`
          display: flex;
          flex-direction: column;
          padding: 10px;
          gap: 10px;
        `}
      >
        <AtomText>{data?.episodeById?.title}</AtomText>
        <AtomWrapper
          css={css`
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
            iframe {
              border: 0;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          `}
        >
          <iframe src={data?.episodeById?.video} />
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 10px;
        `}
      >
        <AtomWrapper
          css={css`
            width: max-content;
            overflow: hidden;
          `}
        >
          {beforeEpisode && (
            <>
              <AtomText>Capitulo anterior: </AtomText>
              <AtomLink
                link={`/${dataSerie?.serieById?.studioId}/${dataSerie?.serieById?.id}/${beforeEpisode?.seasonId}/${beforeEpisode.id}`}
              >
                {beforeEpisode?.title}
              </AtomLink>
            </>
          )}
        </AtomWrapper>
        <AtomWrapper
          css={css`
            width: max-content;
            overflow: hidden;
          `}
        >
          <AtomText>Capitulo siguiente: </AtomText>
          <AtomLink
            link={`/${dataSerie?.serieById?.studioId}/${dataSerie?.serieById?.id}/${nextEpisode?.seasonId}/${nextEpisode?.id}`}
          >
            {nextEpisode?.title}
          </AtomLink>
        </AtomWrapper>
      </AtomWrapper>

      {dataSerie?.serieById?.seasons
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
              link={`/${dataSerie?.serieById?.studioId}/${dataSerie?.serieById?.id}/${season.id}`}
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
                  link={`/${dataSerie?.serieById?.studioId}/${dataSerie?.serieById?.id}/${season.id}/${episode.id}`}
                  css={css`
                    padding: 5px 10px;
                    cursor: pointer;
                    color: ${episode.id === router.query.episode
                      ? '#d70c06'
                      : '#202124'};
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
