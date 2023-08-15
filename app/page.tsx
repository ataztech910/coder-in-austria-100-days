import { use } from 'react';
import Empower from './ui/molecules/Empower';
import FindYourMentor from './ui/molecules/FindYourMentor';
import HeroBanner from './ui/molecules/HeroBanner';
import Motivation from './ui/molecules/Motivation';
import StatisticsLayout from './ui/molecules/StatisticsLayout';
import { getPage } from './utils/contentful';
import PageLayout from './page-layout';

async function getPageData () {
  return await getPage({
    pageContentType: 'page',
    slug: 'mainPage',
    locale: 'en-US',
  });
}

export default function Home() {
  const data = typeof use === 'function'? use(getPageData()) : {};
  console.log(data);
  return (
    <PageLayout>
      <main>
        <HeroBanner {...data?.fields?.content[0]} />
        <FindYourMentor />
        <Motivation {...data?.fields?.content[1]} />
        <StatisticsLayout {...data?.fields?.content[2]} />
        <Empower {...data?.fields?.content[3]} />
      </main>
    </PageLayout>
  );
}