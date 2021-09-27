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
        <section className='px-10 bg-[#1c542d]'>
          <div className='py-20 max-w-7xl lg:mx-auto text-white'>
              <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold'>Full-service mediabureau gespecialiseerd in het creëren van uw dromen.</h1>
              <h2 className='text-3xl lg:text-4xl font-light mt-3 md:mt-5'>Marketing, websites, video's & animaties</h2>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  )
}
