import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight,faHome,faEnvelope,faPhone  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faInstagram,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { toTop } from "../App";

function FooterPage() {
  return (
    <>
        <footer  className="text-center text-lg-start bg-light  text-muted">
        <section className="pt-3">
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                    <div className="links d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' >Home</Link>
                    </div>
                    <div className="links d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/shop" onClick={toTop} className='nav-link ms-2' >Shop</Link>
                    </div>
                    <div className="links d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/about" onClick={toTop} className='nav-link ms-2' >About</Link>
                    </div>
                    <div className="links d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/review" onClick={toTop} className='nav-link ms-2'>Review</Link>
                    </div>
                    <div className="links d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/blog"  onClick={toTop} className='nav-link ms-2'>Blog</Link>
                    </div>
                    <div className="links d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link  to="/contact" onClick={toTop} className='nav-link ms-2'>Contact</Link>
                    </div>
                    
                    
                    
                    
                    
              </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Extra Links</h6>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' > my order </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' > my favorite </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' > my wishlist </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2'> my account </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon><Link to="/"  onClick={toTop} className='nav-link ms-2'> terms or use </Link>
                    </div>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
                <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' > facebook </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' > twiteer </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2' > instagram </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon><Link to="/" onClick={toTop} className='nav-link ms-2'> linkedin </Link>
                    </div>
                    <div className="links text-capitalize d-flex align-items-center mb-3">                  
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon><Link to="/"  onClick={toTop} className='nav-link ms-2'> github </Link>
                    </div>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">contact</h6>
                <p>
                <FontAwesomeIcon className="me-3" icon={faHome}></FontAwesomeIcon> El Menoufia, Egypt
                </p>
                <p>
                  <FontAwesomeIcon className="me-3" icon={faEnvelope}></FontAwesomeIcon> 
                  ahmed147salah@gmail.com
                </p>
                <p>
                <FontAwesomeIcon className="me-3" icon={faPhone}></FontAwesomeIcon> +201095572350
                </p>
                <p>
                <FontAwesomeIcon className="me-3" icon={faPhone}></FontAwesomeIcon> +201553629437
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center  p-4 Allrights">
        Created By Ahmed Salah | All Rights Reserved!
        </div>
    </footer>
    </>
  );
}

export default FooterPage;
