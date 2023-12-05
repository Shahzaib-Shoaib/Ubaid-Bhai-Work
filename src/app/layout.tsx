import Header from '@/components/Header'
import '../styles/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Morsi M Partners',
  description: 'An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={"font-newroman"}>
        {/* <Header /> */}
        {children}
        <Footer />
        </body>
    </html>
  )
}
