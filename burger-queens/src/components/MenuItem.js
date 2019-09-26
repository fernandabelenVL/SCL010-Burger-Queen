import React from 'react';
import './MenuItem.css';


function MenuItem (props) {
    return (
            <button className = 'item-box'>
                <img src={props.img} alt="menu icon" className="item-img"/>
                <div><p>{props.product}</p></div>
                <div className='item-price'><p>{props.price}</p></div>
            </button>
    )   
}

export default MenuItem;
