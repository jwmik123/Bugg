import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

import Image from 'next/image'
import landingImage from '../assets/images/landing-image.jpeg'

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
        <section className='relative h-[50vh] md:h-[100vh] flex items-center'>
          <Image
            className='opacity-60'
            src={landingImage}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
          <div className='absolute flex flex-col gap-3 font-bold left-6 md:left-32 lg:left-64'>
          <h1 className="text-white text-4xl md:text-7xl">Hi, welkom bij Bugg.</h1>
            <h2 className='text-[#F5D905] text-2xl md:text-6xl'>Website Development</h2>
            <h3 className='text-white text-1xl md:text-4xl'>In Amsterdam</h3>
          </div>
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  )
}
