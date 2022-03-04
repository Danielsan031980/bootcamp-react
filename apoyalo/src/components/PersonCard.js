import React, { Component } from 'react';

class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }   
    contar = () =>{
        this.setState({age: this.state.age + 1})
    }
    render() {
        return (
            <div>   
                    <h1>{this.props.name}</h1>
                    <h4>{this.props.hair}</h4> 
                    <h4>{this.state.age}</h4>
                    <button onClick = {this.contar}>Birthday Button for {this.props.name}</button>
            </div>
        );
    }
}

export default Personcard;
