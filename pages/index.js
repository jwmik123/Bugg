import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bugg.</title>
        <link rel="icon" href='/favicon.ico'/>
      </Head>

      {/* Header */}
      <Header />
      
      <main>
        <section className='mx-10'>
          <div className='bg-white pt-20 md:text-green-500 mx-auto'>
              <h1 className='text-6xl font-bold'>Full-service mediabureau gespecialiseerd in het creëren van uw dromen.</h1>
              <h2 className='text-3xl font-light mt-3 md:mt-5'>Marketing, websites, video's & animaties</h2>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  )
}
