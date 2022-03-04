import React, { Component } from 'react';

class Personcard extends Component {
    render() {
        return (
            <div>
                    <h1>{this.props.name}</h1>
                    <h4>{this.props.age}</h4>
                    <h4>{this.props.hair}</h4>

            </div>
        );
    }
}

export default Personcard;
