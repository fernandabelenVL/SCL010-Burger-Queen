import React, { Component } from 'react';
import './MenuItem.css';


class MenuItem extends Component {
    constructor (){
        super();
        this.state = {
            product: "",
            price: ""
        }
        this.changeNameAndPrice= this.changeNameAndPrice.bind(this)
    }

    componentDidMount() {
        console.log('Child did mount.');

      }
    

    changeNameAndPrice (props){
        // this.setState({product: this.props.product, price: this.props.price})
        console.log(this.state.product)
    }

    render(){
    return (
            <button className = 'item-box' onClick= {this.changeNameAndPrice(this.props)}>
                <img src={this.props.img} alt="menu icon" className="item-img"/>
                <div className='item-name'><p>{this.props.product}</p></div>
                <div className='item-price'><p>{this.props.price}</p></div>
            </button>
    )   
    }
}

export default MenuItem;
