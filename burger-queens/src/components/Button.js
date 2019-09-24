import React, { Component } from 'react';

class Button extends Component {
    render() {
        return ( 
            <span>
            <button>
            <a className="Btn" href="">
            { this.props.title }
            { this.props.href }
            </a>
            </button>
            </span>    
        )
    }
}

export default Button;