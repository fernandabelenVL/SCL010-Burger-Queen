import React from 'react';
import './InputClient.css';

class InputClient extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <h4>NOMBRE DE CLIENTE</h4>
          <label>
            <input  placeholder = "Ingrese nombre del cliente" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          {/* <button type="submit" value="Submit"> Enviar a cocina </button> */}
        </form>
      );
    }
  }

  export default InputClient;