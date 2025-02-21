import  { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterOfTerg = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`custom-footer ${isVisible ? "footer-visible" : ""}`}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">თერგი</div>
          <nav className="footer-nav">
            <Link to={"/ნაწარმოებანი"}>ნაწარმოებანი</Link>
            <Link to={"/სიმპოზიუმი"}>სიმპოზიუმი</Link>
            <Link to={"/ესეისტი AI"}>ესეისტი AI</Link>
            <Link to={"/რეპეტიტორები"}>რეპეტიტორები</Link>
          </nav>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="footer-contact">
          <p>რაიმე შეკითხვა გაქვთ? დაგვიკავშირდით</p>
          <div className="footer-input">
            <input type="email" placeholder="შეიყვანეთ თქვენი ელ. ფოსტა" />
            <button>გაგზავნა</button>
          </div>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} თერგი. ყველა უფლება დაცულია
        </p>
      </div>
    </footer>
  );
};

export default FooterOfTerg;
