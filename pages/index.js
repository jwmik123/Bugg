import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

import 'atropos/css'

import Atropos from 'atropos/react'

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
      
      <div className='hidden lg:block absolute bottom-32 left-20 w-96 h-96 rounded-full blur-sm bg-green-700'></div>
      <div className='absolute z-0 top-20 right-20 md:top-60 md:right-40 w-52 h-52 blur-sm bg-green-600'></div>
      
        <section className='p-12 md:p-24 mt-44 w-full relative'>
          <h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold'>Full-service mediabureau gespecialiseerd in het realiseren van jouw dromen!</h1>
        </section>
        <section className='w-full mt-72 bg-white flex justify-center'>
          <div className='p-2 md:p-14'>
            <h1 className='text-5xl text-[#042825]'>Start een project</h1>
            <p className='my-12 text-xl w-1/2'>Denk je dat jouw bedrijf of idee door ons gerealiseerd kan worden? 
              Of ben je gewoon benieuwd naar de mogelijkheden? 
              We zouden het leuk vinden om van je te horen.</p>
            <ContactForm />
          </div>
  
         
        </section>
      </main>
    </div>
  )
}
