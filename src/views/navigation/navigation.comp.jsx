import "./navigation.styles.scss";
import { Link, Outlet } from "react-router-dom";
import CustomBtn from "../../components/custom-btn/custom-btn.comp";

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="navigation">
          <div className="logo-container">
            <img src="cryptmelogo.png" alt="logo" />
          </div>
          <div className="links-container">
            <Link className="link-container">
              <span>Home</span>
            </Link>
            <Link className="link-container">
              <span>About Us</span>
            </Link>
            <Link className="link-container">
              <span>Roadmap</span>
            </Link>
            <Link className="link-container">
              <span>News</span>
            </Link>
            <CustomBtn>Buy</CustomBtn>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
