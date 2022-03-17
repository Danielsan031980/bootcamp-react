import React, {useState, useEffect} from 'react';
import '../App.css';

let classPestana1 = "pestana1"
let classPestana2 = "pestana2"
let classPestana3 = "pestana2"
const Selector = (props) => {


    
    const handlerForm = (target, index) => {

        if(index === 1){
            props.setPestana({view1: true, view2: false, view3: false})
            classPestana1 = "pestana1"
        }
        else{
            classPestana1 = "pestana2"
        }
        if(index === 2){
            props.setPestana({view1: false, view2: true, view3: false})
            classPestana2 = "pestana1"
        }
        else{
            classPestana2 = "pestana2"
        }
        if(index === 3){
            props.setPestana({view1: false, view2: false, view3: true})
            classPestana3 = "pestana1"
        }
        else{
            classPestana3 = "pestana2"
        }
    }
    return (
        <div className="header">

            <div className={classPestana1} onClick={ (e) => handlerForm(e.target, 1)} >Pestaña 1</div>
            <div className={classPestana2} onClick={ (e) => handlerForm(e.target, 2)} >Pestaña 2</div>
            <div className={classPestana3} onClick={ (e) => handlerForm(e.target, 3)} >Pestaña 3</div>

        </div>
    );
}

export default Selector;
