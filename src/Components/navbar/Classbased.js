import React, { Component } from "react";
class Classbased extends Component {
    constructor(){
        super();
        this.state={
            name:"Akshay"}
    }
    changeName(){
        this.setState({name:"priyanka"})
    }
    render() {       
       
        return (
            <div class='container'><h1>{this.state.name}</h1>
                <button onClick={()=>this.changeName()}>Changename</button></div>
        );
    }

} export default Classbased