import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarkedAlt,faEnvelope,faPhone  } from '@fortawesome/free-solid-svg-icons';

function ContactPage(){

    return(
        <>
        <div id="contact" className="head text-center mt-5 mb-5">
            <h2>Contact Us</h2>
            <div className="head-link mt-3"><Link to="/" className='nav-link me-2' >Home {">>"}</Link>Contact</div>
        </div>
        <div className="contact-us mt-5 mb-5">
            <Container>
                <Row className="mb-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-cont text-center mb-5">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            <h3>Our Number</h3>
                            <span>+123-456-7890</span>
                            <span>+111-222-3333</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-cont text-center mb-5">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            <h3>Our Email</h3>
                            <span>Shaikhanas@Gmail.Com</span>
                            <span>Anasbhai@Gmail.Com</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="contact-cont text-center mb-5">
                            <FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>
                            <h3>Our Address</h3>
                            <span>Mumbai, India - 400104</span>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <form>
                            <h3>Get In Touch</h3>
                            <div className="inputs">
                            <input type="text" placeholder="enter your name"  />
                            <input type="email" placeholder="enter your email"  />
                            </div>
                            <div className="inputs">
                            <input type="number" placeholder="enter your number"  />
                            <input type="text" placeholder="enter your subject"  />
                            </div>
                            <textarea placeholder="your message" cols="30" rows="10"></textarea>
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633968347413!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default ContactPage;