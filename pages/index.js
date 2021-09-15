import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bugg.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        
      </main>

      {/* Footer */}
    </div>
  )
}
