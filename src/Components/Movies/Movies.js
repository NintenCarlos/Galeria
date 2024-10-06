import React from "react";
import { Card, Container } from "react-bootstrap";

export const Movies = () => {
  const movies = [
    {
      id: 1,
      name: "El Gran Showman",
      description:
        "Celebra el nacimiento del mundo del espectáculo y cuenta la historia de un visionario que surgió de la nada para crear un espectáculo que se convirtió en una sensación mundial.",
      url: "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg",
    },
    {
      id: 2,
      name: "El Velocipastor",
      description:
        "Después de perder a sus padres, un sacerdote viaja a China, donde hereda una misteriosa habilidad que le permite convertirse en dinosaurio. Al principio, horrorizado por el poder, una prostituta lo convence para combatir el crimen.",
      url: "https://pics.filmaffinity.com/The_VelociPastor-884723176-large.jpg",
    },
    {
        id: 3,
        name: 'WALL·E',
        description: 'En un futuro lejano, un pequeño robot recolector de residuos se embarca inadvertidamente en un viaje espacial que decidirá en última instancia el destino de la humanidad.',
        url: 'https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg'
    },
    {
      id: 4,
      name: "La La Land",
      description:
        "Mientras se ocupan de sus carreras en Los Ángeles, un pianista y una actriz se enamoran e intentan conciliar su relación con sus aspiraciones de futuro.",
      url: "https://musicart.xboxlive.com/7/fa0e4000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    },
    {
      id: 5,
      name: "La vida es bella",
      description:
        "Cuando un bibliotecario judío y su hijo se convierten en víctimas del Holocausto, él usará una perfecta mezcla de voluntad, humor e imaginación para proteger a su hijo de los peligros en el campo de concentración.",
      url: "https://pics.filmaffinity.com/La_vida_es_bella-646167341-large.jpg",
    },
    {
      id: 6,
      name: "Iron Man",
      description:
        "Tras de estar cautivo en una cueva afgana, el multimillonario ingeniero Tony Stark crea una armadura única para luchar contra el mal.",
      url: "https://es.web.img3.acsta.net/medias/nmedia/18/66/64/01/20168724.jpg",
    },
    {
      id: 7,
      name: "El Chanfle",
      description:
        "La vida de un aguador sin talento, pero extremadamente amable, que trabaja para un equipo de fútbol mexicano, y cómo su vida cambió inesperadamente cuando su esposa quedó embarazada.",
      url: "https://m.media-amazon.com/images/I/81Qi8aGwzoL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 8,
      name: "El Silencio de los Inocentes.",
      description:
        "Una joven cadete del FBI busca la ayuda de un asesino caníbal y manipulador encarcelado con el fin de atrapar a otro asesino en serie, un loco que despelleja a sus víctimas.",
      url: "https://www.arte.unicen.edu.ar/cdab/wp-content/uploads/2019/05/el-silencio-de-los-inocentes.jpg",
    },
    {
      id: 9,
      name: "Ratatouille",
      description:
        "Una rata que sabe cocinar establece una inusual alianza con un joven trabajador de la cocina de un famoso restaurante de París.",
      url: "https://pics.filmaffinity.com/ratatouille-519659509-large.jpg",
    },
    {
      id: 10,
      name: "The Imitation Game",
      description:
        "Durante la Segunda Guerra Mundial, el genio matemático inglés Alan Turing intenta descifrar el código alemán Enigma con la ayuda de su equipo.",
      url: "https://mx.web.img3.acsta.net/pictures/18/10/12/02/49/4406206.jpg",
    },
    {
      id: 11,
      name: "Paddington en Perú",
      description:
        "Paddington y la familia Brown visitan a la tía Lucy en Perú, pero un misterio los envía a la selva amazónica y a las montañas peruanas.",
      url: "https://pics.filmaffinity.com/paddington_in_peru-710590738-large.jpg",
    },
    {
      id: 12,
      name: "Joker",
      description:
        "En Gotham, Arthur Fleck, un comediante con problemas de salud mental, es marginado y maltratado por la sociedad. Se adentra en una espiral de crimen que resulta revolucionaria. Pronto conoce a su alter-ego, el Joker.",
      url: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 13,
      name: "La hacienda del terror",
      description:
        "Cuenta la historia de un grupo de amigos que se queda atrapado en una hacienda aislada, donde comienzan a experimentar fenómenos paranormales y son acechados por fuerzas malignas.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkdE6z1CptGeyydGEMx1eZjvaeGcy0o6gfg&s",
    },
    {
      id: 14,
      name: "Memento",
      description:
        "Un hombre con pérdida de memoria a corto plazo intenta encontrar al asesino de su esposa.",
      url: "https://pics.filmaffinity.com/Memento-523889784-large.jpg",
    },
    {
      id: 15,
      name: "Emos vs Darketos",
      description:
        'Cuando se descubre el cadáver de un miembro de una pandilla emo, comienza una guerra territorial entre los "emos" y los "darketos" en las calles de México.',
      url: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2008/1/w1280/r1hIMzk8tMDucgRe0p9JJPchTHE.jpg",
    },
    {
      id: 16,
      name: "El show de Truman",
      description:
        "Truman Burbank es un hombre normal. Lo que no sabe es que desde antes de nacer es el protagonista del mayor reality show mundial.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TRXQMoLpYoWxcnp8Q1W-x--KH-lzadD6LA&s",
    },
    {
      id: 17,
      name: "Historia de un matrimonio",
      description:
        "Un director de teatro y su mujer actriz lidian con su crudo divorcio desde ambas costas del país, explorando extremos tanto personales como profesionales.",
      url: "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2019/9/w1280/opePIU8Qt1jayldYY3GzuxqSy2J.jpg",
    },
    {
      id: 18,
      name: "La Ballena",
      description:
        "Un solitario profesor de inglés que vive con obesidad severa intenta reconectarse con su distanciada hija adolescente para tener una última oportunidad de redención.",
      url: "https://pics.filmaffinity.com/the_whale-293958603-mmed.jpg",
    },
    {
      id: 19,
      name: "Cañitas",
      description:
        "Una película basada en un caso real ocurrido en la Ciudad de México, en el que un grupo de amigos experimenta posesión demoníaca luego de usar una Ouija para tomar contacto con un espíritu.",
      url: "https://m.media-amazon.com/images/S/pv-target-images/0d8465b5166cf1671568c77346c47063878263c1b9212d7c4ed1743a29fcb96f.jpg",
    },
    {
      id: 20,
      name: "El niño con el pijama de rayas",
      description:
        "Escenario durante la Segunda Guerra Mundial, una historia vista a través de los ojos inocentes de Bruno, el hijo de ocho años del comandante en un campo de concentración alemán, cuya amistad prohibida con un niño judío al otro lado de la cerca tiene consecuencias sorprendentes e inesperadas.",
      url: "https://es.web.img3.acsta.net/medias/nmedia/18/67/06/38/20350558.jpg",
    },
    {
      id: 21,
      name: "La tumba de las luciérnagas",
      description:
        "Un chico y su hermana pequeña intentan sobrevivir en Japón durante la Segunda Guerra Mundial.",
      url: "https://pics.filmaffinity.com/La_tumba_de_las_luciaernagas-859245234-large.jpg",
    },
    {
      id: 22,
      name: "Señora Influencer",
      description:
        "Fátima se convierte en una de las influencers más famosa del momento. Cami y Sofi, unas jóvenes influencers, intentarán aprovecharse de la repentina popularidad de Fátima fingiendo ser sus amigas.",
      url: "https://static.cinepolis.com/resources/mx/movies/posters/414x603/43736-316926-20231103021832.jpg",
    },
    {
      id: 23,
      name: "Pinocho de Guillermo del Toro",
      description:
        "Una versión más oscura del clásico cuento infantil de una marioneta de madera que se transforma en un niño vivo de verdad.",
      url: "https://pics.filmaffinity.com/Pinocho_de_Guillermo_del_Toro-534628657-large.jpg",
    },
    {
      id: 24,
      name: "El pianista",
      description:
        "Un músico judío polaco lucha por sobrevivir a la destrucción del gueto de Varsovia durante la Segunda Guerra Mundial.",
      url: "https://es.web.img2.acsta.net/pictures/14/05/27/12/07/438875.jpg",
    },
    {
      id: 25,
      name: "42: La verdadera historia de una leyenda del deporte",
      description:
        "En 1947, Jackie Robinson se enfrenta al racismo resultante de convertirse en el primer afroamericano jugador de la liga profesional de béisbol al ser contratado por los Brooklyn Dodgers.",
      url: "https://pics.filmaffinity.com/42-595440843-large.jpg",
    },
    {
      id: 26,
      name: "El Infierno",
      description:
        "Historia de Benjamin Garcia el Benny que al ser deportado a Mexico regresa a su pueblo controlado por la mafia, en donde trata de salir adelante junto a su familia.",
      url: "https://reinodetodoslosdias.wordpress.com/wp-content/uploads/2010/10/infierno-para-blog-1.jpg?w=584",
    },
    {
      id: 27,
      name: "Toy Story",
      description:
        "Un vaquero de juguete se encuentra celoso y amenazado cuando un nuevo juguete, un guardián espacial, se convierte en el favorito del niño al que pertenecen.",
      url: "https://es.web.img3.acsta.net/pictures/14/03/17/10/20/509771.jpg",
    },
    {
      id: 28,
      name: "Ya no estoy aquí",
      description:
        "En las montañas de Monterrey, una pequeña banda llamada los Terkos pasa sus días escuchando cumbias lentas y yendo a fiestas. Después de un malentendido con un cártel local, su líder se ve obligado a mudarse a Nueva York.",
      url: "https://pics.filmaffinity.com/Ya_no_estoy_aquai-817047754-large.jpg",
    },
    {
      id: 29,
      name: "Mamma Mia! La película",
      description:
        "La historia de una futura novia tratando de encontrar a su verdadero padre contada a través de las exitosas canciones del popular grupo de los 70 ABBA.",
      url: "https://pics.filmaffinity.com/Mamma_Mia_La_pelaicula-326443202-large.jpg",
    },
    {
      id: 30,
      name: "Narcos gay",
      description:
        "Max y Ronny, aspirantes a narcotraficantes, se ven envueltos en un mundo peligroso, mientras que su amiga Natasha es víctima de extorsión por parte de un policía corrupto.",
      url: "https://media.themoviedb.org/t/p/w500/4L1eJXXcveaYHOlVtXrgN9WCtko.jpg",
    },
  ];

  return (
    <>
      <Container
        className="d-flex"
        style={{ flexWrap: "wrap", justifyItems: "center" }}
      >
        {movies.map((m) => (
          <Card
            className="mb-3 "
            style={{ width: "18rem", marginRight: "1rem" }}
          >
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Img className="mb-3" variant="top" src={m.url} />
              <Card.Title>
                {m.id}. {m.name}
              </Card.Title>
              <Card.Text>{m.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};
