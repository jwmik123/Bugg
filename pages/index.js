import Head from 'next/head'
import ContactForm from '../components/ContactForm'
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
        <div className='absolute top-20 right-20 md:top-60 md:right-40 w-52 h-52 blur-sm bg-green-400'></div>
        <div className='hidden lg:block absolute bottom-32 left-20 w-96 h-96 rounded-full blur-md bg-green-600'></div>
        <section className='px-10 lg:mt-[150px] h-[65vh] relative'>
          <div className='py-20 max-w-7xl lg:mx-auto text-[#042825]'>
              <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Full-service mediabureau gespecialiseerd in het realiseren van jouw dromen!</h1>
              <h2 className='text-2xl lg:text-4xl font-light mt-3 md:mt-5'>Websites, marketing, video's & animaties</h2>
          </div>
        </section>

        <section className='bg-[#042825] h-[65vh]'>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
    </div>
  )
}
