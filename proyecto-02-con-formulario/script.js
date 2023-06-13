const form = document.querySelector('form');
const article = document.querySelector('#datos');


const añadirLista = ( items, contenedor ) => {

    const lista = document.createElement('ul');

    for( let item in items ) {

        const i = document.createElement('li');

        i.innerHTML=`${item}: ${items[item]}`


        lista.appendChild( i );
        
    };



    contenedor.appendChild( lista )


}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData( form );

    const Comida = formData.get('Comida');
    const Vacaciones = formData.get('Vacaciones en')
    const Shopping = formData.get('Shopping')
    const Tarde = formData.get('Pasar la tarde')

    const Nombre = formData.get('Nombre')
    const Apodo = formData.get('Apodo')
    const MJ = formData.get('MJ')


    const data = { 
        Comida,
        Vacaciones,
        Shopping,
        Tarde,
        Nombre,
        Apodo,
        MJ
    }


    añadirLista( data, article );

})


