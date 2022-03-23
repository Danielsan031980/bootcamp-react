import { set } from 'lodash';
import React, {useState, useEffect} from 'react';
import { simpleGet } from '../actions/simpleGet';


const Seleccion = (props ) => {

    const [searchId, setSearchId] = useState();
    const [link, setLink] = useState();
    const [result, setResult] = useState();

    const setNumber = (target) => {
        setSearchId(target.value)
    }
    const search = async () =>{
        console.log(link)
        if(link.results[searchId].name && link.results[searchId].height && link.results[searchId].mass && link.results[searchId].hair_color){
            setResult({
                name:link.results[searchId].name,
                height:link.results[searchId].height,
                mass:link.results[searchId].mass,
                hair_color:link.results[searchId].hair_color

            })  
        }
        if(link.results[searchId].name && link.results[searchId].rotation_period && link.results[searchId].orbital_period && link.results[searchId].diameter){
            setResult({
                name:link.results[searchId].name,
                rotation_period:link.results[searchId].rotation_period,
                orbital_period:link.results[searchId].orbital_period,
                diameter:link.results[searchId].diameter
            })

        }
        if(link.results[searchId].title && link.results[searchId].episode_id && link.results[searchId].opening_crawl && link.results[searchId].director){
           setResult({
            title:link.results[searchId].title,
            episode_id: link.results[searchId].episode_id,
            opening_crawl: link.results[searchId].openin_crawl,
            director:link.results[searchId].director


           })

        }
        if(link.results[searchId].name && link.results[searchId].classification && link.results[searchId].designation && link.results[searchId].average_height){
            setResult({
                name:link.results[searchId].name,
                classification:link.results[searchId].classification,
                designation:link.results[searchId].designation,
                average_height:link.results[searchId].average_height
            })

        }

    }
    
    useEffect( async () => {
        const response = await simpleGet(props.categoria)  
        setLink(response);
    }, [searchId, link]);

    return (
        <div>
            <button onClick={search}>Traer Datos</button>
            <input type="number" onChange={(e) => setNumber(e.target )}></input>
            <ul>
                {
                     result?
                     Object.entries(result).map((valor, index) =>  <li value={valor[1]} key={index}   >{valor[0]} {valor[1] } </li>):
                     ""
                }     
            </ul>        
        </div>
    );
}

export default Seleccion;
