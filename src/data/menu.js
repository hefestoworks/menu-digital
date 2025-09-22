import ipaImg from "../assets/images/ipa.webp";
import stoutImg from "../assets/images/cafe-stout.webp";
import mojitoImg from "../assets/images/mojito.webp";
import negroniImg from "../assets/images/negroni.webp";
import malbecImg from "../assets/images/malbec-reserva.webp";
import sauvignonImg from "../assets/images/sauvignon-blanc.webp";
import blondeAleImg from "../assets/images/blonde-ale.jpg";
import herkenAleImg from "../assets/images/herken-paraguaya-ale.jpg";
import patagoniaAmberImg from "../assets/images/patagonia-amber-lager.jpg";
import sajoniaLagerImg from "../assets/images/sajonia-lager.webp";
import sajoniaPaleImg from "../assets/images/sajonia-pale-ale.webp";
import wigramHoneyImg from "../assets/images/wigram-honey-ale.avif";



export const menuData = [
    {
      category: "Cervezas",
      items: [
        {
          name: "IPA Artesanal",
          description: "Cerveza de lúpulo intenso con notas cítricas y florales.",
          price: "₲ 25.000",
          image: ipaImg,
        },
        {
          name: "Stout de Café",
          description: "Cerveza negra robusta con un toque de café tostado.",
          price: "₲ 28.000",
          image: stoutImg,
        },
        {
          name: "Sajonia Pale Ale",
          description: "Dorada, ligera y refrescante, con final balanceado.",
          price: "₲ 14.500",
          image: sajoniaPaleImg,
        },
        {
          name: "Sajonia Lager",
          description: "Lager artesanal liviana, pensada para el día a día.",
          price: "₲ 13.500",
          image: sajoniaLagerImg,
        },
        {
          name: "Herken Paraguayan Ale",
          description: "Con mandioca y hierbas locales; fresca, ligera y distinta.",
          price: "₲ 36.000",
          image: herkenAleImg,
        },
        {
          name: "Boqueron Blonde Ale",
          description: "Suave, con notas maltosas y muy fácil de beber.",
          price: "₲ 25.000",
          image: blondeAleImg,
        },
        {
          name: "Patagonia Amber Lager",
          description: "Color ámbar, con toques acaramelados y amargor leve.",
          price: "₲ 15.000",
          image: patagoniaAmberImg,
        },
        {
          name: "Wigram Honey Ale",
          description: "Ale dorada con un ligero dulzor de miel natural.",
          price: "₲ 28.000",
          image: wigramHoneyImg,
        }
      ]
    },
    {
      category: "Cócteles Clásicos",
      items: [
        {
          name: "Mojito",
          description: "Ron, menta fresca, lima, azúcar y un toque de soda.",
          price: "₲ 35.000",
          image: mojitoImg,
        },
        {
          name: "Negroni",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 40.000",
          image: negroniImg,
        }
      ]
    },
    {
      category: "Vinos",
      items: [
        {
          name: "Malbec Reserva (Copa)",
          description: "Vino tinto con cuerpo, notas de ciruela y roble.",
          price: "₲ 30.000",
          image: malbecImg,
        },
        {
          name: "Sauvignon Blanc (Copa)",
          description: "Vino blanco fresco y cítrico, ideal para una noche cálida.",
          price: "₲ 30.000",
          image: sauvignonImg,
        
        }
      ]
    }
  ];