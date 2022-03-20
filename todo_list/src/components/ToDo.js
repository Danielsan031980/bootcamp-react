import React, {useState, useEffect} from 'react';
import '../App.css';

const Todo = (props) => {
    const {list, erase} = props;

    
   
    
    const handleCheck = (e,index) =>{
        
        list[index].completada?(list[index].completada = false):(list[index].completada=true)
        list[index].color= "black"
        console.log(list)
        props.setList(list);
    }

    const handlerForm = (event, index) => {         
        props.setList(list.filter( (item,i) => {
            if(i !== index){
                return item
            }
            else{
              
                if(item.completada === false){
                    list[index].color= "rojo"
                    props.setList(list);
                    return item
                }
                else{     
                    props.setErase([...erase,{nombre: item.nombre}]);
                }
            }

           }

           )
        ) 

        //ejemplo de filtro usando posición del array
        //    console.log (list.filter( function(val1,val) {
        //     if(val !== index){
        //         console.log(val)
        //         return val1
        //     }

        //    }
        //    ))

        // ejemplo filtro usando valor de lista con .id    
        // console.log(list.filter((val) => {
        //     if(val.id !== index){
        //         return val
        //     }

        // } ))    
    }



    return (
        <div className="contenido_tareas">
            <h1> Tareas a Ejecutar</h1>
            <h4> Marca check para eliminar tarea ejecutada</h4>
            {
                
                list?.map ((item,i) => 
                    <div className="tarea" key={i}>
                        <label className={"claseText" + item.color}>{item.nombre}
                            <input className="check" onChange={ (e) => handleCheck(e,i)}  type="checkbox" checked={item.completed}></input>
                        </label>
                        <button onClick={ (e) => handlerForm(e, i)}   >delete</button> 
                    </div>
                )
            }
        </div>
    );
}

export default Todo;
