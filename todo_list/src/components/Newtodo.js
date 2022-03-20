import React, {useState, useEffect} from 'react';




const Newtodo = (props) => {

    const {list} = props
    const [item, setItem] = useState({
        nombre: "",
        completada: false,
    }


    )

    const handleButton  = (target) => {
   
        (item.nombre)  ?
        props.setList([...props.list, item]):
        props.setList([...props.list])
        
        
    }

    const handleImput = (target) => {
        setItem({...item, nombre: target.value, color: "black", completada: false});
        
    }

    useEffect(() =>{
        
    },[item]    )

    return (
        <div className="nuevatarea">
            <label htmlFor="nuevaTarea">Nueva Tarea</label>
            <input name="nuevaTarea" type="text"  onChange={(e) => handleImput(e.target) } ></input>
            <button name="nuevaTarea" onClick={ (e) => handleButton(e.target)}>add</button> 
        </div>
    );
}

export default Newtodo;
