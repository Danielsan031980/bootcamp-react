import React from 'react';
import '../App.css';


const Boxes = (props) => {
    console.log(props.cajas);
    return (
        
        <div className = "conteiner_boxes">
            {
                props.cajas?
                props.cajas.map((item, i) => (

                       <div key = { i }  className = "boxes"style={{ backgroundColor: props.cajas[i].color, width: props.cajas[i].ancho + "px", height: props.cajas[i].largo + "px" }}> </div>   
                ))
                :
                ""
            } 

        </div>            

    );
}

export default Boxes;
