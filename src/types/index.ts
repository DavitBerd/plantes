import mercuryMain from "../imgs/mercury/1.png";
import mercuryInternal from "../imgs/mercury/Guts.png";
import mercurySurface from "../imgs/mercury/Bitmap.png";
import venusMain from "../imgs/venus/2.png";
import venusInternal from "../imgs/venus/Guts(1).png";
import venusSurface from "../imgs/venus/Bitmap(1).png";
import earthMain from "../imgs/earth/3.png";
import earthInternal from "../imgs/earth/Guts Copy 2.png";
import earthSurface from "../imgs/earth/Bitmap(2).png";
import marsMain from "../imgs/mars/4.png";
import marsInternal from "../imgs/mars/Guts Copy 2(1).png";
import marsSurface from "../imgs/mars/Bitmap(3).png";
import jupiterMain from "../imgs/jupiter/5.png";
import jupiterInternal from "../imgs/jupiter/Guts Copy.png";
import jupiterSurface from "../imgs/jupiter/Bitmap(4).png";
import saturnMain from "../imgs/saturn/6.svg";
import saturnInternal from "../imgs/saturn/Guts Copy(1).png";
import saturnSurface from "../imgs/saturn/Bitmap(5).png";
import uranusMain from "../imgs/uranus/7.png";
import uranusInternal from "../imgs/uranus/Guts Copy(2).png";
import uranusSurface from "../imgs/uranus/Bitmap(6).png";
import neptuneMain from "../imgs/neptune/8.png";
import neptuneInternal from "../imgs/neptune/Guts Copy(3).png";
import neptuneSurface from "../imgs/neptune/Bitmap(7).png";
export type Planet = {
  PlanetName: string;
  PlanetDescription: string;
  source: string;
  PlanetCharacteristics: Characteristics;
  image: Image;
  color: string; // Новое поле для цвета
};

type Image = {
  hoverImg: string;
  mainImg: string;
  thingyImg: string;
};

type Characteristics = {
  rotation: string;
  revolution: string;
  radious: string;
  avrgtemp: string;
};

// Пример для всех планет с цветами
export const planets: Planet[] = [
  {
    PlanetName: "Mercury",
    PlanetDescription:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    PlanetCharacteristics: {
      rotation: "58.6 days",
      revolution: "88 days",
      radious: "2,439.7 km",
      avrgtemp: "167°C",
    },
    image: {
      mainImg: mercuryMain,
      hoverImg: mercuryInternal,
      thingyImg: mercurySurface,
    },
    color: "rgba(65, 158, 187, 1)",
  },
  {
    PlanetName: "Venus",
    PlanetDescription:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    source: "https://en.wikipedia.org/wiki/Venus",
    PlanetCharacteristics: {
      rotation: "243 days",
      revolution: "225 days",
      radious: "6,051.8 km",
      avrgtemp: "464°C",
    },
    image: {
      mainImg: venusMain,
      hoverImg: venusInternal,
      thingyImg: venusSurface,
    },
    color: "rgba(237, 162, 73, 1)",
  },
  {
    PlanetName: "Earth",
    PlanetDescription:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    source:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    PlanetCharacteristics: {
      rotation: "23.9 hours",
      revolution: "365.25 days",
      radious: "6,371 km",
      avrgtemp: "15°C",
    },
    image: {
      mainImg: earthMain,
      hoverImg: earthInternal,
      thingyImg: earthSurface,
    },
    color: "rgba(109, 46, 213, 1)",
  },
  {
    PlanetName: "Mars",
    PlanetDescription:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
    source: "https://en.wikipedia.org/wiki/Mars",
    PlanetCharacteristics: {
      rotation: "1.03 days",
      revolution: "1.88 years",
      radious: "3,389.5 km",
      avrgtemp: "-28°C",
    },
    image: {
      mainImg: marsMain,
      hoverImg: marsInternal,
      thingyImg: marsSurface,
    },
    color: "rgba(209, 76, 50, 1)",
  },
  {
    PlanetName: "Jupiter",
    PlanetDescription:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    source: "https://en.wikipedia.org/wiki/Jupiter",
    PlanetCharacteristics: {
      rotation: "9.9 hours",
      revolution: "11.86 years",
      radious: "69,911 km",
      avrgtemp: "-110°C",
    },
    image: {
      mainImg: jupiterMain,
      hoverImg: jupiterInternal,
      thingyImg: jupiterSurface,
    },
    color: " rgba(216, 58, 52, 1)",
  },
  {
    PlanetName: "Saturn",
    PlanetDescription:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    source: "https://en.wikipedia.org/wiki/Saturn",
    PlanetCharacteristics: {
      rotation: "10.7 hours",
      revolution: "29.46 years",
      radious: "58,232 km",
      avrgtemp: "-140°C",
    },
    image: {
      mainImg: saturnMain,
      hoverImg: saturnInternal,
      thingyImg: saturnSurface,
    },
    color: "rgba(205, 81, 32, 1)",
  },
  {
    PlanetName: "Uranus",
    PlanetDescription:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    source: "https://en.wikipedia.org/wiki/Uranus",
    PlanetCharacteristics: {
      rotation: "17.2 hours",
      revolution: "84 years",
      radious: "25,362 km",
      avrgtemp: "-195°C",
    },
    image: {
      mainImg: uranusMain,
      hoverImg: uranusInternal,
      thingyImg: uranusSurface,
    },
    color: " rgba(30, 193, 162, 1)",
  },
  {
    PlanetName: "Neptune",
    PlanetDescription:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    source: "https://en.wikipedia.org/wiki/Neptune",
    PlanetCharacteristics: {
      rotation: "16.1 hours",
      revolution: "164.8 years",
      radious: "24,622 km",
      avrgtemp: "-200°C",
    },
    image: {
      mainImg: neptuneMain,
      hoverImg: neptuneInternal,
      thingyImg: neptuneSurface,
    },
    color: "rgba(45, 104, 240, 1)", // Цвет для Нептуна
  },
];
