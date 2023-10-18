import './custom-btn.styles.scss'

const CustomBtn = ({ children }) => {
  return (
    <button className='custom-btn'>{children}</button>
  )
}

export default CustomBtn