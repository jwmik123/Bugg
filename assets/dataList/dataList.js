import {
  CodeIcon,
  FilmIcon,
  ShoppingCartIcon,
  UsersIcon,
  LightBulbIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";

export const services = [
  {
    id: 1,
    name: "Web Development",
    bio: "Een goede website is de basis van jouw online pressence.",
    logo: <CodeIcon className="logo" />,
    delay: 0,
  },
  {
    id: 2,
    name: "Videoproducties & Animaties",
    bio: "Geef je bedrijf of project een boost door middel van een promotievideo of animatie.",
    logo: <FilmIcon className="logo" />,
    delay: 50,
  },
  {
    id: 3,
    name: "Webshops & E-commerce",
    bio: "Producten of diensten verkopen op jouw website? Wij bouwen de perfecte webshop voor jou.",
    logo: <ShoppingCartIcon className="logo" />,
    delay: 100,
  },
  {
    id: 4,
    name: "Social Media Strategie",
    bio: "Word beter gevonden online door een social media strategie die precies bij jouw doelen past.",
    logo: <UsersIcon className="logo" />,
    delay: 150,
  },
  {
    id: 5,
    name: "UX Design",
    bio: "Een website moet naast dat het er goed uitziet ook gebruiksvriendelijk en logisch zijn voor de bezoeker.",
    logo: <LightBulbIcon className="logo" />,
    delay: 200,
  },
  {
    id: 6,
    name: "Copywriting & SEO",
    bio: "Goede teksten en juiste vorm van opmaak op je website verbetert de vindbaarheid van je website.",
    logo: <DocumentTextIcon className="logo" />,
    delay: 250,
  },
];

export default services;
