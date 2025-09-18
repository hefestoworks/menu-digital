import ipaImg from "../assets/images/ipa.webp";
import stoutImg from "../assets/images/cafe-stout.webp";
import mojitoImg from "../assets/images/mojito.webp";
import negroniImg from "../assets/images/negroni.webp";
import malbecImg from "../assets/images/malbec-reserva.webp";
import sauvignonImg from "../assets/images/sauvignon-blanc.webp";



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