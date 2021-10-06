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
        <section className='px-10 lg:mt-[150px] bg h-[70vh]'>
          <div className='py-20 max-w-7xl lg:mx-auto text-[#042825]'>
              <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Full-service mediabureau gespecialiseerd in het realiseren van jouw dromen!</h1>
              <h2 className='text-2xl lg:text-4xl font-light mt-3 md:mt-5'>Websites, marketing, video's & animaties</h2>
          </div>
        </section>

        <section className='bg-[#042825]'>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
    </div>
  )
}
