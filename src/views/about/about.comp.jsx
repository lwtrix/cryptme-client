import CollaboratorThumb from "../../components/collaborator-thumb/collaborator-thumb.comp";
import "./about.styles.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="title-container">
        <span className="title">About Us</span>
        <h2 className="heading">Our Vision</h2>
      </div>
      <div className="text-container">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          debitis necessitatibus ipsum id perferendis sed sequi consectetur,
          possimus itaque est eligendi iure saepe, dolorem numquam! Dolore
          quaerat libero inventore alias? Necessitatibus, quasi quidem.
          Explicabo ducimus eveniet assumenda nisi repellat. Tempora ex,
          sapiente tempore libero nemo natus quo optio. Ipsa sapiente in ipsam
          ad possimus ullam tempora cupiditate quaerat totam modi!
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sint
          recusandae earum unde error mollitia quae blanditiis deserunt.
          Checkout our <span className="roadmap-link">roadmap</span> too see how
          we planned out the different phases
        </p>
      </div>
      <div className="team-container">
        <span className="title">The Team</span>
        <div className="collaborators-container">
          <CollaboratorThumb name={'Tim'} role={'Token Creator'}/>
          <CollaboratorThumb name={'LwTrix'} role={'Developer'}/>
          <CollaboratorThumb name={'Yapheh'} role={'Graphic Designer / CC'}/>
        </div>
      </div>
    </div>
  );
};

export default About;
