import './custom-btn.styles.scss'

const CustomBtn = ({ children, size, variation, radius }) => {
  return (
    <button className={`custom-btn ${size} ${radius}`}>{children}</button>
  )
}

export default CustomBtn