import React, {useState} from 'react';
import styles from './form.module.css';

const Form = (props) => {
    const [firstname, setFirsname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpass, setConfpass] = useState("");    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confpass };
        console.log("Welcome", newUser);
    };
    return (
        <div className={styles.form}>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirsname(e.target.value) } />     
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } />     
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />     
                </div>
                <div>
                    <label>Password: </label> 
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />     
                </div>
                <div>
                    <label>Confirmar Password: </label> 
                    <input type="text" onChange={ (e) => setConfpass(e.target.value) } />     
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className={styles.result}>
                <label>Primer Nombre: {firstname} </label> 
                <label>Segundo Nombre: {lastname} </label> 
                <label>Email: {email} </label> 
                <label>password: {password} </label>  
                <label>Confirmar Password {confpass} </label>                               
            </div>
        </div>
        
    );
}

export default Form;
