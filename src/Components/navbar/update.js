import React,{useState} from "react";


function Update(props){
    function updateName() {
                this.props.name="Akshay"
    }
        return(
        <div >
        <h1>{props.name}</h1>
        <button onClick={updateName}>Update</button>
        </div>
    )
}
export default Update