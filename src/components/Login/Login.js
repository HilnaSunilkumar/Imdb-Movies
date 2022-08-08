import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";

import API from "../../API";
import {Content, Wrapper } from "./Login.style";
import { Context } from "../../context";
import { Button } from "../Button";
import Spinner from "../Spinner";

export const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setError(false);
                                                                                                                                                                                                                                                                                                                                                                                                             
        try{
            setLoading(true);
             API.getRequestToken().then(response =>{
                console.log('response',response);
                 API.authenticate(response, username, password).then(response =>{
                   if(!response.success){
                       setError(true);
                       setLoading(false)
                      setErrorMsg(response.status_message);
                       console.log('error has set', error, errorMsg);           
                   }else{
                        navigate('/');
                       setError(false);
                       setUser({sessionId: response.session_id, username});
                       console.log('id',response.session_id);
                   }
               });
            })
        }
        catch(error){
            setError(true);
            setLoading(false);
            console.log(error);
        }
    };

    const handleInput = e =>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'username'){
            setUsername(value);
        }else{
            setPassword(value);
        }
    };
    if(loading) return <Spinner />

    return (
        <Wrapper>  
            <Content>
            {error && <h4 className="error">{errorMsg}</h4>}
                    
             <label><b>User name:</b></label>
            <input 
            type="text"
             value={username} 
             name="username"
             onChange={handleInput}
             placeholder="Enter User name" 
             required />

            <label ><b>Password:</b></label>
        <input 
        type="password" 
        value={password}
        name="password"
        onChange= {handleInput}
        placeholder="Enter Password"   
        required />
        
        <Button text="Login" callback= {handleSubmit}/>  
        </Content>      
        </Wrapper>
    )
}
