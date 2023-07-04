





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

    const labels = labelsContainer.querySelectorAll('label');

    let display = 'd-flex'; 
    let flexDirection = 'fd-row'; 
    let justifyContent = 'jc-flex-start';
    let alignItems = 'ai-stretch';
    let flexWrap = 'fw-nowrap'; 

    let displayTitle = 'display: flex;'; 
    let flexDirectionTitle = ''; 
    let justifyContentTitle = '';
    let alignItemsTitle = '';
    let flexWrapTitle = ''; 


    for( let i = 0; i<labels.length; i++)
    {
        const input = labels[i].children[0];

        input.addEventListener('click', ()=>{
    
    
            switch( input.id )
            {
                //DISPLAY
                case 'flex':
                {
                    display = ' d-flex';
                    displayTitle="display: flex;"
                    input.parentNode.classList = classLabelConBG;
                    break;               
                }
    
                case 'block':
                {
                    display = ' d-block';
                    displayTitle="display: block;"
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //FLEX DIRECTION
                case 'row':
                {
                    flexDirection = ' fd-row';
                    flexDirectionTitle="<br> flex-direction: row";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'column':
                {
                    flexDirection = ' fd-column';
                    flexDirectionTitle="<br> flex-direction: column";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'row-reverse':
                {
                    flexDirection = ' fd-row-reverse';
                    flexDirectionTitle="<br> flex-direction: row-reverse";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'column-reverse':
                {
                    flexDirection = ' fd-column-reverse';
                    flexDirectionTitle="<br> flex-direction: column-reverse";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //JUSTIFY CONTENT
                case 'jc-flex-start':
                {
                    justifyContent = ' jc-flex-start';
                    justifyContentTitle="<br> justify-content: flex-start";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-center':
                {
                    justifyContent = ' jc-center';
                    justifyContentTitle="<br> justify-content: center";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-flex-end':
                {
                    justifyContent = ' jc-flex-end';
                    justifyContentTitle="<br> justify-content: flex-end";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-space-between':
                {
                    justifyContent = ' jc-space-between';
                    justifyContentTitle="<br> justify-content: space-between";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-space-around':
                {
                    justifyContent = ' jc-space-around';
                    justifyContentTitleL="<br> justify-content: space-around";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-space-evenly':
                {
                    justifyContent = ' jc-space-evenly';
                    justifyContentTitle="<br> justify-content: space-evenly";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'jc-flex-end':
                {
                    justifyContent = ' jc-flex-end';
                    justifyContentTitle="<br> justify-content: flex-end";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                //ALIGN ITEMS
                case 'ai-stretch':
                {
                    alignItems = ' ai ai-stretch';
                    alignItemsTitle="<br> align-items: stretch";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-flex-start':
                {
                    alignItems = ' ai ai-flex-start';
                    alignItemsTitle="<br> align-items: flex-start";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-center':
                {
                    alignItems = ' ai ai-center';
                    alignItemsTitle="<br> align-items: center";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-flex-end':
                {
                    alignItems = ' ai ai-flex-end';
                    alignItemsTitle="<br> align-items: flex-end";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
                case 'ai-baseline':
                {
                    alignItems = ' ai ai-baseline';
                    alignItemsTitle="<br> align-items: baseline";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'fw-nowrap':
                {
                    flexWrap = ' fw-nowrap';
                    flexWrapTitle="<br> flex-wrap: nowrap";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'fw-wrap':
                {
                    flexWrap = ' fw-wrap';
                    flexWrapTitle="<br> flex-wrap: wrap";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }

                case 'fw-wrap-reverse':
                {
                    flexWrap = ' fw-wrap-reverse';
                    flexWrapTitle="<br> flex-wrap: wrap-reverse";
                    input.parentNode.classList = classLabelConBG;
                    break;
                }
            }

            container.classList = [`block-flex ${display} ${flexDirection} ${ flexWrap } ${justifyContent} ${alignItems}`];
            title.innerHTML = [ `${ displayTitle } ${flexDirectionTitle} ${ flexWrapTitle } ${justifyContentTitle} ${alignItemsTitle}` ]

            
            for(let j = 0; j<labels.length; j++)
            {
            const labelInput = labels[j].childNodes[1]
            if( labelInput.checked)
            {
                labels[j].classList = classLabelConBG;
                console.log(labels[j]);
            }else{
                labels[j].classList = classLabelSinBG;
            }

                console.log();
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
