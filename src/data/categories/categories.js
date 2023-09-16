import { faWineBottle, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoBagel from "../../assets/images/bagel.png";
import logoSalade from "../../assets/images/salade.png";
import logoVin from "../../assets/images/vin.png";
import logoBoissons from "../../assets/images/boissons.png";
const logoSmall = "20px";
export const categories = [
  {
    name: "Oghje",
    // icon: <FontAwesomeIcon icon={faHashtag} size="2x" />,
    link: "/",
    slug: "oghje",
  },
  {
    name: "Insalate",
    title: "",
    logo: logoSalade,

    // icon: <FontAwesomeIcon icon={faHashtag} size="2x" />,
    link: "/products/insalate",
    slug: "salades",
  },
  {
    name: "Carne",
    title: "",
    logo: logoBagel,
    legend: "",
    link: "/products/carne",
    slug: "carne",
  },
  {
    name: "Pescare",
    title: "",
    logo: logoBagel,
    legend: "",
    link: "/products/pescare",
    slug: "pescare",
  },
  {
    name: "Pasta",
    title: "",
    logo: logoBagel,
    legend: "",
    link: "/products/pasta",
    slug: "pasta",
  },
  {
    name: "Pizza",
    title: "",
    logo: logoBagel,
    legend: "",
    link: "/products/pizza",
    slug: "pizza",
  },
  {
    name: "Boissons Fraiches",
    logo: logoBoissons,
    // icon: <FontAwesomeIcon icon={fa} size="2x" />,
    link: "/products/le-froid",
    slug: "le-froid",
  },
  {
    name: "Boissons Chaudes",
    icon: <FontAwesomeIcon icon={faCoffee} size="1x" />,
    link: "/products/le-chaud",
    slug: "le-chaud",
  },
  {
    name: "La Cave",
    logo: logoVin,
    link: "/products/le-vin",
    slug: "le-vin",
  },
];
