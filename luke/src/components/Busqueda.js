import React, {useState, useEffect} from 'react';
import { simpleGet } from '../actions/simpleGet';

const Busqueda = (props) => {

    const [categorias, setCategorias] = useState({})

    const showlist =(target) => {
        props.setCategoria(target.value);
        
        // console.log(Object.key(categorias).filter((valor,index)=>{
        //     if(index === e.target.value){
        //         return valor 
        //     }
           
        // }
        // )
        
    }

    useEffect( async () => {
        const response = await simpleGet("https://swapi.dev/api/")
        setCategorias(response)
    }, [categorias]);

    return (
        <div>
            
            <select name="select" onChange={(e)=>showlist(e.target)} >
                {                 
                    Object.entries(categorias)?.map((valor, index) =>  <option value={valor[1]} key={index}   >{valor[0]}</option>)
                } 
            </select>
        </div>
    );
}

export default Busqueda;