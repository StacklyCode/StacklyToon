import { ApolloProvider } from '@apollo/client';
import client from '@Src/apollo';
import LayoutContext from '@Src/layouts';
import CustomGlobalStyles from '@Src/styles';
import { ThemeLight } from '@Src/themes/light';
import { CreateThemes, ThemeContext } from '@stacklycore/ui';
import { AppPropsWithLayout } from 'next/app';
import { FC } from 'react';

const themes = {
  light: ThemeLight
};

export const ThemesWithMachine = CreateThemes(themes);

const _App: FC<AppPropsWithLayout> = ({ Component, pageProps, router }) => {
  return (
    <ThemeContext themes={ThemesWithMachine}>
      <ApolloProvider client={client}>
        <LayoutContext layout={Component.layout}>
          <CustomGlobalStyles />

          <Component {...pageProps} key={router.pathname} />
        </LayoutContext>
      </ApolloProvider>
    </ThemeContext>
  );
};

export default _App;
