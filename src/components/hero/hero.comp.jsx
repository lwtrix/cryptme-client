import "./hero.styles.scss";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="text-container">
        <h1 className="title">
          Invest in the Future of Cryptocurrency Commerce with{" "}
          <span>CryptMe</span>
        </h1>
        <Link className="see-more-btn-container">
          <span className="see-more">See more</span>
          <MdKeyboardArrowRight className="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
