import React, {useState, useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';
import { useParams } from "react-router-dom"



const Seleccion = ({ link }) => {

    const [result, setResult] = useState(simpleGet(link))
    const { id } = useParams()

    const valores = Object.entries(result).filter((valor, index) => {
        //console.log(valor[0])
        if(valor[0] === "name") return valor;          
        if(valor[0] === "title") return valor;
        if(valor[0] === "episode_id") return valor;
        if(valor[0] === "birth_year") return valor;
        if(valor[0] === "gender") return valor;        
        if(valor[0] === "hair_color") return valor;  
        if(valor[0] === "climate") return valor;
        if(valor[0] === "created") return valor; 
        if(valor[0] === "diameter") return valor;          
        if(valor[0] === "title") return valor; 
        if(valor[0] === "opening_crawl") return valor; 
        if(valor[0] === "producer") return valor; 
        if(valor[0] === "average_height") return valor;         
        if(valor[0] === "designation") return valor;
        if(valor[0] === "vehicle_class") return valor;
        if(valor[0] === "cargo_capacity") return valor;
        if(valor[0] === "manufacturer") return valor;
        return ""
   
    })

    //console.log(valores)

    //console.log()
     //console.log(id)
    //console.log(props.elemento)


    useEffect(() => {
        async function invocar(){
             const response =  await simpleGet(link)
            //  console.log(props.link)
            if(Object.keys(response.results).length > id && id !== undefined && id > 0){
                setResult(response.results[id])
            }
            else{
                setResult("")
            }
         }
         invocar()
    }, [result, id, link]);

    return (
        <div>
            
                <ul className = "lista">
                     {
                          result? 
                          valores.map((valor, index) => <li className="elementolista" value={valor[0]} key={index}>  <div className="elemento1">{valor[0]} </div> <div>{valor[1]} </div>   </li>):
                          <div className="recuadroimagen">
                              <p> Aqui no esta lo que buscas mi querido Jedi</p>
                              <img className="image" src="https://i.blogs.es/bc2775/obiwankenobi/1366_2000.jpeg" alt="imagen obi wan"/>
                          </div>
                          
                          
                         
                    }      
                </ul>    
     
        </div>
    );
}

export default Seleccion;
