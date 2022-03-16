import React, {useState, useEffect} from 'react';

const Box = (props) => {

    const [createbox, setCreatebox] = useState({
        color: "#000000",
        ancho: "",
        largo: ""
    })

    const handlerForm = (target) => {
        setCreatebox({...createbox,[target.name]: target.value})
    }

    const changesubmit = (e) =>{
        e.preventDefault();

        props.setCaja (createbox);
        props.cajas? 
        props.setCajas ([...props.cajas, createbox]):
        props.setCajas ([createbox])       
    }
    useEffect(() => {
    //   console.log(createbox);
        
    }, [createbox]);

    return (
        <div>
            <form className="formulario" onSubmit={changesubmit}  >
                <h1>Ingresar Datos</h1>
                <div className =" valoresentrada" >
                    <label htmlFor="color">Color:</label>
                    <input type="color" name="color" value = { createbox.color } onChange={ (e) => handlerForm(e.target)} ></input> 
                </div >
                <div className =" valoresentrada"  >
                    <label htmlFor="ancho">Ancho:</label>
                    <input type="text" name="ancho" value = { createbox.ancho } onChange={ (e) => handlerForm(e.target)} ></input>                 
                </div>
                <div className =" valoresentrada" >
                    <label htmlFor="largo">Largo:</label>
                    <input type="text" name="largo" value = { createbox.largo } onChange={ (e) => handlerForm(e.target)} ></input>                
                </div>
                <input type="submit" value="Generar Caja" />
            </form>
        </div>
    );
}

export default Box;
