import Header from './ui/organisms/Header'
import Footer from './ui/organisms/Footer'
import "./utils/amplifyConfigure";
import { Providers } from './store/providers/provider';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
            <Header />
              <Providers>{children}</Providers>
            <Footer />
        </>
  )
}
