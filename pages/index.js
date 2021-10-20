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
        <section className='flex items-center w-full justify-center my-72'>
          <Atropos
           className='w-1/2'
           rotateXMax='3'
           rotateYMax='3'
           >
          <div className='relative p-2 md:p-14 bg-white rounded-md opacity-80'>
            <h2 className='text-2xl'>Start een project</h2>
            <ContactForm />
          </div>
          </Atropos>
         
        </section>
      </main>
    </div>
  )
}
