import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog1 from "../images/blog-1.jpg";
import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import blog4 from "../images/blog-4.jpg";
import blog5 from "../images/blog-5.jpg";
import blog6 from "../images/blog-6.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { toTop } from "../App";





function BlogPage(){
    const blogs=[blog1,blog2,blog3,blog4,blog5,blog6]

    return(
        <>
        <div id="blog" className="head text-center mt-5 mb-5">
            <h2>Our Blogs</h2>
            <div className="head-link mt-3"><Link to="/" className='nav-link me-2' >Home {">>"}</Link>Blogs</div>
        </div>
        <div className="blog mt-5 mb-5">
            <Container>
            <div className="cat-head mb-5 d-flex justify-content-between align-items-center">
                <h3>Our <span>Blogs</span></h3>
                <a href="#blog" className='nav-link me-2' >View All {">>"}</a>
            </div>
            <Row>
                {blogs.map((e,i)=>
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="blog-cont mb-5">
                        <div className="blog-image">
                        <img src={e} alt="about" className="img-fluid" />
                        </div>
                        <div className="blog-content">
                            <div className="blog-links">
                            <a href="#blog" className='nav-link me-2' > <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>  21st May, 2021</a>
                            <a href="#blog" className='nav-link me-2' > <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>   by admin</a>
                            </div>
                            <h3>blogs title goes here</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, dolor!</p>
                            <button onClick={toTop}>Read More</button>
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
export default BlogPage;