import React from 'react';
import './InputClient.css';
import db from '../FirestoreConfig'
import { Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';

class InputClient extends React.Component {

  state = {
    order: [],
    inputValue:'',
    edit: false,
    id: '',
    fadeIn: false,
    message: '',
};

componentDidMount() {
db.collection('Orders').onSnapshot((snapShots) => {
    this.setState({
        orden: snapShots.docs.map( doc => {
        return { id:doc.id, data: doc.data() }
        })
    })
}, error => {
    console.log(error);
}
)};

changeValue = (e) =>{
    this.setState({
    inputValue: e.target.value
    })
};

action = () => {
    const { inputValue } = this.state;
    db.collection('Orders').add({
        orden: inputValue
    }).then( () => {
       this.message('Agregado');
    }).catch(() => {
        this.message('error');
    })}


getTodo = (id) => {
let docRef  = db.collection('Orders').doc(id);
docRef.get().then((doc) => {
    if (doc.exists) {
        this.setState({
        inputValue: doc.data().item,
        edit: true,
        id: doc.id,
        })
    } else {
        console.log('El documento no existe');


    }
}).catch((error) => {
    console.log(error);
})
};

message = (message) => {
this.setState({
    inputValue:'',
    fadeIn: true,
    message: message
})
setTimeout(() => {
    this.setState({
    fadeIn: false,
    message: ''
    })
}, 2000)
};

render() {
    const { orden, inputValue, item } =  this.state;
        return (
            <div>
            <Row>
                <Col xs="10">
                    <InputGroup>
                    <Input
                    placeholder = "Agregar un nuevo ítem"
                    onChange = { this.changeValue }
                    value = { inputValue }>
                    </Input>
                    </InputGroup>
                </Col>
                <Col xs="2">
                <div className="text-right">
                <Button color="info" onClick={ this.action }>{ 'Agregar' }</Button>
                </div>
                </Col>
            </Row>
            <Fade in= { this.state.fadeIn } tag="h6" className="m7-3 text-center text-success">
            { this.state.message }
            </Fade>
            <br></br>
                    { item && orden !== undefined ? orden.map((item, key) => (
                        <tr color="danger" key = { key }>
                        <h1>{ item.data.item }</h1>
                        </tr>
                    )) : null }
            </div>
        )
    }
}


  export default InputClient;