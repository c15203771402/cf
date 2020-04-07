import React, { Component } from 'react';
import "../assects/css/cart.css"
class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="header">
                    <div className="leftImg"></div>
                    <h4>购物车</h4>
                    <div className="rightImg"></div>
                </div>
            </div>
        );
    }
}

export default Cart;