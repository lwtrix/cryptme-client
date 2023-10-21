import "./collaborator-thumb.styles.scss";

const CollaboratorThumb = ({ name, role }) => {
  return (
    <div className="collaborator-thumb-container">
      <div className="avatar-container">
        <img src="avatar-placeholder.png" alt="avatar" />
      </div>
      <div className="details-container">
        <span className="name">LwTrix</span>
        <span className="role">Developer</span>
      </div>
    </div>
  );
};

export default CollaboratorThumb;
