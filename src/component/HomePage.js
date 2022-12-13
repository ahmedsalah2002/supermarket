import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import home1 from "../images/home-img-1.png";
import home2 from "../images/home-img-2.png";
import home3 from "../images/home-img-3.png";
import home4 from "../images/banner-1.jpg";
import home5 from "../images/banner-2.jpg";
import home6 from "../images/banner-3.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "../../node_modules/swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";


import { Pagination } from "swiper";
import { toTop } from "../App";


function HomePage(){
    return(
        <>
        <div className="home mt-5">
            
        <Container>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        <SwiperSlide><Row>
                
                <div className='col-lg-6 col-md-12'>
                    <div className="content mb-5">
                        <p>Fresh And Organic</p>
                        <h3>Upto 50% Off</h3>
                        <button onClick={toTop}>Shop Now</button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <div className="Home-image">
                        <img src={home1} className="img-fluid" alt='home' />
                    </div>
                </div>
            </Row></SwiperSlide>
        <SwiperSlide><Row>
                
                <div className='col-lg-6 col-md-12'>
                    <div className="content mb-5">
                        <p>Fresh And Organic</p>
                        <h3>Upto 50% Off</h3>
                        <button onClick={toTop}>Shop Now</button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <div className="Home-image">
                        <img src={home2} className="img-fluid" alt='home' />
                    </div>
                </div>
            </Row></SwiperSlide>
        <SwiperSlide><Row>
                
                <div className='col-lg-6 col-md-12'>
                    <div className="content mb-5">
                        <p>Fresh And Organic</p>
                        <h3>Upto 50% Off</h3>
                        <button onClick={toTop}>Shop Now</button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <div className="Home-image">
                        <img src={home3} className="img-fluid" alt='home' />
                    </div>
                </div>
            </Row></SwiperSlide>
        </Swiper>
            
        </Container>
        </div>
        <div className="mt-5 sales">
            <Container>
                <Row>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="box mb-5">
                            <img src={home4} className="img-fluid" alt='home' />
                            <div className="cont">
                                <p>Fresh And Organic</p>
                                <h3>Upto 50% Off</h3>
                                <button onClick={toTop}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="box mb-5">
                            <img src={home5} className="img-fluid" alt='home' />
                            <div className="cont">
                                <p>Fresh And Organic</p>
                                <h3>Upto 50% Off</h3>
                                <button onClick={toTop}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="box mb-5">
                            <img src={home6} className="img-fluid" alt='home' />
                            <div className="cont">
                                <p>Fresh And Organic</p>
                                <h3>Upto 50% Off</h3>
                                <button onClick={toTop}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default HomePage;