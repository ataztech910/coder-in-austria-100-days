import Header from './ui/organisms/Header'
import Footer from './ui/organisms/Footer'
import "./utils/amplifyConfigure";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <>
            <Header />
            {children}
            <Footer />
        </>
  )
}
