import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import pic1 from "../images/pic-1.png";
import pic2 from "../images/pic-2.png";
import pic3 from "../images/pic-3.png";
import pic4 from "../images/pic-4.png";
import pic5 from "../images/pic-5.png";
import pic6 from "../images/pic-6.png";

function ReviewPage(){
    const reviews=[pic1,pic2,pic3,pic4,pic5,pic6]
    return(
        <>
        <div id="review" className="head text-center mt-5 mb-5">
            <h2>Client's Review</h2>
            <div className="head-link mt-3"><Link to="/" className='nav-link me-2' >Home {">>"}</Link>Review</div>
        </div>
        <div className="review mt-5 mb-5">
            <Container>
                <Row className="mb-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon mb-4">
                            <div className="icon-image">
                            <img src={icon1} alt="about" className="img-fluid" />
                            </div>
                            <div className="icon-cont ms-4">
                                <h3>Fast Delivery</h3>
                                <span>Within 30 Minutes</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon mb-4">
                            <div className="icon-image">
                            <img src={icon2} alt="about" className="img-fluid" />
                            </div>
                            <div className="icon-cont ms-4">
                                <h3>24 / 7 Available</h3>
                                <span>Call Us Anytime</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="icon mb-4">
                            <div className="icon-image">
                            <img src={icon3} alt="about" className="img-fluid" />
                            </div>
                            <div className="icon-cont ms-4">
                                <h3>Easy Payments</h3>
                                <span>Cash Or Credits</span>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    {reviews.map((e,i)=>
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="review-cont mb-5">
                            <div className="review-head mb-4">
                                <div className="review-image">
                                <img src={e} alt="about" className="img-fluid" />
                                </div>
                                <div className="info">
                                    <h3>john deo</h3>
                                    <span>happy client</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Voluptatem Molestiae Expedita Culpa Officiis Harum Impedit Vel! Odit Saepe Similique Vero!</p>
                        </div>
                    </div>)}
                </Row>
            </Container>
        </div>
        </>
    )
}
export default ReviewPage;