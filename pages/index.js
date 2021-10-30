import TextLoop from 'react-text-loop'

import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

import animateScrollTo from 'animated-scroll-to'

import Image from 'next/image'
import landingImage from '../assets/images/landing-image.webp'

import { ChevronDownIcon, TemplateIcon } from '@heroicons/react/outline'

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
        {/* Landing Section */}
        <section className='relative h-[50vh] md:h-[100vh] flex items-center justify-center '>
          <Image
            className='opacity-30'
            src={landingImage}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
          <div className='absolute flex flex-col gap-1 md:gap-3 font-bold md:left-32 lg:left-64'>
          <h1 className="text-white text-4xl md:text-7xl">Hi, welkom bij Bugg.</h1>
            <TextLoop 
              className='text-[#F1D302] text-2xl md:text-6xl' 
              springConfig={{ stiffness: 60, damping: 11 }} 
              children={["Website Development", "Online Branding", "Video's & Animaties"]} 
            />
            <h3 className='text-white text-1xl md:text-4xl'>In Amsterdam</h3>
            <ChevronDownIcon 
              className="hidden lg:block h-12 w-12 text-white mt-12 animate-bounce cursor-pointer" 
              onClick={() => {animateScrollTo(document.querySelector('.services'))}} />
          </div>
        </section>

        {/* Services Section */}
        <section className='services py-14 px-6 md:px-16 lg:px-32 lg:py-24 bg-[#101010]'>
          <h1 className="text-center text-white text-4xl md:text-6xl font-bold">Onze geweldige diensten</h1>
          <p className="text-[#717173] text-lg md:text-xl font-light text-center pt-4 pb-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          <div className="flex gap-5 flex-wrap justify-center">
            <div className="group bg-[#1d1d24] hover:bg-[#F1D302] min-w-[300px] w-10/12 md:w-3/6 lg:w-3/12 p-14 rounded-lg flex flex-col hover:cursor-pointer transform-gpu md:hover:translate-y-3 transition-all duration-500">
              <TemplateIcon className="w-14 h-14 mb-5 text-[#F1D302] group-hover:text-[#1d1d24]" />
              <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-[#1d1d24]">Online Branding</h2>
              <p className="text-[#717173] font-light text-lg group-hover:text-[#1d1d24]">I throw myself down among the tall grass by the stream as i lie close to the earth.</p>
            </div>
            <div className="group bg-[#1d1d24] hover:bg-[#F1D302] min-w-[300px] w-10/12 md:w-3/6 lg:w-3/12 p-14 rounded-lg flex flex-col hover:cursor-pointer transform-gpu md:hover:translate-y-3 transition-all duration-500">
              <TemplateIcon className="w-14 h-14 mb-5 text-[#F1D302] group-hover:text-[#1d1d24]" />
              <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-[#1d1d24]">Website Development</h2>
              <p className="text-[#717173] font-light text-lg group-hover:text-[#1d1d24]">I throw myself down among the tall grass by the stream as i lie close to the earth.</p>
            </div>
            <div className="group bg-[#1d1d24] hover:bg-[#F1D302] min-w-[300px] w-10/12 md:w-3/6 lg:w-3/12 p-14 rounded-lg flex flex-col hover:cursor-pointer transform-gpu md:hover:translate-y-3 transition-all duration-500">
              <TemplateIcon className="w-14 h-14 mb-5 text-[#F1D302] group-hover:text-[#1d1d24]" />
              <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-[#1d1d24]">Video & animatie</h2>
              <p className="text-[#717173] font-light text-lg group-hover:text-[#1d1d24]">I throw myself down among the tall grass by the stream as i lie close to the earth.</p>
            </div>
      
          </div>
        </section>
        {/* hover:bg-gradient-to-r from-[#C1292E] to-[#F1D302]  */}
        {/* Contact Section */}
        <section className='contact flex py-14 md:px-32 lg:px-64 lg:py-24  bg-[#101010]'>
          <div className="pr-5 w-1/2">
            <h1 className="text-white text-4xl md:text-6xl font-bold">Laten we samen een project starten.</h1>
          </div>
          <div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  )
}
