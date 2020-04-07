import React, { Component } from 'react';
import "../assects/css/mine.css"
class Mine extends Component {
    render() {
        return (
            <div className="mine">
                <div className="cart">
                    <div className="header">
                        <div className="leftImg"></div>
                        <h4>个人中心</h4>
                        <div className="rightImg"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mine;