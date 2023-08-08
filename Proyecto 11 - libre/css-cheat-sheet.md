<!-- COPIAR Y PEGAR -->

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body
{
    /* ACA PONER EL BACKGROUND-COLOR DEL SITIO WEB */
    width:80%;
    margin:auto;
}

<!-- CSS CHEAT SHEET  -->

<!-- Margin -->
margin: px;

margin-top: px;
margin-bottom: px;
margin-right: px;
margin-left: px;

<!-- Padding -->
padding: px;

padding-top: px;
padding-bottom: px;
padding-right: px;
padding-left: px;

<!-- Background -->
background-color: ;

<!-- Imagenes de fondo -->
background-image: url('./images/...');
background-size:contain;
background-repeat: no-repeat;

<!-- Letras -->
color: ;
font-size: px;
font-weight: bold;
text-decoration: none; <!-- para borrar la raya de los links -->

<!-- Bordes -->
border-radius: px;
border: 1px solid black;
<!--  Tamaño estilo color  -->


<!-- Flexbox -->

display:flex;

flex-direction:;

align-items:;
justify-content:;

flex-wrap:;
order:1;

<!-- Grid -->

display:grid;

align-content:;
justify-items:;

grid-template-columns: repeat( px , 1fr);
grid-template-rows: repeat( px , 1fr);

<!-- columnas que se ajustan al tamaño de la pantalla (responsive) -->
grid-template-columns: repeat(auto-fit, minmax( px, 1fr));

<!-- separar filas y columnas -->
row-gap: px;
column-gap: px;
grid-gap: px;


<!-- Como hacer animaciones -->

<!-- EJEMPLO DE HTML -->

<article class="card">
</article>

<!-- EJEMPLO DE CSS -->
.card{
    transition: all ease-in-out .3s;
}

.card:hover{
    transform: scale(1.1);
}


<!-- HTML CHEAT SHEET -->

<header></header>
<main></main>
<footer></footer>

<nav></nav>
<aside></aside>
<div></div>

<a href="http://" target="_blank"></a>
<img src="./..." alt="Descripcion de la imagen">


<!-- Inputs -->
<input type="button" value="Enviar">
<input type="date" name="" id="">
<input type="email" name="" id="">
<input type="password" name="" id="">
<input type="text" name="" id="">
<input type="tel" name="" id="">
<input type="reset" value="">
<input type="range" name="" id="">
<input type="radio" name="" id="">


<!-- Listas -->
<ul>
    <li>Asd</li>
    <li>Asd</li>
    <li>Asd</li>
</ul>

<ol>
    <li>Asd</li>
    <li>Asd</li>
    <li>Asd</li>
</ol>

<hr> <!-- linea -->

<b></b> <!--  Negrita -->

<p></p>
<h1></h1>
<!-- h1 hasta h6 -->
<h6></h6>