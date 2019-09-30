import React, { Component } from "react";
import './OrderDetail.css';
import db from '../FirestoreConfig'

class OrderDetail extends Component {
state = {
        items: [],
        id: '',
        InputClient:'',
        price: '',
        products: '',
    };
    
componentDidMount() {
db.collection('Menu').onSnapshot((snapShots) => {
    this.setState({
        items: snapShots.docs.map( doc => {
            return { id: doc.id, data: doc.data() }
        })
    })

}, error => {
    console.log(error);    
}   
)};

clientName = (e) =>{
    this.setState({
    inputClient: e.target.value
    })
};

sendOrder = () => {
    const { inputClient } = this.state;
    db.collection('Menu').add({
        items: inputClient
    }).then( () => {
       this.message('Agregado');
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
            inputClient: doc.data().clientName,
            id: doc.id,
            })
        } else {
            console.log('El documento no existe');
            
        }
    }).catch((error) => {
        console.log(error);
    })
};

deleteOrder = (id) => {
    db.collection('Menu').doc(id).delete()
};

render() {
    return (
        <div className='order-detail'>
            <div>            
                <p className='order-title'>DETALLE DE LA ORDEN</p>
            </div>

            <div className='food-selected'>
                <div className='food-name'>
                    <p>Comida 1</p>
                    <p>Comida 1</p>
                </div>
                <div className='food-price'>
                    <p>$500 <button>X</button></p>
                    <p>$800 <button>X</button></p>
                    <p>$1000 <button>X</button></p>
                </div>
            </div>

            <div className='total-price'>
                <p>TOTAL</p>
                <p>$2300</p>
            </div>
        </div>
    )
}}

export default OrderDetail