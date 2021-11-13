import { useEffect, useState, useRef } from "react";

import TextLoop from "react-text-loop";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import animateScrollTo from "animated-scroll-to";
import Image from "next/image";

import mapboxgl from "!mapbox-gl";

import landingImage from "../assets/images/landing-image.webp";

import Map from "../components/Map";

import {
  ChevronDownIcon,
  CodeIcon,
  ChartBarIcon,
  FilmIcon,
  ShoppingCartIcon,
  UsersIcon,
  LightBulbIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";

import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";

import "aos/dist/aos.css";
import "mapbox-gl/dist/mapbox-gl.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamFsbGEiLCJhIjoiY2t0a2c1YTcwMWFtZjJxbzZqc3VvaGZhNiJ9.-x-5vY8REo7IrMeUzus26Q";

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(4.87);
  const [lat, setLat] = useState(52.37);
  const [zoom, setZoom] = useState(14);

  // const marker = new mapboxgl.Marker().setLngLat([4.87, 52.37]).addTo(map);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/jalla/ckvwg1anm0rnl14n0z9h8mcwf",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
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
          <div className="absolute flex flex-col gap-1 md:gap-3 font-bold">
            <h1
              data-aos="flip-down"
              className="text-white text-4xl md:text-9xl"
            >
              Hi, welkom bij Bugg.
            </h1>
            <div data-aos="flip-down" data-aos-delay="150">
              <TextLoop
                className="text-yellow text-2xl md:text-6xl"
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
              className="text-white ml-2 text-1xl md:text-4xl"
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
        <section className="services flex justify-center items-center flex-col py-14 px-6 md:px-16 lg:px-16 lg:py-24 bg-gray">
          <h1
            data-aos="fade-up"
            className="text-center text-white text-4xl md:text-6xl font-bold"
          >
            Onze geweldige diensten.
          </h1>
          <p
            data-aos="fade-up"
            className="text-[#717173] text-lg md:text-xl font-light text-center pt-4 pb-12"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="flex flex-wrap justify-center">
            <div data-aos="zoom-in" className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group h-[300px] bg-gray-light hover:bg-yellow m-5  p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <CodeIcon className="w-[50px] h-[50px] mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Web Development
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Voor een groter bereik op Social Media en betere vindbaarheid
                  op Google.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="w-full sm:w-1/2 lg:w-1/3 ">
              <div className="group h-[300px] bg-gray-light hover:bg-yellow m-5 p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <FilmIcon className="w-[30px] h-[30px] mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Videoproducties & Animaties
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Voor een groter bereik op Social Media en betere vindbaarheid
                  op Google.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group h-[300px] bg-gray-light hover:bg-yellow m-5  p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <LightBulbIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  UX Design
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Voor een groter bereik op Social Media en betere vindbaarheid
                  op Google.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group h-[300px] bg-gray-light hover:bg-yellow m-5 p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <ShoppingCartIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Webshops & e-commerce
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Voor een groter bereik op Social Media en betere vindbaarheid
                  op Google.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group h-[300px] bg-gray-light hover:bg-yellow m-5  p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <DocumentTextIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Copywriting & SEO
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Voor een groter bereik op Social Media en betere vindbaarheid
                  op Google.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in" className="w-full sm:w-1/2 lg:w-1/3">
              <div className="group h-[300px] bg-gray-light hover:bg-yellow m-5 p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <UsersIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Social Media Strategie
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Voor een groter bereik op Social Media en betere vindbaarheid
                  op Google.
                </p>
              </div>
            </div>

            {/* <div
              data-aos="zoom-in"
              data-aos-delay="150"
              className="min-w-[300px] w-10/12 lg:w-3/12"
            >
              <div className="group bg-gray-light hover:bg-yellow p-10 rounded-lg flex flex-col hover:cursor-pointer  md:hover:translate-y-3 transition-all duration-500">
                <CodeIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Web Development
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Een informatieve website, webshop of web applicatie? Het kan
                  allemaal bij Bugg.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="250"
              className="min-w-[300px] w-10/12 lg:w-3/12"
            >
              <div className="group bg-gray-light hover:bg-yellow p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <FilmIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Videoproducties &amp; animaties
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Bugg. maakt video's van evenementen. Maar ook animaties voor
                  op je website.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="250"
              className="min-w-[300px] w-10/12 lg:w-3/12"
            >
              <div className="group bg-gray-light hover:bg-yellow p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <FilmIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  UX Design
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Bugg. maakt video's van evenementen. Maar ook animaties voor
                  op je website.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="250"
              className="min-w-[300px] w-10/12 lg:w-3/12"
            >
              <div className="group bg-gray-light hover:bg-yellow p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <FilmIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Webshops & E-commerce
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Bugg. maakt video's van evenementen. Maar ook animaties voor
                  op je website.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="250"
              className="min-w-[300px] w-10/12 lg:w-3/12"
            >
              <div className="group bg-gray-light hover:bg-yellow p-10 rounded-lg flex flex-col hover:cursor-pointer md:hover:translate-y-3 transition-all duration-500">
                <FilmIcon className="w-14 h-14 mb-5 text-yellow group-hover:text-gray-light" />
                <h2 className="mb-5 text-2xl text-white font-medium group-hover:text-gray-light">
                  Copywriting &amp; SEO
                </h2>
                <p className="text-[#717173] font-light text-lg group-hover:text-gray-light">
                  Bugg. maakt video's van evenementen. Maar ook animaties voor
                  op je website.
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* About Us Section */}
        {/* <section className="flex gap-10 py-14 md:px-32 lg:px-24 xl:px-64 lg:py-24 bg-gray-light"></section> */}
        <section className="about flex flex-col items-center lg:items-start lg:flex-row text-center lg:text-left justify-center py-14 md:px-32 lg:px-24 xl:px-64 bg-gray">
          <div className="w-10/12 lg:w-1/2">
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
              className="text-white text-4xl md:text-6xl font-bold"
            >
              Wij zijn Bugg.
            </h1>
            <p className="text-white font-light text-lg my-5">
              We zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht. We zijn altijd op zoek naar nieuwe
              projecten en nieuwe connecties! Stuur ons gerust een bericht.We
              zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht.We zijn altijd op zoek naar nieuwe
              projecten en nieuwe connecties! Stuur ons gerust een bericht.
            </p>

            <div className="flex mb-5">
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
        <section className="contact flex flex-col items-center lg:items-start lg:flex-row text-center lg:text-left justify-center py-14 md:px-32 lg:px-24 xl:px-64 lg:py-24 bg-gray">
          <div className="pr-5 w-10/12 lg:w-1/2">
            <h1
              data-aos="fade-up"
              className="text-white text-4xl md:text-6xl font-bold"
            >
              Laten we samen een project starten.
            </h1>
            <p className="text-[#717173] font-light text-lg my-5">
              We zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht.
            </p>
            <div className="flex mb-2">
              <span className="mr-2">
                <LocationMarkerIcon className="w-5 h-5 text-yellow" />
              </span>
              <p className="text-white">Kinkerstraat 208, Amsterdam</p>
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
          <div className="w-10/12 lg:w-1/2">
            <ContactForm />
          </div>
        </section>
        <div ref={mapContainer} className="map-container h-64 z-50" />
      </main>

      <Footer />
    </div>
  );
}
