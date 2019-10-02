import React, { Component } from "react";
import './OrderDetail.css';
import db from '../FirestoreConfig'
import { Table, Button, Row, Col, InputGroup, Input, Fade } from 'reactstrap';


class OrderDetail extends Component {
    state = {
        items: [],
        inputValue: "",
        editar:false,
        id: "",
        fadein: false,
        message: '',
    }
//obtengo la lista de todos los items guarddos en db
    componentDidMount(){
        //onSnapshot trae los elementos en tiempo real
        db.collection('orders').onSnapshot((snapShots) => {
            this.setState({
                items: snapShots.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                })
            })
        })
    }

    //guarda el calor del input 
    changeValue = (e) => {
        this.setState ({
            inputValue:e.target.value 
        })
    };

    //boton que agrega valor de input a la base de datos
    action = () => {
        const {inputValue, edit} = this.state;

        !edit ?
        db.collection('orders').add({
            item: inputValue
        })
        .then ( () => {
            this.message('Agregado')
        })
        .catch ( () => {
            this.message('Error')
        })
        : this.update();
    };

    //editar contenido del item
    getTodo = (id) => {
        let docRef =  db.collection("orders").doc(id);

        //obtener el documento
        docRef.get().then((doc) => {
            //comprueba si el doc existe (o el id)
            if(doc.exists) {
                this.setState({
                    inputValue: doc.data().item,
                    edit: true,
                    id: doc.id
                })
                    
            }
            else {
                console.log("El documento no existe")
            }
        })
        .catch ( (error) => {
            console.log(error);
        })
    };

    //editar item 
    update = () => {
        const { id, inputValue } = this.state;
        db.collection("orders").doc(id).update({
            item: inputValue
        })
        .then ( () => {
            this.message('Actualizado');
            this.setState({
                edit:false
            })
        })
        .catch ( (error) => {
            this.message('error');
        })
    };

    //borrar item del listado
    deleteItem = (id) => {
        db.collection("orders").doc(id).delete();
    };

    // mensaje de alerta antes de borrar
    message = (message) => {
        this.setState({
            inputValue: "",
            fadein: true,
            message: message
        });
        setTimeout( ()=> {
            this.setState({
                fadein: false,
                message: ""
            })
        }, 3000);
    }


render() {
    const { items, inputValue } = this.state;

    return (
        
        <div className='order-detail'>
            <div>            
                <h4 className='order-title'>DETALLE DE LA ORDEN</h4>
            </div>

            <Row>
                    <Col xs='8'>
                        <InputGroup>
                        <Input 
                        placeholder="Agregar un nuevo item"
                        value={inputValue}
                        onChange={this.changeValue}
                        />
                        </InputGroup>
                    </Col>
                    <Col >
                        <div className="text-right">
                            <Button color="info" onClick={this.action}>
                                {/* Si si edita el boton dice editar, sino agregar */}
                                {this.state.edit ? 'Editar' : 'Agregar'}
                            </Button>
                        </div>
                    </Col>
                </Row>
                
                {/* mostrar mensaje para antes de Eliminar */}
                <Fade in={this.state.fadein} tag="h6" className= "mt-3 text-center text-success">
                    {this.state.message}
                </Fade>

                <br></br>

                <Table hover className="text-center">
                    <tbody>
                        { items && items!== undefined ? items.map((item, key) => (
                            <tr key = {key}>
                                <td>{item.data.item}</td> 
                                <td><Button color="danger" onClick={()=> this.deleteItem(item.id)}>X</Button></td>
                            </tr>

                        )) :null }
                    </tbody>
                </Table>
            </div>
    )
}}

export default OrderDetail