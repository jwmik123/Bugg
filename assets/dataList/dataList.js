import {
  ChevronDownIcon,
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
    bio: "Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipis.",
    logo: <CodeIcon className="w-14 h-14 text-yellow" />,
  },
  {
    id: 2,
    name: "Videoproducties & Animaties",
    bio: "Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipis.",
    logo: <FilmIcon className="w-14 h-14 text-yellow" />,
  },
  {
    id: 3,
    name: "Webshops & E-commerce",
    bio: "Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipis.",
    logo: <ShoppingCartIcon className="w-14 h-14 text-yellow" />,
  },
  {
    id: 4,
    name: "Social Media Strategie",
    bio: "Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipis.",
    logo: <UsersIcon className="w-14 h-14 text-yellow" />,
  },
  {
    id: 5,
    name: "UX Design",
    bio: "Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipis.",
    logo: <LightBulbIcon className="w-14 h-14 text-yellow" />,
  },
  {
    id: 6,
    name: "Copywriting & SEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipis.",
    logo: <DocumentTextIcon className="w-14 h-14 text-yellow" />,
  },
];

export default services;
