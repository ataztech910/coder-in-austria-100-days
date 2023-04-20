import Empower from './ui/molecules/Empower'
import FindYourMentor from './ui/molecules/FindYourMentor'
import HeroBanner from './ui/molecules/HeroBanner'
import Motivation from './ui/molecules/Motivation'
import StatisticsLayout from './ui/molecules/StatisticsLayout'

export default function Home() {
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
