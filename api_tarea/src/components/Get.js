import React, {useState} from 'react';
import { simpleGet } from '../actions/simpleGet';


const Get = () => {
    const [personajes,setPersonajes]=useState();
    const onClick = async () =>  {
        const response = await simpleGet("https://pokeapi.co/api/v2/pokemon?offset=700&limit=1200")
        console.log(response)
        setPersonajes(response.results)

    } 
    return (
        <div>
                        <h3>los Pesonajes</h3>
            <button onClick={onClick}>Traer personajes</button>
            <ul>
                {personajes && personajes.map((personaje, index)=> <li key={index}>{personaje.name}</li> ) }
            </ul>
        </div>
    );
}

export default Get;
