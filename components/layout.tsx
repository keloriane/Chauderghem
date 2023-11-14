import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main className={inter.className}>{children}</main>
      </div>
      <Footer />
    </>
  )
}
