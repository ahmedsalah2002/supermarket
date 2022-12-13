import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import about from "../images/about-img.jpg";
import gallery1 from "../images/gallery-img-1.jpg";
import gallery2 from "../images/gallery-img-2.jpg";
import gallery3 from "../images/gallery-img-3.jpg";
import gallery4 from "../images/gallery-img-4.jpg";
import gallery5 from "../images/gallery-img-5.jpg";
import gallery6 from "../images/gallery-img-6.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faEye,faShareAlt,faHeart } from '@fortawesome/free-solid-svg-icons';
import { toTop } from "../App";




function AboutPage(){
   
    const abouts=[gallery1,gallery2,gallery3,gallery4,gallery5,gallery6]
    return(
        <>
        <div id="about" className="head text-center mt-5 mb-5">
            <h2>About Us</h2>
            <div className="head-link mt-3"><Link to="/" className='nav-link me-2' >Home {">>"}</Link>About</div>
        </div>
        <div className="about mt-5 mb-5">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-image mb-3">
                            <img src={about} alt="about" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-cont">
                        <span>welcome to our shop</span>
                        <h3>fresh and organic groceries</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p>
                        <button onClick={toTop}>Read More</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        
        <div className="gallery mb-5 mt-5">
            <Container>
            <div className="cat-head mb-5 d-flex justify-content-between align-items-center">
                <h3>Our <span>Gallery</span></h3>
                <a href="#about" className='nav-link me-2' >View All {">>"}</a>
            </div>
            <Row>
                {abouts.map((e,i)=> 
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="gallery-image mb-5">
                        <div className="gallery-icons">
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon>
                        </div>
                        <img src={e} alt="about" className="img-fluid" />
                    </div>
                </div>
                )}
            </Row>
            </Container>
        </div>
        
        </>
    )
}

export default AboutPage;