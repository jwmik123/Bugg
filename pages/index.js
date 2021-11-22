import Head from "next/head";
import TextLoop from "react-text-loop";
import animateScrollTo from "animated-scroll-to";
import Image from "next/image";

import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import Cases from "../components/Cases";
import Footer from "../components/Footer";

import { services } from "../assets/dataList/dataList";

import landingImage from "../assets/images/landing-image.webp";

import { ChevronDownIcon } from "@heroicons/react/outline";

import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";

import "aos/dist/aos.css";

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
        {/* Landing Section */}
        <section className="relative h-[40vh] md:h-[100vh] flex items-center justify-center md:justify-start md:px-32 lg:px-24 xl:px-64">
          <Image
            className="opacity-30"
            src={landingImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute flex flex-col gap-1 md:gap-3">
            <h1
              data-aos="flip-down"
              className="text-white text-4xl md:text-7xl lg:text-8xl font-poppins font-bold"
            >
              Hi, welkom bij Bugg.
            </h1>
            <div data-aos="flip-down" data-aos-delay="150">
              <TextLoop
                className="text-yellow text-2xl md:text-5xl font-poppins"
                springConfig={{ stiffness: 60, damping: 11 }}
                children={[
                  "Web Development",
                  "Videoproducties & Animaties",
                  "UX Design",
                  "Webshops & E-commerce",
                  "Copywriting & SEO",
                  "Social Media Strategie",
                ]}
              />
            </div>
            <h3
              data-aos="flip-down"
              data-aos-delay="300"
              className="text-white ml-1 text-1xl md:text-4xl font-poppins"
            >
              In Amsterdam
            </h3>
            <ChevronDownIcon
              className="hidden lg:block h-12 w-12 text-yellow rounded-full mt-6 cursor-pointer animate-bounce"
              onClick={() => {
                animateScrollTo(document.querySelector(".services"));
              }}
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="services flex flex-col items-center justify-center bg-gray py-14 px-6 md:px-16 lg:px-16">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-extrabold text-white text-center"
          >
            Onze geweldige diensten.
          </h1>
          <p
            data-aos="fade-up"
            className="text-[#717173] text-lg md:text-xl font-light text-center pt-4 pb-12"
          >
            Wij zijn gespecialiseerd in elk onderdeel dat te maken heeft met
            online marketing. Full Service.
          </p>
          <div className="flex flex-wrap">
            {services.map((elem, i) => (
              <div
                key={elem.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex"
                data-aos="fade-up"
                data-aos-delay={elem.delay}
              >
                <div className="group bg-gray-light m-3 py-8 px-12 rounded-lg min-h-[350px] flex flex-col justify-center cursor-pointer hover:bg-yellow hover:translate-y-2 transition-all">
                  <div className="w-14">{elem.logo}</div>
                  <h2 className="py-5 text-2xl text-white font-poppinsl font-bold group-hover:text-gray">
                    {elem.name}
                  </h2>
                  <p className="text-lg text-[#717173] font-light group-hover:text-gray">
                    {elem.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cases Section */}
        <Cases />

        {/* About Us Section */}
        <section className="about flex flex-col items-center lg:items-start lg:flex-row text-center lg:text-left justify-center py-14 md:px-32 lg:px-24 xl:px-64 bg-gray">
          <div data-aos="fade-up" className="w-10/12 lg:w-1/2 mb-6">
            <Image
              src="https://via.placeholder.com/350"
              width="350px"
              height="350px"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="pr-5 w-10/12 lg:w-1/2">
            <h1
              data-aos="fade-up"
              className="text-white text-4xl md:text-6xl font-extrabold"
            >
              Wij zijn Bugg.
            </h1>
            <p
              data-aos="fade-up"
              className="text-white font-light text-lg my-5"
            >
              We zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht. We zijn altijd op zoek naar nieuwe
              projecten en nieuwe connecties! Stuur ons gerust een bericht.We
              zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht.We zijn altijd op zoek naar nieuwe
              projecten en nieuwe connecties! Stuur ons gerust een bericht.
            </p>

            <div data-aos="fade-up" className="flex mb-5">
              <span className="mr-2">
                <MailIcon className="w-5 h-5 text-yellow" />
              </span>
              <p className="text-white">
                <a href="mailto:tommy@bugg.amsterdam">hello@bugg.amsterdam</a>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="contact flex flex-col items-center lg:items-start lg:flex-row text-center lg:text-left justify-center py-14 md:px-32 lg:px-24 xl:px-64 lg:py-24 bg-gray"
        >
          <div className="pr-5 w-10/12 lg:w-1/2">
            <h1
              data-aos="fade-up"
              className="text-white text-4xl md:text-6xl font-extrabold"
            >
              Laten we samen een project starten.
            </h1>
            <p
              data-aos="fade-up"
              className="text-[#717173] font-light text-lg my-5"
            >
              We zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht.
            </p>
            <div data-aos="fade-up">
              <div className="flex mb-2">
                <span className="mr-2">
                  <LocationMarkerIcon className="w-5 h-5 text-yellow" />
                </span>
                <p className="text-white">
                  <a
                    target="_blank"
                    href="http://maps.google.com/?daddr=Kinkerstraat+208,+Amsterdam"
                  >
                    Kinkerstraat 208-2, Amsterdam
                  </a>
                </p>
              </div>
              <div className="flex mb-2">
                <span className="mr-2">
                  <PhoneIcon className="w-5 h-5 text-yellow" />
                </span>
                <p className="text-white">
                  <a href="tel:+31640395455">+31 6 40395455</a>
                </p>
              </div>
              <div className="flex mb-5">
                <span className="mr-2">
                  <MailIcon className="w-5 h-5 text-yellow" />
                </span>
                <p className="text-white">
                  <a href="mailto:tommy@bugg.amsterdam">hello@bugg.amsterdam</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-10/12 lg:w-1/2">
            <ContactForm />
          </div>
        </section>
        {/* <div ref={mapContainer} className="map-container h-64 z-50" /> */}
        <section className="hidden lg:inline-flex lg:w-full h-64">
          <Map />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
