import React, {useState, useEffect} from 'react';
import { simpleGet } from '../actions/simpleGet';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Seleccion from './Seleccion';

const Busqueda = (props) => {
    const [numberValue, setNumberValue] = useState()
    const [categorias, setCategorias] = useState(simpleGet("https://swapi.dev/api/"))

    const setNumber = (target) => {
        //  console.log(target.value)
         setNumberValue(target.value)

    }

    const showlist =(target) => {
        //console.log(target.value.slice(0,target.value.indexOf(",")))
        props.setElemento(target.value.slice(0,target.value.indexOf(",")))
        //console.log(target.value.slice(target.value.indexOf(",")+1,target.value.length ))    
        props.setLink(target.value.slice(target.value.indexOf(",")+1,target.value.length ));
        
    }

    useEffect(() => {
        async function invocar(){
             const response =  await simpleGet("https://swapi.dev/api/")
             setCategorias(response)
         }
         invocar()
    }, [categorias]);

    return (
        <div className = "busqueda">
 
                <select name="select" className="selector" onChange={(e)=>showlist(e.target)} >
                    {                 
                        Object.entries(categorias)?.map((valor, index) =>  <option value={valor}  key={index}>{valor[0]}</option>)
                    } 
                </select>  
                <input type="number" className="entrada" onChange={(e) => setNumber(e.target)}></input>  
                <Router>
                    <Link to={`/Seleccion/${numberValue}`} className="link"> Traer Id </Link>
                    <Link to="/Seleccion/:id"></Link>
                    <Switch>
                        <Route path="/Seleccion/:id">
                            <Seleccion className="seleccion" link={props.link} elemento={props.elemento}/>
                        </Route>
                    </Switch>
                </Router> 

            

        </div>
    );
}

export default Busqueda;