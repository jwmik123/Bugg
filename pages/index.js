import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { services } from "../assets/dataList/dataList";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import Cases from "../components/Cases";
import Footer from "../components/Footer";
import TextLoop from "react-text-loop";
import animateScrollTo from "animated-scroll-to";
import landingImage from "../assets/images/landing-image.webp";
import { ChevronDownIcon } from "@heroicons/react/outline";
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <div className="cursor-not-allowed">
      <Head>
        <title>Bugg.</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
        <link rel="stylesheet" href="owl-carousel/owl.theme.css"></link>
        <meta http-equiv="pragma" content="no-cache" />
      </Head>

      {/* Header */}
      <Header />

      {/* Cursor */}
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={1.5}
      />

      <main>
        {/* Landing Section */}
        <section className="relative pointer-events-none h-[40vh] md:h-[100vh] flex items-center justify-center md:justify-start md:px-32 lg:px-24 xl:px-64">
          <Image
            className="opacity-40"
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
              Wij zijn BUGG.
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
                <Link href={"/" + elem.name}>
                  <div className="group service-item bg-gray-light m-3 py-8 px-12 rounded-lg min-h-[350px] flex flex-col justify-center cursor-pointer hover:bg-yellow hover:-translate-y-2 transition-all">
                    <div className="w-14">{elem.logo}</div>
                    <h2 className="py-5 text-2xl text-white font-poppinsl font-bold group-hover:text-gray">
                      {elem.name}
                    </h2>
                    <p className="text-lg text-[#717173] font-light group-hover:text-gray">
                      {elem.bio}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Cases Section */}
        <Cases />

        {/* About Us Section */}
        <section className="about flex flex-col gap-2 items-center lg:items-start lg:flex-row text-center lg:text-left justify-center md:py-14 md:px-32 lg:px-24 xl:px-64 bg-gray">
          <div
            data-aos="fade-up"
            className="w-10/12 lg:w-1/2 mb-6 flex justify-center items-center"
          ></div>
          <div className="md:pr-5 w-10/12 lg:w-1/2">
            <h1
              data-aos="fade-up"
              className="text-white text-4xl text-center md:text-left md:text-6xl font-extrabold"
            >
              Maak kennis met BUGG.
            </h1>
            <p
              data-aos="fade-up"
              className="text-white font-light text-center md:text-left text-lg my-5 tekst"
              id="tekst"
            >
              We zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht. We zijn altijd op zoek naar nieuwe
              projecten en nieuwe connecties! Stuur ons gerust een bericht.We
              zijn altijd op zoek naar nieuwe projecten en nieuwe connecties!
              Stuur ons gerust een bericht.We zijn altijd op zoek naar nieuwe
              projeh77cten en nieuwe connecties! Stuur ons gerust een bericht.
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
          className="contact flex flex-col py-14 md:px-32 lg:px-24 xl:px-64 items-center md:items-start"
        >
          <div className="flex items-center flex-col w-10/12 md:w-full pb-12 lg:pb-28 pt-8 lg:pt-12">
            <h1
              data-aos="fade-up"
              className="text-4xl text-white font-extrabold md:text-6xl  text-center pb-4"
            >
              Laten we samenwerken.
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg text-center text-[#717173]"
            >
              Vul het form hier beneden in of mail/bel ons direct. We zullen zo
              snel mogelijk contact me je opnemen.
            </p>
          </div>
          <div className="flex w-10/12 lg:w-full flex-col md:flex-row gap-10">
            <div className="w-full lg:w-2/4">
              <div
                data-aos="fade-up"
                className="flex flex-col md:flex-row justify-between text-sm gap-2"
              >
                <div className="flex mb-2">
                  <span className="mr-1">
                    <LocationMarkerIcon className="w-5 h-5 text-yellow" />
                  </span>
                  <p className="text-white">Kinkerstraat 208-2, Amsterdam</p>
                </div>
                <div className="flex  mb-2">
                  <span className="mr-1">
                    <PhoneIcon className="w-5 h-5 text-yellow" />
                  </span>
                  <p className="text-white">
                    <a href="tel:+31640395455">+31 6 40395455</a>
                  </p>
                </div>
                <div className="flex mb-5">
                  <span className="mr-1">
                    <MailIcon className="w-5 h-5 text-yellow" />
                  </span>
                  <p className="text-white">
                    <a href="mailto:tommy@bugg.amsterdam">
                      hello@bugg.amsterdam
                    </a>
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
            <div
              data-aos="fade-up"
              className="hidden lg:block w-10/12 lg:w-2/4 h-[400px] relative"
            >
              <Map />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
