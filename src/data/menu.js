// Import all images
import ipaArtesanalImage from '../assets/images/ipa-artesanal.webp';
import cafeStoutImage from '../assets/images/cafe-stout.webp';
import mojitoImage from '../assets/images/mojito.webp';
import negroniImage from '../assets/images/negroni.webp';
import malbecReservaImage from '../assets/images/malbec-reserva.webp';
import sauvignonBlancImage from '../assets/images/sauvignon-blanc.webp';
import blondeAleImage from '../assets/images/blonde-ale.webp';
import paraguayanAleImage from '../assets/images/paraguayan-ale.webp';
import patagoniaAmberLagerImage from '../assets/images/patagonia-amber-lager.webp';
import sajoniaLagerImage from '../assets/images/sajonia-lager.webp';
import sajoniaPaleAleImage from '../assets/images/sajonia-pale-ale.webp';
import wigramHoneyAleImage from '../assets/images/wigram-honey-ale.webp';
import cosmopolitanImage from '../assets/images/cosmopolitan.webp';
import daiquiriImage from '../assets/images/daiquiri-clasico.webp';
import manhattanImage from '../assets/images/manhattan.webp';
import margaritaImage from '../assets/images/margarita.webp';
import oldFashionedImage from '../assets/images/old-fashioned.webp';
import pinaColadaImage from '../assets/images/pina-colada.webp';


// Function to get imported images
const getImage = (imageName) => {
  const images = {
    'ipa-artesanal': ipaArtesanalImage,
    'cafe-stout': cafeStoutImage,
    'mojito': mojitoImage,
    'negroni': negroniImage,
    'malbec-reserva': malbecReservaImage,
    'sauvignon-blanc': sauvignonBlancImage,
    'blonde-ale': blondeAleImage,
    'paraguayan-ale': paraguayanAleImage,
    'patagonia-amber-lager': patagoniaAmberLagerImage,
    'sajonia-lager': sajoniaLagerImage,
    'sajonia-pale-ale': sajoniaPaleAleImage,
    'wigram-honey-ale': wigramHoneyAleImage,
    'cosmopolitan': cosmopolitanImage,
    'daiquiri-clasico': daiquiriImage,
    'manhattan': manhattanImage,
    'margarita': margaritaImage,
    'old-fashioned': oldFashionedImage,
    'pina-colada': pinaColadaImage
  };

  return images[imageName] || blondeAleImage; // fallback to blonde-ale if not found
};



export const menuData = [
    {
      category: "Cervezas",
      items: [
        {
          name: "IPA Artesanal",
          description: "Cerveza de lúpulo intenso con notas cítricas y florales.",
          price: "₲ 25.000",
          image: getImage('ipa-artesanal'),
        },
        {
          name: "Stout de Café",
          description: "Cerveza negra robusta con un toque de café tostado.",
          price: "₲ 28.000",
          image: getImage('cafe-stout'),
        },
        {
          name: "Sajonia Pale Ale",
          description: "Dorada, ligera y refrescante, con final balanceado.",
          price: "₲ 14.500",
          image: getImage('sajonia-pale-ale'),
        },
        {
          name: "Sajonia Lager",
          description: "Lager artesanal liviana, pensada para el día a día.",
          price: "₲ 13.500",
          image: getImage('sajonia-lager'),
        },
        {
          name: "Herken Paraguayan Ale",
          description: "Con mandioca y hierbas locales; fresca, ligera y distinta.",
          price: "₲ 36.000",
          image: getImage('paraguayan-ale'),
        },
        {
          name: "Boqueron Blonde Ale",
          description: "Suave, con notas maltosas y muy fácil de beber.",
          price: "₲ 25.000",
          image: getImage('blonde-ale'),
        },
        {
          name: "Patagonia Amber Lager",
          description: "Color ámbar, con toques acaramelados y amargor leve.",
          price: "₲ 15.000",
          image: getImage('patagonia-amber-lager'),
        },
        {
          name: "Wigram Honey Ale",
          description: "Ale dorada con un ligero dulzor de miel natural.",
          price: "₲ 28.000",
          image: getImage('wigram-honey-ale'),
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
          image: getImage('mojito'),
        },
        {
          name: "Negroni",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 40.000",
          image: getImage('negroni'),
        },
        {
          name: "Cosmopolitan",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 37.000",
          image: getImage('cosmopolitan'),
        },
        {
          name: "Daiquiri Clásico",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 35.000",
          image: getImage('daiquiri-clasico'),
        },
        {
          name: "Manhattan",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 42.000",
          image: getImage('manhattan'),
        },
        {
          name: "Margarita",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 38.000",
          image: getImage('margarita'),
        },
        {
          name: "Old Fashioned",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 40.000",
          image: getImage('old-fashioned'),
        },
        {
          name: "Pina Colada",
          description: "Una mezcla equilibrada de Gin, Campari y Vermut Rojo.",
          price: "₲ 36.000",
          image: getImage('pina-colada'),
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
          image: getImage('malbec-reserva'),
        },
        {
          name: "Sauvignon Blanc (Copa)",
          description: "Vino blanco fresco y cítrico, ideal para una noche cálida.",
          price: "₲ 30.000",
          image: getImage('sauvignon-blanc'),
        }
      ]
    }
  ];
