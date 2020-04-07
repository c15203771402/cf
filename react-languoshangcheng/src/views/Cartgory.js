import React, { Component } from 'react';
import "../assects/css/cartgory.css"
class Cartgory extends Component {
    render() {
        return (
            <div className="cartgory">
                <div className="flex">
                    <div className="header">
                        <div className="leftImg"></div>
                        <h4>分类</h4>
                        <div className="rightImg"></div>
                    </div>
                    <div className="aside-left">
                        <ul className="left-text">
                            <li>手机</li>
                            <li>笔记本</li>
                            <li>智能硬件</li>
                            <li>周边配件</li>
                        </ul>
                    </div>
                </div>
                <div className="aside-right">
                    <ul className="right-img">
                        <li className="phone"></li>
                        <li className="text">苹果xr</li>
                    </ul>
                    <ul className="right-img1">
                        <li className="phone1"></li>
                        <li className="text">小米手机</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cartgory;