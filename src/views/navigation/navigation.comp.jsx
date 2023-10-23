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
            <Link className="link-container" to={'/'}>
              <span>Home</span>
            </Link>
            <Link className="link-container" to={'/about'}>
              <span>About Us</span>
            </Link>
            <Link className="link-container" to={'/roadmap'}>
              <span>Roadmap</span>
            </Link>
            <Link className="link-container" to={'/news'}>
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
