import React, { Component } from 'react';
import './MenuItem.css';


class MenuItem extends Component {
    constructor (){
        super();
        this.state = {
            orders: [],
            product: "",
            price: ""
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick () {
        const itemName= this.props.product;
        const itemPrice= this.props.price;
        console.log(itemName, itemPrice);
    }

    render(){
    return (
            <button className = 'item-box' onClick={this.handleClick} >
                <img src={this.props.img} alt="menu icon" className="item-img"/>
                <div className='item-name'><p>{this.props.product}</p></div>
                <div className='item-price'><p>{this.props.price}</p></div>
            </button>
    )   
    }
}

export default MenuItem;
