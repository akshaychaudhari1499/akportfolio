import React from "react";
import './navbar.css';
import {useState} from 'react';
function Navbar(){
    const[data,setData] = useState("Akshay");
    const updatedata = ()=>{
        setData("Priyanka")
    }
    return (<div className="navbar">
        <h1>{data}  </h1>
        <button onClick={updatedata}>updateMyName</button>
                </div>)
        
    
}

export default Navbar;
