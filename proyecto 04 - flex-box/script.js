const blockFlex = document.querySelector('.block-flex__label');
const blockFlexChild = blockFlex.children;

const classLabelSinBG = ['col-md-3 col-xs-2 m-1 bg-opacity-75 rounded-2 border border-danger text-center']
const classLabelConBG = ['col-md-3 col-xs-2 m-1 bg-opacity-75 rounded-2 border border-danger text-center bg-danger']


for( let i = 0; i<blockFlexChild.length; i++)
{
    const input = blockFlexChild[i].children[0];
    
    const container = document.querySelector('.block-flex');
    const title = document.querySelector('.block-flex__title');


    input.addEventListener('click', ()=>{

        for(let j = 0; j<blockFlexChild.length; j++)
        {
            blockFlexChild[j].classList = classLabelSinBG;
        }

        switch( input.id )
        {
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
        }


        
    })

    

    
}


