import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { EPISODEBYID } from '@Src/apollo/query/episodeById';
import { SERIESBYID } from '@Src/apollo/query/serieById';
import { AtomImage, AtomLink, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IEpisode, IQueryFilter } from 'graphql';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
// const Player = dynamic(import('@Src/components/Player'), { ssr: false });

const SerieItemPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string | null>(null);
  const { data } = useQuery<IQueryFilter<'episodeById'>>(EPISODEBYID, {
    variables: {
      id: router.query.episode
    }
  });
  console.warn(video);

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

  useEffect(() => {
    if (data?.episodeById?.video) {
      const url = data?.episodeById?.video?.replace(
        'https://www.ok.ru/videoembed/',
        '/video/'
      );
      getVideo(url, (blob) => {
        setVideo(blob);
      });
    }
  }, [data]);

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
        {/* <Player
          config={{
            id: 'tplayernext',
            source: {
              hls: video
            },
            sourceHeaders: {
              dash: {
                // "T-Header": "You can send header like this",
              },
              hls: {
                // "T-Header": "You can send header like this",
              }
            },

            ui: {
              mainColor: '#d70c06'
            }
          }}
        /> */}
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
          <iframe
            src={`${data?.episodeById?.video}?autoplay=1`}
            frameBorder="0"
            allow="autoplay"
            id="video"
          />
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

const getVideo = async (url: string, callback: (blob: string) => void) => {
  const userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0';
  const response = await fetch(url, {
    headers: {
      'User-Agent': userAgent
    }
  });
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  //get by [data-module="OKVideo"]
  const video = doc.querySelector('[data-module="OKVideo"]');
  const urlOptions = video?.getAttribute('data-options');
  const getOptions = JSON.parse(urlOptions ?? '{}');
  const getMetaData = JSON.parse(getOptions?.flashvars?.metadata ?? '{}');
  const urlMeta = getMetaData?.hlsManifestUrl?.replace(
    'https://vd255.mycdn.me',
    '/mycdn'
  );
  callback(urlMeta ?? null);
};
