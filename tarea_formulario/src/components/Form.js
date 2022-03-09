import React, {useState, useEffect} from 'react';
import styles from './form.module.css';

const Form = (props) => {
    const [firstname, setFirsname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({ 
        pass1: "",
        pass2: ""
    });  
    

    const [firstnameerror, setFirstnameerror] = useState("");
    const [lastnameerror, setLastnameerror] = useState("");    
    const [emailerror, setEmailerror] = useState("");    
    const [passerror1, setPasserror1] = useState(""); 
    const [passerror2, setPasserror2] = useState("");
 

    const createUser = (e) => {  
        e.preventDefault();
    };
    
    const handlefirstnameerror = (e) => {
        setFirsname(e.target.value);
        if(e.target.value.length < 3) {
            setFirstnameerror("Name must have more than 2 letters");
        }
        else {
            setFirstnameerror('');
        }
    }

    const handlelastnameerror = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 3) {
            setLastnameerror("Name must have more than 2 letters");
        } 
        else {
            setLastnameerror('');
        }
    }
    const handleemailerror = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailerror("Name must have more than 5 letters");
        } 
        else {
            setEmailerror('');
        }
    }      
    const handlepasserror = (e) =>{
        setPassword({...password, [e.target.name]: e.target.value });
    }
    useEffect(()=>{
        const  {pass1,pass2} = password;
        if(pass1 < 8 || pass2 < 8){
            setPasserror1("Password tener minimo 8 caracteres");
        }
        else{
            setPasserror1("");
        }
        if(pass1 !== pass2){
            setPasserror2("Passwords deben ser iguales");
        }
        else{
            setPasserror2("");
        }
    }
    ,[password])

    return (
        <div className={styles.form}>
            <form onSubmit={ createUser }>
                <div className={styles.divitions}>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handlefirstnameerror  } />  
                </div>
                    {                               
                        firstnameerror?   
                        <p style={{color:'red'}}>{ firstnameerror}</p> :
                        '' 
                    }
                <div>
                </div>
                <div className={styles.divitions}>
                    <label>Second Name: </label> 
                    <input type="text" onChange={ handlelastnameerror} />  
                </div>
                    {                               
                        lastnameerror?   
                        <p style={{color:'red'}}>{ lastnameerror}</p> :
                        '' 
                    }   
                <div>
                </div>
                <div className={styles.divitions}>
                    <label>Email: </label> 
                    <input type="text" onChange={ handleemailerror } />  
                </div>
                        {                               
                            emailerror?   
                            <p style={{color:'red'}}>{ emailerror }</p> :
                            '' 
                        }      
                <div>
                </div>
                <div className={styles.divitions}>
                    <label>Password: </label> 
                    <input name="pass1" type="text" onChange={ handlepasserror } />     
                </div>
                <div className={styles.divitions}>
                    <label>Pass conf: </label> 
                    <input name="pass2" type="text" onChange={ handlepasserror } />     
                </div>
                <div>
                    {                          
                        passerror1?   
                        <p style={{color:'red'}}>{ passerror1 }</p> :
                        '' 
                    }    
                    {                          
                        passerror2?   
                        <p style={{color:'red'}}>{ passerror2 }</p> :
                        '' 
                    }   
                </div>
                <input type="submit" value="Create User"/>
            </form>
        </div>
        
    );
}

export default Form;
