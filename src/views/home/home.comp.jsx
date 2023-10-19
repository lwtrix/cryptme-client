import "./home.styles.scss";
import Hero from "../../components/hero/hero.comp";
import InfoBanner from "../../components/status-banner/info-banner.comp";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <InfoBanner />
    </div>
  );
};

export default Home;
