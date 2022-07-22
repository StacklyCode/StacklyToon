import Header from '@Src/components/Header';
import { NextPageFC } from 'next';
import Banner from '@Src/components/Banner';

const PageIndex: NextPageFC = () => {
  return (
    <>
      <Header />
      <Banner/>
    </>
  );
};

export default PageIndex;
