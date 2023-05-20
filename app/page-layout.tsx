import Header from './ui/organisms/Header'
import Footer from './ui/organisms/Footer'

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
