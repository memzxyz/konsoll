import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>konsoll start!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Here's a bit about us" />
      </main>

      <Footer />
    </div>
  )
}
