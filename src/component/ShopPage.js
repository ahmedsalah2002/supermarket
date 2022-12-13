import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import shop1 from "../images/cat-1.png";
import shop2 from "../images/cat-2.png";
import shop3 from "../images/cat-3.png";
import shop4 from "../images/cat-4.png";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";
import product5 from "../images/product-5.jpg";
import product6 from "../images/product-6.jpg";
import product7 from "../images/product-7.jpg";
import product8 from "../images/product-8.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar, faStarHalfStroke, faEye,faShoppingCart,faHeart } from '@fortawesome/free-solid-svg-icons';



function ShopPage(){
    const products=[product1,product2,product3,product4,product5,product6,product7,product8]
    return(
        <>
        <div id="shop" className="head text-center mt-5 mb-5">
            <h2>Our Shop</h2>
            <div className="head-link mt-3"><Link to="/" className='nav-link me-2' >Home {">>"}</Link>Shop</div>
        </div>
        <div className="category mb-5">
        <Container>
            <div className="cat-head mb-3 d-flex justify-content-between align-items-center">
                <h3>Our <span>Category</span></h3>
                <a href="#shop" className='nav-link me-2' >View All {">>"}</a>
            </div>
            <Row>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="cat-cont text-center mt-5 mb-4">
                        <a href="#shop" className='nav-link me-2' >
                        <div className="cat-image mb-3">
                            <img src={shop1} alt="shop" className="img-fluid" />
                        </div>
                        fresh fruits</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="cat-cont text-center mt-5 mb-4">
                        <a href="#shop" className='nav-link me-2' >
                        <div className="cat-image mb-3">
                            <img src={shop2} alt="shop" className="img-fluid" />
                        </div>
                        vegetables</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="cat-cont text-center mt-5 mb-4">
                        <a href="#shop" className='nav-link me-2' >
                        <div className="cat-image mb-3">
                            <img src={shop3} alt="shop" className="img-fluid" />
                        </div>
                        organic spices</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="cat-cont text-center mt-5 mb-4">
                        <a href="#shop" className='nav-link me-2' >
                        <div className="cat-image mb-3">
                            <img src={shop4} alt="shop" className="img-fluid" />
                        </div>
                        fresh meat</a>
                    </div>
                </div>
            </Row>
        </Container>
        </div>
        <div className="products mt-5 mb-5">
            <Container>
            <div className="cat-head mb-5 d-flex justify-content-between align-items-center">
                <h3>Our <span>Products</span></h3>
                <a href="#shop" className='nav-link me-2' >View All {">>"}</a>
            </div>
            <Row>
            {products.map((e ,index)=> 
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="product mb-3">
                <div className="icons">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </div>
                <div className="product-image">
                <img src={e} alt="product" className="img-fluid" />
                </div>
                <div className="product-cont">
                <h3 className="text-capitalize">organic food</h3>
                <div className="price">$18.99</div>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>
                </div>
                </div>
            </div>
        </div>
            )}
            
            </Row>
            </Container>
        </div>
        </>
    )
}


export default ShopPage;