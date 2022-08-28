import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { LISTSTUDIOS } from '@Src/apollo/query/listStudio';
import Banner from '@Src/components/Banner';
import { channelsInfo } from '@Src/components/Channels/constants';
import { ChannelList } from '@Src/components/Channels/styled';
import { AtomImage, AtomText, AtomWrapper } from '@stacklycore/ui';
import { IQueryFilter } from 'graphql';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ChannelsList: NextPage = () => {
  const { data } = useQuery<IQueryFilter<'listStudios'>>(LISTSTUDIOS);
  const router = useRouter();
  return (
    <>
      <Banner>
        <AtomWrapper
          className={'banner-content'}
          css={css`
            align-items: center;
          `}
        >
          <AtomText
            as={'h1'}
            className={'banner-title'}
            css={css`
              max-width: 450px;
              width: 100%;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            `}
          >
            Canales de tus series y cartoons favoritos
          </AtomText>
          <AtomText
            as={'p'}
            className={'banner-description'}
            css={css`
              max-width: 602px;
              width: 100%;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            `}
          >
            A lo largo del tiempo salieron distintos canales que marcaron la
            vida de muchas personas.
          </AtomText>
        </AtomWrapper>
      </Banner>
      <AtomWrapper css={ChannelList}>
        {data?.listStudios.map((item) => (
          <Link href={`/${item.id}`} key={item.id} passHref>
            <div
              className="channel-content"
              onClick={() => router.push(`/${item.id}`)}
            >
              <AtomImage
                className="channel-image"
                src={
                  channelsInfo[item.name as keyof typeof channelsInfo]?.image
                }
              />
              <AtomText className="channel-name">{item.name}</AtomText>
            </div>
          </Link>
        ))}
      </AtomWrapper>
    </>
  );
};
export default ChannelsList;
