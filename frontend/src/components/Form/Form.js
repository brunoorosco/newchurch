import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
    constructor(){
        super();
        this.state = {
            name : " ",
            
        };
        this.onChange = (evento) => {
            this.setState({name: evento.target.value});
        };
    }
   
    render() {
        return (
            <div>
                Nome:<input
                name="name"
                value={this.state.name}
                onChange={this.state.onChange}
                type="text" />
            </div>
        )
    }
}

export default Input;

