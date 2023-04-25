import { use } from 'react'
import Empower from './ui/molecules/Empower'
import FindYourMentor from './ui/molecules/FindYourMentor'
import HeroBanner from './ui/molecules/HeroBanner'
import Motivation from './ui/molecules/Motivation'
import StatisticsLayout from './ui/molecules/StatisticsLayout'
import { getPage } from './utils/cocntentful'

async function getPageData () {
   return await getPage({
    pageContentType: 'page',
    slug: 'mainPage',
    locale: 'en-US',
  });
}

export default function Home() {
  const data = use(getPageData());
  console.log('loaded', data.fields.content[0]);
  console.log('loaded', data.fields.content[0].sys.contentType.sys.id);
  return (
    <main >
      <HeroBanner />
      <FindYourMentor />
      <Motivation />
      <StatisticsLayout />
      <Empower />
    </main>
  )
}