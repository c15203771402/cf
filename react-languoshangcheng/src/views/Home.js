import React, { Component } from 'react';
import Swiper from "swiper"
import "../assects/css/swiper.min.css"
import "../assects/css/index.css"
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerLists: [{
                id: 1,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            }, {
                id: 2,
                imgsrc: require("../assects/imags/home/banner_2.jpg")
            }, {
                id: 3,
                imgsrc: require("../assects/imags/home/banner_3.jpg")
            },]
        }
    }
    getBanner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    componentDidMount() {
        this.getBanner()
    }
    render() {
        return (
            <div className="page">
                <div className="header">
                    <div className="leftImg"></div>
                    <h4>蓝果小镇商城</h4>
                    <div className="rightImg"></div>
                </div>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerLists.map((banner, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={banner.imgsrc} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 快速导航 */}
                <div className="aside">
                    <div className="mouse">
                        <div className="img1 url"></div>
                        <span className="text">Xiaomi|  小米笔记本电脑</span>
                        <div className="price">
                            <span className="price1">￥4799</span>
                            <span className="price2">￥4799</span>
                        </div>
                        <div className="num">
                            <span className="num1">新品</span>
                            <span className="num2">销量:  10</span>
                        </div>

                    </div>
                    <div className="computer">
                        <div className="img2 url1"></div>
                        <span className="text">Lenovo|  联想笔记本电脑</span>
                        <div className="price">
                            <span className="price1">￥5999</span>
                            <span className="price2">￥5999</span>
                        </div>
                        <div className="num">
                            <span className="num1">新品</span>
                            <span className="num2">销量:  100</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;