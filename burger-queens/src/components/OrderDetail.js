import React from 'react';
import './OrderDetail.css';


function OrderDetail () {
    return (

        <div className='order-detail'>
            <div>            
                <p className='order-title'>DETALLE DE LA ORDEN</p>
            </div>

            <div className='food-selected'>
                <div className='food-name'>
                    <p>Comida 1</p>
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

}

export default OrderDetail