import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import {
  News,
  Features,
  Hero,
  MetaTagsWrapper,
  Application,
  Resources,
} from 'components';
import useGetOverview from 'hooks/useGetOverview';
import useGetNews from 'hooks/useGetNews';
import defaultMetaTags from 'utils/metaTags';
import HelpLine from 'components/HelpLine';

const Home: NextPage = () => {
  const { data } = useGetOverview();

  // you can console.log NewsFromContentful.data
  const NewsFromContentful = useGetNews(0, 3);
  return (
    <div className=''>
      <MetaTagsWrapper tags={defaultMetaTags} />
      <Hero />
      <Features data={data!} />
      {/* <Highlights /> */}
      <Application />
      <Resources />
      <HelpLine />
      <News newsData={NewsFromContentful.data} />
    </div>
  );
};

export default Home;
