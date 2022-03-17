import React from 'react';
import '../App.css';

const Viewelected = (props) => {
    let texto ="" 
    let classElected =""

    if(props.pestana.view1 === true){
        texto = "Esta es la pestaña 1"
        classElected = "view1"
    }
    else if(props.pestana.view2 === true){
        texto = "Esta es la pestaña 2"
        classElected = "view2"
    }
    else{
        texto = "Esta es la pestaña 3"
        classElected = "view3"
    }

    return (
        <div className="contenedorviews">

            <div className={classElected}>
            {
                texto
            }
            </div>

        </div>
    );
}

export default Viewelected;
