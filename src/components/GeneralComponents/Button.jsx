import React, { Component } from 'react';
import '../../style/GeneralComponents/Button.css'

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
            onClick: props.onClick
        }
    }
    render() { 
        return ( 
            <a className='btn default-button' onClick={this.state.onClick}>{this.state.text}</a>
         );
    }
}
 
export default Button;