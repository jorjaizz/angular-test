# dptienda

**dptienda** es una tienda de videojuegos hecha con Angular. Tiene un estilo sencillo: fondo oscuro con detalles en rojo, pensado para que se vea moderna y sin sobrecargar. La página está organizada en una sola vista que une el catálogo de juegos con un apartado sobre quiénes somos.

## Componentes

La aplicación se compone de tres partes principales:

### App (el componente general)

Es el esqueleto de toda la página. Se encarga de montar el resto y darle estructura: arriba tiene el **header** con el logo de dptienda y el menú que te lleva a las secciones, en medio el hero de bienvenida y por debajo el **footer** con los enlaces y el copyright. Es, en resumen, el lugar que une las dos secciones que vienen a continuación.

### Products

Es la sección "Tienda", donde se muestra el catálogo. Contiene una cuadrícula de tarjetas con los cuatro videojuegos disponibles: The Legend of Zelda: Breath of the Wild, Metroid Prime, No More Heroes y Red Dead Redemption. Cada tarjeta muestra la carátula del juego, su plataforma, una descripción breve, el precio y un botón para añadirlo.

### About

Es la sección "Nosotros". Aquí se cuenta la historia de la tienda: cómo nació, su filosofía de seleccionar juegos con cariño y los valores con los que trabaja.
