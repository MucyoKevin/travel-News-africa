import './globals.css'
import Header from './Header'
import Providers from './Providers'
import Footer from './Footer'
import styles from "./page.module.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className='bg-primary-color dark:bg-black-900 transition-all duration-700 '>
        <div className={styles.wrapper}>
        <Header />
        <div className="max-w-6xl mx-auto ">
        {children}  
        </div>  
        <Footer />
        </div>
      </body>
      </Providers>
    </html>
  )
}
