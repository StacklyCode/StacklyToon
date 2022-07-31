import Banner from '@Src/components/Banner';
import Cartoons from '@Src/components/Cartoons';
import Channels from '@Src/components/Channels';
import Header from '@Src/components/Header';
import { NextPageFC } from 'next';

const PageIndex: NextPageFC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Channels />
      <Cartoons />
    </>
  );
};

export default PageIndex;
