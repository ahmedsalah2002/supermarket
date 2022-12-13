import logo from './logo.svg';
import './App.css';
import AppNavbar from "./component/AppNavbar"
import HomePage from './component/HomePage';
import FooterPage from './component/FooterPage';
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from './component/AboutPage';
import ShopPage from './component/ShopPage';
import ReviewPage from './component/ReviewPage';
import BlogPage from './component/BlogPage';
import ContactPage from './component/ContactPage';
export function toTop(){
        
  window.scroll(0,0);
}

function App() {


  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      
      <FooterPage />
    </div>
  );
}

export default App;
