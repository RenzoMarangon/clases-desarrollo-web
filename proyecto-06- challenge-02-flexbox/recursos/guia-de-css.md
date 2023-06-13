<!-- Colores -->

#001833 -- Color de fondo

#132740 -- Color de card

#0CF5F0 -- Color ETH

#8CA4C8 -- Color Days left

#fff -- Color titulo y creador

#5F728E -- Color de letras en general


<!-- Propidades CARD -->

Alto -> 550px
Ancho -> 350px
Color de fondo -> #132740
padding -> 25px
border radius -> 15px


Sombras (copiar y pegar dentro de CARD)

box-shadow: 10px 9px 16px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 9px 16px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 9px 16px -6px rgba(0,0,0,0.75);


<!-- Propiedades CARD__IMAGE -->
alto -> 50%
border radius -> 10px
f

<!-- Propiedades CARD__CONTAINER__ETH y CARD__CONTAINER__DAYS -->
font-weight: bold;   (copiar y pegar) (cambia la letra a negrita)

color de letra -> #0CF5F0
ancho -> 35%



<!-- Propiedades CARD__LINE -->
border-color: #97969636;   (copiar y pegar) (cambia el color del borde)


<!-- Propiedades CARD__CONTAINER__AVATAR -->
ancho -> 10%

<!-- B -->
color de letra -> #fff


<!-- Cambiar el tipo de fuente -->
(Copiar y pegar al principio de mi archivo .css)

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

(Copiar y pegar en el contenedor donde quiero poner la letra)

font-family: 'Outfit', sans-serif;


<!-- Propiedades que vamos a usar -->

display: flex;
align-items: ... ;
justify-content: ... ;

width: ... ;
height: ... ;

color: ... ;
background-color: ... ;

border-radius: ... ;
padding: ... ;

font-weight: ... ;
font-family: ... ;

box-shadow: ... ;
<!-- Clases que vamos a usar -->

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #001833 ;
    font-family: 'Outfit', sans-serif;
}


main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}


.card{
}

.card__image{
}

.card__container{
}

.card__container__eth{
}

.card__container__days{
}

.card__line{
}

.card__creator{
}

.card__creator__avatar{
}

b{
}


