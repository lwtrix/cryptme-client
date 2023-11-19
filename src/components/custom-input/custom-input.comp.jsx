import './custom-input.styles.scss'

const CustomInput = ({ type, placeholder, label, labelInfo, value, handleChange }) => {
  return (
    <div className="custom-input-container">
      <span className="label">{label}</span>
      {labelInfo && <span className='label-info'>{labelInfo}</span>}
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        value={value}
        className="input-field"
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomInput;
