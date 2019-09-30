import React from 'react';
import './InputClient.css';
import db from '../FirestoreConfig'

class InputClient extends React.Component {

      state = {
        inputValue: '',
      };
  
      
      changeValue = (e) =>{
          this.setState({
          inputValue: e.target.value
          })
      };
    
      sendName = () => {
        const { inputValue } = this.state;
          db.collection('Menu').add({
            items: inputValue
         }).then( () => {
           this.message('Enviado');
        }).catch(() => {
            this.message('error'); 
          });
          this.update()
    };
  
    getTodo = (id) => {
      let docRef  = db.collection('Menu').doc(id);
      docRef.get().then((doc) => {
          if (doc.exists) {
              this.setState({
              inputValue: doc.data().item,
              id: doc.id,
              })
          } else {
              console.log('El documento no existe');
              
          }
      }).catch((error) => {
          console.log(error);
      })
      };

    render() {
    const { items, inputValue } =  this.state;
      return (
        <form>
        <h4>NOMBRE DE CLIENTE</h4>
          <label>
          <input  placeholder = "Ingrese nombre del cliente" type="text" value= { inputValue } onChange={ this.changeValue } />
          </label>
          <button type="submit" value="Submit" onClick={ this.sendName }> Enviar a cocinaaa </button>
        </form>
      );
    }
  }

  export default InputClient;