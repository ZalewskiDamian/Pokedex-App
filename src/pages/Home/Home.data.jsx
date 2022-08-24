import kantoOne from "../../assets/images/generations/kanto_1.svg";
import kantoTwo from "../../assets/images/generations/kanto_2.svg";
import kantoThree from "../../assets/images/generations/kanto_3.svg";
import johtoOne from "../../assets/images/generations/johto_1.svg";
import johtoTwo from "../../assets/images/generations/johto_2.svg";
import johtoThree from "../../assets/images/generations/johto_3.svg";
import hoennOne from "../../assets/images/generations/hoenn_1.svg";
import hoennTwo from "../../assets/images/generations/hoenn_2.svg";
import hoennThree from "../../assets/images/generations/hoenn_3.svg";
import sinnohOne from "../../assets/images/generations/sinnoh_1.svg";
import sinnohTwo from "../../assets/images/generations/sinnoh_2.svg";
import sinnohThree from "../../assets/images/generations/sinnoh_3.svg";
import unovaOne from "../../assets/images/generations/unova_1.svg";
import unovaTwo from "../../assets/images/generations/unova_2.svg";
import unovaThree from "../../assets/images/generations/unova_3.svg";
import kalosOne from "../../assets/images/generations/kalos_1.png";
import kalosTwo from "../../assets/images/generations/kalos_2.png";
import kalosThree from "../../assets/images/generations/kalos_3.png";
import alolaOne from "../../assets/images/generations/alola_1.png";
import alolaTwo from "../../assets/images/generations/alola_2.png";
import alolaThree from "../../assets/images/generations/alola_3.png";
import galarOne from "../../assets/images/generations/galar_1.png";
import galarTwo from "../../assets/images/generations/galar_2.png";
import galarThree from "../../assets/images/generations/galar_3.png";

export const regions = [
  {
    name: "Kanto",
    limit: 151,
    offset: 0,
    generationsImages: [kantoOne, kantoTwo, kantoThree],
  },
  {
    name: "Johto",
    limit: 100,
    offset: 151,
    generationsImages: [johtoOne, johtoTwo, johtoThree],
  },
  {
    name: "Hoenn",
    limit: 135,
    offset: 251,
    generationsImages: [hoennOne, hoennTwo, hoennThree],
  },
  {
    name: "Sinnoh",
    limit: 108,
    offset: 386,
    generationsImages: [sinnohOne, sinnohTwo, sinnohThree],
  },
  {
    name: "Unova",
    limit: 155,
    offset: 494,
    generationsImages: [unovaOne, unovaTwo, unovaThree],
  },
  {
    name: "Kalos",
    limit: 72,
    offset: 649,
    generationsImages: [kalosOne, kalosTwo, kalosThree],
  },
  {
    name: "Alola",
    limit: 88,
    offset: 721,
    generationsImages: [alolaOne, alolaTwo, alolaThree],
  },
  {
    name: "Galar",
    limit: 89,
    offset: 809,
    generationsImages: [galarOne, galarTwo, galarThree],
  },
];
export const sort = ["id", "name"];
export const types = [
  "all types",
  "grass",
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];
