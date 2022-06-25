import Head from 'next/head'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tres Amigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
      </main>

      <Footer />
    </div>
  )
}
