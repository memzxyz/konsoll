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
        <Header title="Welcome to the start of konsoll!" />
        <div class="col lg-2">
    <p>assassda</p>
    
    </div>
    <div class="col lg-2">
    <p>aksksksk</p>
    </div>
      </main>

      <Footer />
    </div>
  )
}
