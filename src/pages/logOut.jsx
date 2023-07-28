import {React, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Logout = () => {
    
    const navigate = useNavigate();
    const cookies = new Cookies();
    
    useEffect(() => {
        (
          async () => {
              const response = await fetch('http://127.0.0.1:8000/api/users/logout', {
              method: 'POST',    
              headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': cookies.get('jwt')
                  }
              });
    
              const body = await response.text();
              const result = JSON.parse(body);
              if(response.ok){
                cookies.remove('jwt');
                navigate("/logout");
              }
          }
        )();
    });
        
    return (
        <>
        </>

    );
}

export default Logout;