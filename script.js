





const classLabelSinBG = ['col-md-3 col-xs-2 m-1 bg-opacity-75 rounded-2 border border-danger text-center']
const classLabelConBG = ['col-md-3 col-xs-2 m-1 bg-opacity-75 rounded-2 border border-danger text-center bg-danger']


// for( let i = 0; i<blockFlexLabel.length; i++)
// {
//     const input = blockFlexLabel[i].children[0];
    
//     const container = document.querySelector('.block-flex');
//     const title = document.querySelector('.block-flex__title');


//     input.addEventListener('click', ()=>{

//         for(let j = 0; j<blockFlexLabel.length; j++)
//         {
//             blockFlexLabel[j].classList = classLabelSinBG;
//         }

//         switch( input.id )
//         {
//             case 'flex':
//                 {
//                     container.classList = ['block-flex d-flex'];
//                     title.innerHTML="display: flex;"
//                     input.parentNode.classList = classLabelConBG;
//                     break;               
//                 }

//             case 'block':
//                 {
//                     container.classList = ['block-flex d-block'];
//                     title.innerHTML="display: block;"
//                     input.parentNode.classList = classLabelConBG;
//                     break;
//                 }
//         }
//     })
// }




const cambiarClasesDelEjemplo = ( labelsContainer, container, title ) => 
{

    const labels = labelsContainer.children;

    for( let i = 0; i<labels.length; i++)
    {
        const input = labels[i].children[0];



        input.addEventListener('click', ()=>{
    
            for(let j = 0; j<labels.length; j++)
            {
                labels[j].classList = classLabelSinBG;
            }
    
            switch( input.id )
            {
                //DISPLAY
                case 'flex':
                {
                    container.classList = ['block-flex d-flex'];
                    title.innerHTML="display: flex;"
                    input.parentNode.classList = classLabelConBG;
                    break;               
                }
    
                case 'block':
                {
                    container.classList = ['block-flex d-block'];
                    title.innerHTML="display: block;"
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //FLEX DIRECTION
                case 'row':
                {
                    container.classList = ['block-flex d-flex fd-row'];
                    title.innerHTML="display: flex; <br> flex-direction: row";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'column':
                {
                    container.classList = ['block-flex d-flex fd-column'];
                    title.innerHTML="display: flex; <br> flex-direction: column";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'row-reverse':
                {
                    container.classList = ['block-flex d-flex fd-row-reverse'];
                    title.innerHTML="display: flex; <br> flex-direction: row-reverse";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'column-reverse':
                {
                    container.classList = ['block-flex d-flex fd-column-reverse'];
                    title.innerHTML="display: flex; <br> flex-direction: column-reverse";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //JUSTIFY CONTENT
                case 'jc-flex-start':
                {
                    container.classList = ['block-flex d-flex jc-flex-start'];
                    title.innerHTML="display: flex; <br> justify-content: flex-start";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-center':
                {
                    container.classList = ['block-flex d-flex jc-center'];
                    title.innerHTML="display: flex; <br> justify-content: center";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-flex-end':
                {
                    container.classList = ['block-flex d-flex jc-flex-end'];
                    title.innerHTML="display: flex; <br> justify-content: flex-end";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-space-between':
                {
                    container.classList = ['block-flex d-flex jc-space-between'];
                    title.innerHTML="display: flex; <br> justify-content: space-between";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-space-around':
                {
                    container.classList = ['block-flex d-flex jc-space-around'];
                    title.innerHTML="display: flex; <br> justify-content: space-around";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-space-evenly':
                {
                    container.classList = ['block-flex d-flex jc-space-evenly'];
                    title.innerHTML="display: flex; <br> justify-content: space-evenly";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-flex-end':
                {
                    container.classList = ['block-flex d-flex jc-flex-end'];
                    title.innerHTML="display: flex; <br> justify-content: flex-end";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //ALIGN ITEMS
                case 'ai-stretch':
                {
                    container.classList = ['ai block-flex d-flex ai-stretch'];
                    title.innerHTML="display: flex; <br> align-items: stretch";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-flex-start':
                {
                    container.classList = ['ai block-flex d-flex ai-flex-start'];
                    title.innerHTML="display: flex; <br> align-items: flex-start";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-center':
                {
                    container.classList = ['ai block-flex d-flex ai-center'];
                    title.innerHTML="display: flex; <br> align-items: center";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-flex-end':
                {
                    container.classList = ['ai block-flex d-flex ai-flex-end'];
                    title.innerHTML="display: flex; <br> align-items: flex-end";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-baseline':
                {
                    container.classList = ['ai block-flex d-flex ai-baseline'];
                    title.innerHTML="display: flex; <br> align-items: baseline";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //FLEX WRAP
                case 'fw-nowrap':
                {
                    container.classList = ['block-flex d-flex fw-nowrap'];
                    title.innerHTML="display: flex; <br> flex-wrap: nowrap";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'fw-wrap':
                {
                    container.classList = ['block-flex d-flex fw-wrap'];
                    title.innerHTML="display: flex; <br> flex-wrap: wrap";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'fw-wrap-reverse':
                {
                    container.classList = ['block-flex d-flex fw-wrap-reverse'];
                    title.innerHTML="display: flex; <br> flex-wrap: wrap-reverse";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                
            }
        })
    }
}


const blockFlex = document.querySelectorAll('.block-flex__labels');
const container = document.querySelectorAll('.block-flex');
const title = document.querySelectorAll('.block-flex__title');


for( let i = 0; i<blockFlex.length; i++)
{
    cambiarClasesDelEjemplo( blockFlex[i], container[i], title[i] );
}
