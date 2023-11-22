import './custom-errors.styles.scss'

const CustomErrors = ({ errors }) => {
  return (
    <div className="custom-errors-container">
      {errors.map((err, i) => (
        <p key={i} className="error-message">{err.message}</p>
      ))}
    </div>
  );
};

export default CustomErrors;
