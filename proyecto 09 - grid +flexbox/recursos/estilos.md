<!-- PROPIEDADES DE .CARD -->

Ancho: 20vw
alto: 40vw
border radius: 20px

<!-- SI QUIERO PONERLE SOMBRAS UTILIZO:  -->
box-shadow: 3px 3px 8px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 3px 8px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 3px 8px -3px rgba(0,0,0,0.75);

<!-- PROPIEDADES DE .CARD BUTTON -->
ancho: 50%
padding: 5px
border radius: 5px
color de fondo: #0288d1

PISTA: le puedo dar 'border:none;' y 'background-color:;' para borrar el borde y darle color de fondo


<!-- COPIAR Y PEGAR A PARTIR DE * -->

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #dfe3e8;
}

main{
    width: 75%;
    height: 80vh;
    margin: auto;

    /*Utilizar grid.

    Pista: para hacer las filas y columnas utilizo: 
        grid-template-rows: repeat();
        grid-template-columns: repeat();

    Pista: para separar las filas y columnas utilizo:
    
    row-gap: numero en pixeles (px) ;    (separa filas)
    column-gap: numero en pixeles (px) ; (separa columnas)

    */
}

.card img{
    width: 50%;
    height: 50%;
    object-fit: contain;
}
